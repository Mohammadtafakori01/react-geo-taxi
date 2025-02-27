import React from "react";
const RouteInputs = ({
  origin,
  target,
  setSelecting,
  setOrigin,
  setTarget,
  vectorSource,
}) => {
  const clearRoute = () => {
    setOrigin(null);
    setTarget(null);
    setSelecting("origin");
    vectorSource.current.clear();
  };
  return (
    <div
      style={{
        marginBottom: "10px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        padding: "8px",
      }}
    >
      <input
        type="text"
        placeholder="Tap to set start"
        value={origin ? `${origin[0].toFixed(5)}, ${origin[1].toFixed(5)}` : ""}
        onClick={() => setSelecting("origin")}
        readOnly
        style={{
          flex: "1 1 200px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          cursor: "pointer",
        }}
      />
      <input
        type="text"
        placeholder="Tap to set destination"
        value={target ? `${target[0].toFixed(5)}, ${target[1].toFixed(5)}` : ""}
        onClick={() => setSelecting("target")}
        readOnly
        style={{
          flex: "1 1 200px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          cursor: "pointer",
        }}
      />
      <button
        onClick={clearRoute}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff4444",
          color: "white",
          border: "none",
          borderRadius: "8px",
          minWidth: "120px",
        }}
      >
        Clear Route
      </button>
    </div>
  );
};
export default RouteInputs;
