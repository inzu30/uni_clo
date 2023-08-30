import React from "react";

const Color = ({ colorList, handleColorClick }) => {
  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
      {colorList.map((c, index) => (
        <div
          key={c.name}
          style={{
            borderRadius: "50%",
            padding: "4px",
            border: c.isSelected ? "1px solid black" : "",
            cursor: "pointer",
          }}
          onClick={() => handleColorClick(index)}
        >
          <div
            style={{
              height: "35px",
              width: "35px",
              borderRadius: "50%",
              backgroundColor: c.name,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Color;
