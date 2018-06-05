import React from "react";

export const AccordianItem = props => {
  return (
    <div class="card">
      <div class="card-header" id={props.itemId}>
        <h5 class="mb-0">
          <button class="btn collapsed" data-toggle="collapse" data-target={`collapseOne${props.itemId}`} aria-expanded="false" aria-controls={`collapseOne${props.itemId}`} onClick={() => props.handleUnitClick(props.itemId)}>
            {props.header}
        </button>
        </h5>
      </div>

      <div id={`collapseOne${props.itemId}`} class="collapse show" aria-labelledby={props.itemId} data-parent="#accordion">
        <div class="card-body">
          {props.children}
        </div>
      </div>
    </div>
  )
};