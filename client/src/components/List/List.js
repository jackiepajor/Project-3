import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-container">
      <ul className="inner-list">
        {children}
     
      </ul>
    </div>
  );
};