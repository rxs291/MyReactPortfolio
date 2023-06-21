import React from 'react';
import { Modal } from 'react-bootstrap'; 

const ModalContent = ({ showModal, handleModalClose }) => {
 

      
  return (
<>


{/* this is the 5GuysMakingYourDateNight modal */}
        <Modal  centered scrollable show={showModal.modal1} onHide={() => handleModalClose('modal1')} keyboard={false}>
          <Modal.Header>
            <div >
              <Modal.Title > <i>  5 Guys Plan Your Date Night </i></Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <b> My Contributions</b>: 
            <br /> 
             We used two APIs on this assignment, TheCocktailDB and TheMealDB. In a 5 man group,  I personally handled the TheMealDB API call and helped with grabbing the necessary information and formatting it to the card you see render on screen. We used local storage to help save any combination of api calls (food and cocktail combo) that the user would want to keep for future use.  
            <br />
            <br />
            <b>Grader Comments</b>: N/A 
            <br /> 
            <br />
            <b>GitHub Link</b>: <a href="https://github.com/rxs291/5GuysMakingYourDateNight">5GuysMakingYourDateNight</a>
          </Modal.Body>
          <Modal.Footer>
            {/* modal footer info */}
            <b>Grade: 84/100</b>
          </Modal.Footer>
        </Modal> 

{/* this is the PLAY-TIME-OVER Modal */}
        <Modal  centered scrollable show={showModal.modal2} onHide={() => handleModalClose('modal2')} keyboard={false}>
          <Modal.Header>
            <div >
              <Modal.Title > <i>  PLAY-TIME-OVER  </i></Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <b> My Contributions</b>: 
            <br /> 
            A steep project that was completed with only TWO group members when the average group size was four or even five. My partner in the group created ALL of the game and the secret level, as well as the animated fish you see on the title bar. At this time, I constructed everything else the application used: front to back. This included the use of the framework Handlebars, normalize.css, MySQL database, Sequalize, bcrypt and all controller routes. Undoubtfully my hardest and most stressful week of my bootcamp course, but well worth as we received coveted perfect project score. Shout out to my partner Jess for keeping me in it when I was on the brink of quitting!
            <br />
            <br />
            <b>Grader Comments</b>: N/A 
            <br /> 
            <br />
            <b>GitHub Link</b>: <a href="https://github.com/js-Quest/play-time-over">PLAY-TIME-OVER</a>
          </Modal.Body>
          <Modal.Footer> 
            <b>Grade: 100/100</b>
          </Modal.Footer>
        </Modal> 

{/* this is the Ready, Pet, Go! Modal */}
        <Modal  centered scrollable show={showModal.modal3} onHide={() => handleModalClose('modal3')} keyboard={false}>
          <Modal.Header>
            <div >
              <Modal.Title > <i>  Ready, Pet, Go!  </i></Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <b> My Contributions</b>: 
            <br /> 
            My last group project of the bootcamp. I was fortunate enough to secure some great group members (as this project was the only one of the 3 where we were required to pick our own partners!) and focus on what I do best! Though I am not responsible for a majority of the CSS, I did create the Quiz that renders only on new sign up, the MeetUps/Comments page (those I did CSS!), structured the routes so that every MeetUp and User had their own page, and created a very elegant edit feature for the user profile information (which the quiz captured and appended to the new user account!). We used the MongoDB and Mongoose, which includes typeDefs, Resolvers, Mutations ect and a slew of technologies. This application was built to have depth and the ability to scale. Very proud of it.
            <br />
            <br />
            <b>Grader Comments</b>: N/A 
            <br /> 
            <br />
            <b>GitHub Link</b>: <a href="https://github.com/js-Quest/ready-pet-go">Ready, Pet, Go!</a>
          </Modal.Body>
          <Modal.Footer>
            {/* modal footer info */}
            <b>Grade: Grade to Come</b>
          </Modal.Footer>
        </Modal> 



        {/* this is the Challenge 1 modal */}
        <Modal  centered scrollable show={showModal.modal4} onHide={() => handleModalClose('modal4')} keyboard={false}>
          <Modal.Header>
            <div >
              <Modal.Title > <i>  REFREACTOR CHALLENGE  </i></Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <b> My Contributions</b>: 
            <br /> 
            INFORMATION TO COME
            <br />
            <br />
            <b>Grader Comments</b>: N/A 
            <br /> 
            <br />
            <b>GitHub Link</b>: <a href="https://github.com/js-Quest/ready-pet-go">5GuysMakingYourDateNight</a>
          </Modal.Body>
          <Modal.Footer>
            {/* modal footer info */}
            <b>Grade: 84/100</b>
          </Modal.Footer>
        </Modal> 



        </>

  );
};

export default ModalContent;