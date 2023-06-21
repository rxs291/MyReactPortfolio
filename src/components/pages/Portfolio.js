import React, { useState } from "react";
import backgroundImage1 from '../../images/project1.png';
import backgroundImage2 from '../../images/project2.JPG';
import backgroundImage3 from '../../images/Capture1.JPG';
import { Button, Modal } from 'react-bootstrap';
import ModalContent from '../ModalContent';




export default function Portfolio() {
  const [showModal, setShowModal] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
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


  return (
    <div className="col-9 container-fluid">
      <h1><i>Projects & Challenges</i></h1>
      <p className="myFont">
        What you're here to see I bet! Thank you for giving this a check! This is every assignment I completed during the bootcamp. If the assignment could be posted on Github/Heroku, then the title will be highlighted for you to checkout. If not, all the pictures will have a modal with the grade I received for it as well as the grader's comments on my application! <i>(Fun Fact: Graders left ZERO feedback on projects. I know.) </i>
      </p>
      <br />
      <p>Click on the title to visit the website or click on the image to see my thoughts/contributions and grader feedback if applicable! </p>


      <div className="d-flex mt-5 flex-wrap justify-content-around gap-5" >


        {/* project 1 */}
        <div className="text-center" >
          <a style={{ textDecoration: 'none' }} href="https://rxs291.github.io/5GuysMakingYourDateNight/"><i
            style={{ fontWeight: 'bold', fontSize: '1.3em' }}>
            Project1: 5 Guys Plan Your Date Night</i></a>
          <div className="" style={{ width: '25rem' }}>
            <img onClick={() => handleModalOpen('modal1')} style={{ borderRadius: '50px' }} src={backgroundImage1} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">An application to help the every day couple take the planning aspect out of their datenight and just get to cooking.</p>
            </div>
          </div>
        </div>



        {/* project 2 */}
        <div className="text-center" >
          <a style={{ textDecoration: 'none' }} href="https://play-time-over.herokuapp.com/"><i
            style={{ fontWeight: 'bold', fontSize: '1.3em' }}>
            Project2: PLAY-TIME-OVER </i></a>
          <div className="" style={{ width: '25rem' }}>
            <img onClick={() => handleModalOpen('modal2')} style={{ borderRadius: '50px' }} src={backgroundImage2} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">This is a fully functional video game with a leaderboard and a hidden easter egg!</p>
            </div>
          </div>
        </div>



        {/* project 3 */}
        <div className="text-center" >
          <a style={{ textDecoration: 'none' }} href="https://ready-pet-go-835e6edf1caa.herokuapp.com/home"><i
            style={{ fontWeight: 'bold', fontSize: '1.3em' }}>
            Project3: Ready, Pet, Go! </i></a>
          <div className="" style={{ width: '25rem' }}>
            <img onClick={() => handleModalOpen('modal3')} style={{ borderRadius: '50px' }} src={backgroundImage3} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">My final group project; a combination of a social network and ecommerce website all tailored to fit the needs of new and experience pet owners alike.</p>
            </div>
          </div>
        </div>





      </div>





      {/* all modals connected to their own picture */}
      <ModalContent showModal={showModal} handleModalClose={handleModalClose} />



    </div>
  );
}
