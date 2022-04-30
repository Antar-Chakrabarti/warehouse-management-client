import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src="https://i.ibb.co/Mhjr9q7/inventory-4.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src="https://i.ibb.co/GCPwj1G/inventory-2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src="https://i.ibb.co/xCPnd44/inventory-3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel> 
        </>
    );
};

export default Banner;