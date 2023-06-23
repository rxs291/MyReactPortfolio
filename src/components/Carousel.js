import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import noteTaker from '../images/noteTaker.JPG' // Assuming you have an image file for the carousel item
import ModalContent from './ModalContent';


const CarouselComponent = () => {

    const [showModal, setShowModal] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
        modal8: false,
        modal9: false,
        modal10: false,
        modal11: false,
        modal12: false,
        modal13: false,
        modal14: false,
        modal15: false,
        modal16: false,
        modal17: false,
        modal18: false,
        modal19: false,
    });

    const handleModalOpen = (modalName) => {
        setShowModal((prevState) => ({
            ...prevState,
            [modalName]: true,
        }));
    };

    const handleModalClose = (modalName) => {
        setShowModal((prevState) => ({
            ...prevState,
            [modalName]: false,
        }));
    };



    const carouselItems = [
        // Array of carousel items goes here
        {
            title: 'Challenge11: Note Taker',
            description: 'An application that can be used to write and save notes.',
            link: 'https://note-taker-rxs291.herokuapp.com/',
            image: noteTaker,
        },
        {
            title: 'Challenge11: Note Taker',
            description: 'An application that can be used to write and save notes.',
            link: 'https://note-taker-rxs291.herokuapp.com/',
            image: noteTaker,
        },
        // Add more carousel items here
    ];

    return (
        <>
        

        <Carousel  showArrows={true} showThumbs={false} infiniteLoop={true}>
            {carouselItems.map((item, index) => (
                <div  key={index} className="text-center">
                    <a style={{ textDecoration: 'none' }} href={item.link}>
                        <h5>{item.title}</h5>
                    </a>
                    <div onClick={() => handleModalOpen(`modal${index + 1}`)} className="cardContainer">
                        <img
                            onClick={() => handleModalOpen(`modal${index + 1}`)}
                            src={item.image}
                            className="card-img-top"
                            alt={item.title}
                        />
                        <div className="card-body">
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))} 
        </Carousel>

        <ModalContent showModal={showModal} handleModalClose={handleModalClose} />
        </>
    );
};

export default CarouselComponent;
