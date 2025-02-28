import React, { useState, useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import { Point, LineString } from "ol/geom";
import { fromLonLat, toLonLat } from "ol/proj";
import { Style, Stroke, Circle as CircleStyle, Fill } from "ol/style";
import SearchAndLocation from "./SearchAndLocation";
import RouteInputs from "./RouteInputs";
const MapWrapper = ({ onRouteChange }) => {
  const mapRef = useRef(null);
  const vectorSource = useRef(new VectorSource());
  const [origin, setOrigin] = useState(null);
  const [target, setTarget] = useState(null);
  const [selecting, setSelecting] = useState("origin");
  const selectingRef = useRef(selecting);
  useEffect(() => {
    if (onRouteChange) {
      onRouteChange({ origin, target, distance });
    }
  }, [origin, target, distance, onRouteChange]);
  useEffect(() => {
    selectingRef.current = selecting;
  }, [selecting]);
  const [searchQuery, setSearchQuery] = useState("");
  const [map, setMap] = useState(null);
  const [distance, setDistance] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [coordinate, setCoordinate] = useState(fromLonLat([51.389, 35.6892]));
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCurrentLocation([pos.coords.longitude, pos.coords.latitude]);
        setIsLocating(false);
      },
      (err) => {
        alert("Error getting location: " + err.message);
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };
  useEffect(() => {
    if (currentLocation && map) {
      vectorSource.current
        .getFeatures()
        .filter((f) => f.get("type") === "current")
        .forEach((f) => vectorSource.current.removeFeature(f));
      const marker = new Feature({
        type: "current",
        geometry: new Point(fromLonLat(currentLocation)),
      });
      marker.setStyle(
        new Style({
          image: new CircleStyle({
            radius: 8,
            fill: new Fill({ color: "#4285F4" }),
            stroke: new Stroke({ color: "#fff", width: 2 }),
          }),
        })
      );
      vectorSource.current.addFeature(marker);
      map
        .getView()
        .animate({
          center: fromLonLat(currentLocation),
          zoom: 16,
          duration: 500,
        });
    }
  }, [currentLocation, map]);
  useEffect(() => {
    const mapInstance = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        new VectorLayer({ source: vectorSource.current }),
      ],
      view: new View({ center: coordinate, zoom: 13 }),
    });
    mapInstance.on("click", (evt) => {
      const lonLat = toLonLat(evt.coordinate);
      if (selectingRef.current === "origin") {
        setOrigin(lonLat);
        setSelecting("target");
      } else if (selectingRef.current === "target") {
        setTarget(lonLat);
        setSelecting(null);
      }
    });
    setMap(mapInstance);
    return () => mapInstance.setTarget(null);
  }, []);
  useEffect(() => {
    if (origin && target) {
      const start = `${origin[0].toFixed(6)},${origin[1].toFixed(6)}`;
      const end = `${target[0].toFixed(6)},${target[1].toFixed(6)}`;
      fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62489995d5e5960e4f1e8d9959039de493d5&start=${start}&end=${end}`
      )
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          const coords = data.features[0].geometry.coordinates.map(([lo, la]) =>
            fromLonLat([lo, la])
          );
          const route = new Feature(new LineString(coords));
          route.setStyle(
            new Style({ stroke: new Stroke({ color: "blue", width: 4 }) })
          );
          vectorSource.current.addFeature(route);
          setDistance(data.features[0].properties.summary.distance);
          map
            .getView()
            .fit(route.getGeometry().getExtent(), {
              padding: [50, 50, 50, 50],
              duration: 500,
            });
        })
        .catch((e) => console.error("Route error:", e.message));
    }
  }, [origin, target, map]);
  useEffect(() => {
    vectorSource.current.clear();
    if (origin) {
      const of = new Feature(new Point(fromLonLat(origin)));
      of.setStyle(
        new Style({
          image: new CircleStyle({
            radius: 6,
            fill: new Fill({ color: "green" }),
          }),
        })
      );
      vectorSource.current.addFeature(of);
    }
    if (target) {
      const tf = new Feature(new Point(fromLonLat(target)));
      tf.setStyle(
        new Style({
          image: new CircleStyle({
            radius: 6,
            fill: new Fill({ color: "red" }),
          }),
        })
      );
      vectorSource.current.addFeature(tf);
    }
  }, [origin, target]);
  const handleSearch = async () => {
    try {
      const r = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery
        )}`
      );
      const d = await r.json();
      if (d.length > 0) {
        const c = fromLonLat([parseFloat(d[0].lon), parseFloat(d[0].lat)]);
        setCoordinate(c);
        map.getView().animate({ center: c, zoom: 15, duration: 500 });
      } else {
        alert("Location not found");
      }
    } catch (e) {
      console.error("Search error:", e);
    }
  };
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <SearchAndLocation
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleGetLocation={handleGetLocation}
        isLocating={isLocating}
      />
      <RouteInputs
        origin={origin}
        target={target}
        setSelecting={setSelecting}
        setOrigin={setOrigin}
        setTarget={setTarget}
        vectorSource={vectorSource}
      />
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: "50vh",
          minHeight: "400px",
          touchAction: "none",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};
export default MapWrapper;
