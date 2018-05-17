import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './CarouselItem'

class TopicCarousel extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem source="img.jpg" />

            </Carousel>
        );
    }
}

