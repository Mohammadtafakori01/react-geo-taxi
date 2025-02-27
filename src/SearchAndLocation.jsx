import React from "react";
const SearchAndLocation = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handleGetLocation,
  isLocating,
}) => {
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
        placeholder="Search location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          flex: "1 1 200px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          minWidth: "100px",
        }}
      >
        Search
      </button>
      <button
        onClick={handleGetLocation}
        disabled={isLocating}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "8px",
          minWidth: "140px",
        }}
      >
        {isLocating ? "Locating..." : "📍 Current Location"}
      </button>
    </div>
  );
};
export default SearchAndLocation;
