import React from "react";
import "./List.css";

export const ListItem = props => {
  return (
    <div>
    <li className="list-group-item list-container list-li">
        {props.children}
    </li>
    </div>
  );
};