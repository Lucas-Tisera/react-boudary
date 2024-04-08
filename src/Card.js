import React from "react";

export const Card = ({ children }) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
