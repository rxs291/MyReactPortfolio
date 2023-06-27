import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import malcolmAndMe from '../images/malcolmAndMe.jpg';
import malcolmReal from '../images/malcolmReal.jpg';
import jupiter from '../images/jupiter.jpg';
import jupiterReal from '../images/jupiterReal.jpg';
import makaReal from '../images/makaReal.jpg';
import maka from '../images/maka.jpg';


const CarouselComponent = () => {





    const carouselItems = [
        // Array of carousel items goes here
        {
            title: 'Malcolm',
            description: 'Malcolm', 
            image: malcolmReal,
        },
        {
            title: 'Malcolm InkArt',
            description: 'Malcolm fast asleep.', 
            image: malcolmAndMe,
        },
        {
            title: 'Maka',
            description: 'Maka, step-sibling.', 
            image: makaReal,
        }, 
        {
            title: 'Maka InkArt',
            description: 'She was "Princess" before I adopted her.', 
            image: maka,
        },
        {
            title: 'Jupiter',
            description: 'We thought Jupiter was gonna grow up, but he stayed tiny.', 
            image: jupiterReal,
        }, 
        {
            title: 'Jupiter InkArt',
            description: 'Always has that look on his face.', 
            image: jupiter,
        },

        // Add more carousel items here
    ];
 
    return (
        <>


            <Carousel  useKeyboardArrows={true} showArrows={true} showThumbs={true}  infiniteLoop={true}



            
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className="text-center align-items-center justify-content-center d-flex">
                        
                        <div className="cardContainer2">
                            <img
                            
                                src={item.image}
                                className="card-img-top"
                                alt={item.title}
                            />
                            <div className="card-body align-items-center pt-3">
                                <p className="">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>


        </>
    );
};

export default CarouselComponent;


 