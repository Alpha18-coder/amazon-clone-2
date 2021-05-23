import React from 'react';
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="rounded-xl relative">
            
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators
                showThumbs={false}
                interval={5000}
                className="rounded-xl shadow-2xl m-5"
            >
                <div>
                    <img className="rounded-xl" loading="lazy" src="https://links.papareact.com/gi1" alt="" />
                    <div className="shadow-slider"/>
                </div>
                <div>
                    <img className="rounded-xl" loading="lazy" src="https://links.papareact.com/6ff" alt="" />
                    <div className="shadow-slider"/>
                </div>
                <div>
                    <img className="rounded-xl" loading="lazy" src="https://links.papareact.com/7ma" alt="" />
                    <div className="shadow-slider"/>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner;
