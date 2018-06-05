import React from "react";

export const CourseAccordian = (props) => {
  return (
    <div id="accordion" className={props.className}>
      {props.children}
    </div>
  )
};