import React, { useState, useEffect   } from "react";
import backgroundImage1 from '../../images/project1.png';
import backgroundImage2 from '../../images/project2.JPG';
import backgroundImage3 from '../../images/Capture1.JPG';


import ModalContent from '../ModalContent';

import codeRefractor from '../../images/01-html-css-git-homework-demo2.png';
import firstPortfolio from '../../images/firstPortfolio.JPG';
import passwordGenerator from '../../images/passwordGenerator.JPG';
import quizAndScorekeeper from '../../images/quizAndScorekeeper.JPG';
import dayPlanner from '../../images/dayPlanner.JPG';
import weatherDashboard from '../../images/weatherDashboard.JPG';
import readmeGenerator from '../../images/readmeGenerator.JPG';
import svgLogoMaker from '../../images/svgLogoMaker.JPG';
import noteTaker from '../../images/noteTaker.JPG'
import employeeTracker from '../../images/employeeTracker.JPG'
import ecomBackend from '../../images/ecomBackend.JPG'
import techBloggers from '../../images/techBloggers.JPG'
import regexTutorial from '../../images/regexTutorial.JPG'
import friendsNetwork from '../../images/friendsNetwork.JPG'
import textEditor from '../../images/textEditor.JPG'



export default function Portfolio() {
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
  const [activeElement, setActiveElement] = useState('');  
  const handleClick = (element) => {
    setActiveElement(element === activeElement ? '' : element); 
    scrollToBottom();
  };



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
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeElement]);


  return (

    <>
      <div className="col-9 container-fluid pb-5">

        <h1>Projects & Challenges</h1>
        <p className="myFont">
          What you're here to see I bet! Thank you for giving this a check! This is every assignment I completed during the bootcamp. If the assignment could be posted on Github/Heroku, then the title will be highlighted for you to checkout. If not, all the pictures will have a modal with the grade I received for it as well as the grader's comments on my application! <i>(Fun Fact: Graders left ZERO feedback on projects. I know.) </i>
        </p>
        <br />
        <p>Click on the <i>title</i> to visit the website or click on the <i>image</i> to see my thoughts/contributions and grader feedback if applicable! </p>

        <div className="d-flex mt-5 flex-wrap justify-content-around gap-5" >

          {/* project 1 */}
          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://rxs291.github.io/5GuysMakingYourDateNight/"><h5>
              Project1: 5 Guys Plan Your Date Night</h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal1')} src={backgroundImage1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">An application to help the every day couple take the planning aspect out of their datenight and just get to cooking.</p>
              </div>
            </div>
          </div>



          {/* project 2 */}
          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://play-time-over.herokuapp.com/"><h5>
              Project2: PLAY-TIME-OVER </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal2')} src={backgroundImage2} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">This is a fully functional video game with a leaderboard and a hidden easter egg!</p>
              </div>
            </div>
          </div>



          {/* project 3 */}
          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://ready-pet-go-835e6edf1caa.herokuapp.com/home"><h5>
              Project3: Ready, Pet, Go! </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal3')} src={backgroundImage3} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">My final group project; a combination of a social network and ecommerce website all tailored to fit the needs of new and experience pet owners alike.</p>
              </div>
            </div>
          </div>





        </div>

      </div>


      <div className="d-flex justify-content-around container-fluid">
        <div onClick={() => handleClick('list1')}>
          <h3 >testing1</h3>
          
        </div>
        <div onClick={() => handleClick('list2')} >
          <h3>testing 2</h3>
        </div>
        <div onClick={() => handleClick('list3')}>
        <h3>testing 3 </h3>
        </div>
        <div onClick={() => handleClick('list4')}>
        <h3>testing 4 </h3>
        </div>
      </div>




      <div   className={`col-6 container-fluid hidden pb-5 ${activeElement === 'list1' ? 'list1' : ''}`}  > 
        {/* this container houses all the Challenges */} 
        <div className="d-flex mt-5 flex-wrap justify-content-around gap-5" >  
          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://rxs291.github.io/BookOne-HTML-Sematics-Update-/"><h5>
              Challenge1: CodeRefactor </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal4')} src={codeRefractor} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">A psuedo web page given to us and we were tasked with refactoring it as best as we could.</p>
              </div>
            </div>
          </div>
 
          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://rxs291.github.io/Book2-Portfolio-Start-Up/#"><h5>
              Challenge2: First Portfolio </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal5')} src={firstPortfolio} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">My original Portfolio! Definitely worth a look to compare with this one!</p>
              </div>
            </div>
          </div>

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://rxs291.github.io/PasswordGenerator/"><h5>
            Challenge3: PasswordGenerator </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal6')} src={passwordGenerator} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">An application that asks you a few questions and generates a password based on your requests.</p>
              </div>
            </div>
          </div> 

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://rxs291.github.io/QuizAndScoreKeeper/"><h5>
            Challenge4: QuizAndScoreKeeper</h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal7')} src={quizAndScorekeeper} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">A quiz application that scores you based on correct answers. Every wrong answers deducts 15 seconds from your timer! Scores are saved into local storage and rendered at the end of the quiz as a leaderboard.</p>
              </div>
            </div>
          </div>

 
        </div>

      </div>




      <div   className={`col-6 container-fluid hidden pb-5 ${activeElement === 'list2' ? 'list2' : ''}`}  > 
        {/* this container houses all the Challenges */}

        <div className="d-flex mt-5 flex-wrap justify-content-around gap-5" >  

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://rxs291.github.io/DayPlanner/"><h5>
              Challenge5: DayPlanner </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal8')} src={dayPlanner} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">A planner that highlights the event hour based on what time it is. If the time has passed, the area is grayed out. If its the current hour, it has a red background. All future hours are highlighted green.</p>
              </div>
            </div>
          </div>
 
          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href=" https://rxs291.github.io/WeatherForecaster/"><h5>
            Challenge6: WeatherForecaster </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal9')} src={weatherDashboard} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">An application that accepts any city input and outputs a 5 day forcast for that city!</p>
              </div>
            </div>
          </div>

  

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/15q1KjnbFvL6gxQOR3b5xBIMfSNji4cIW/view"><h5>
            Challenge9: Readme Generator</h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal10')} src={readmeGenerator} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">Quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project. The title links to a video of the application. </p>
              </div>
            </div>
          </div>  


          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1JrSOYYTGwTmB-DcVkV3MWSJoSzgxl9nT/view"><h5>
            Challenge10: SVG Logo Maker</h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal11')} src={svgLogoMaker} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">Another command line application that through a series of questions will generate a logo on a .svg file! The title links to a video of the application. </p>
              </div>
            </div>
          </div> 
 
        </div>

      </div>



      <div   className={`col-6 container-fluid hidden pb-5 ${activeElement === 'list3' ? 'list3' : ''}`}  > 
        {/* this container houses all the Challenges */} 

        <div className="d-flex mt-5 flex-wrap justify-content-around gap-5" >  

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://note-taker-rxs291.herokuapp.com/"><h5>
              Challenge11: Note Taker </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal12')} src={noteTaker} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">An application that can be used to write and save notes.</p>
              </div>
            </div>
          </div> 
 
  
 
          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href=" https://drive.google.com/file/d/1QENejUbI0rEbUf5gREckd9QmZNEZ-6rx/view"><h5>
            Challenge12: Employee Tracker </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal13')} src={employeeTracker} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">
                A CLI app that interacts with information stored in a database.
                </p>
              </div>
            </div>
          </div> 
  

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1nOSrCxf4d8umqNnCqFToyb6_-qFlPSH1/view"><h5>
            Challenge13: E-commerce Back End </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal14')} src={ecomBackend} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">The backend portion of an ecommerce site! Full create, request, update, delete operations. </p>
              </div>
            </div>
          </div>   

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://techbloggers.herokuapp.com"><h5>
            Challenge14: Tech Blog</h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal15')} src={techBloggers} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">A website that allows the user to post blogs, delete them from from their profile page and comment on other posts!</p>
              </div>
            </div>
          </div> 
 
        </div> 
      </div>



      <div   className={`col-6 container-fluid hidden pb-5 ${activeElement === 'list4' ? 'list4' : ''}`}  > 
        {/* this container houses all the Challenges */} 

        <div className="d-flex mt-5 flex-wrap justify-content-around gap-5" >  

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://gist.github.com/rxs291/ab60e1d875e59b94f7e5f8ab545f7f20"><h5>
              Challenge17: Regex Tutorial </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal16')} src={regexTutorial} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">A tutorial that explains how a specific regular expression, or regex, functions by breaking down each part of the expression and describing what it does. This assignment was completed in a gitHub gist.</p>
              </div>
            </div>
          </div> 
   
          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href=" https://drive.google.com/file/d/1g-aidqEs8xgF_XWaPaDnQlxcp39IK85E/view"><h5>
            Challenge18: Social Network API </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal17')} src={friendsNetwork} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">
                Built an API for a social network web application where users can share their thoughts, react to friend's thoughts, and create a friend list.
                   The title links to a video of the application.
                </p>
              </div>
            </div>
          </div> 

 
 
  

          <div className="text-center" >
            <a style={{ textDecoration: 'none' }} href="https://finaltexteditor.herokuapp.com/"><h5>
            Challenge13: (PWA): Text Editor </h5></a>
            <div className="cardContainer">
              <img onClick={() => handleModalOpen('modal18')} src={textEditor} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p className="card-text">Built a text editor that runs in browser, but is downloadable and can run offline. </p>
              </div>
            </div>
          </div>   
 
 
        </div>



      </div>


      


      {/* all modals connected to their own picture */}
      <ModalContent showModal={showModal} handleModalClose={handleModalClose} />



    </>
  );
}
