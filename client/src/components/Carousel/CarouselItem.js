import React from "react";

const CarouselItem = props => {
    return (
        <div>
            <img src={props.source} />
            <p className="legend">Legend 1</p>
        </div>
    );
}

export default CarouselItem;