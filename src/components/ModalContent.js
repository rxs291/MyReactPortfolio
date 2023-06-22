import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalContent = ({ showModal, handleModalClose }) => {



  return (
    <>


      {/* this is the 5GuysMakingYourDateNight modal */}
      <Modal centered scrollable show={showModal.modal1} onHide={() => handleModalClose('modal1')} keyboard={false}>
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
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/5GuysMakingYourDateNight">https://github.com/rxs291/5GuysMakingYourDateNight</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 84/100</b>
        </Modal.Footer>
      </Modal>

      {/* this is the PLAY-TIME-OVER Modal */}
      <Modal centered scrollable show={showModal.modal2} onHide={() => handleModalClose('modal2')} keyboard={false}>
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
          <b>GitHub Link</b>: <a href="https://github.com/js-Quest/play-time-over">https://github.com/js-Quest/play-time-over</a>
        </Modal.Body>
        <Modal.Footer>
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>

      {/* this is the Ready, Pet, Go! Modal */}
      <Modal centered scrollable show={showModal.modal3} onHide={() => handleModalClose('modal3')} keyboard={false}>
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
          <b>GitHub Link</b>: <a href="https://github.com/js-Quest/ready-pet-go">https://github.com/js-Quest/ready-pet-go</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: Grade to Come</b>
        </Modal.Footer>
      </Modal>



      {/* this is the Challenge 1 modal */}
      <Modal centered scrollable show={showModal.modal4} onHide={() => handleModalClose('modal4')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  CodeRefactor  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          My very first challenge. Though I had a background in coding already, going through this existing code and trying to refactor it proved to be difficult early on. Overall, the task was easy, just could not comprehend the HTML and CSS at the time.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hello Rex,

          Great job deploying this application. You have a lot of great stuff going on here. You are using html  semantics. You have all of the alt attributes and the overall look of the UI is what is expected. Great job also adding a description to your README.

          A few things are impacting your score;
          You should replace the title with a more descriptive name.
          You should consolidate all identical code blocks and add comments in the css file.
          The header tags are not in sequential order. You have an h2 tag in the footer of the html file, where an h4 tag would be better suited.
          Also  In your Readme, I recommend adding more information as far as screenshots of your app, your best code practices, your tech stack, yourself as the author, the installation process, and any way to contact you. You want to make sure people viewing your code - whether it be graders or hiring managers - have a way to run your code locally. You also want to ensure that people trying to run your code will be able to contact you if they have any questions or concerns.

          Keep up the hard work!
          CG- RP
          Central Grader , Apr 6 at 9:49am

          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/BookOne-HTML-Sematics-Update-">https://github.com/rxs291/BookOne-HTML-Sematics-Update-</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 83/100</b>
        </Modal.Footer>
      </Modal>

      {/* challeng2 modal */}
      <Modal centered scrollable show={showModal.modal5} onHide={() => handleModalClose('modal5')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  First Portfolio  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          Our first "from scratch" website. Raw HTML and CSS used, no frameworks. I struggled with proper spacing and using the column and rows appropriately, even more so with the hero card concept. Would eventually have to re-do and resubmit for a better grade as evident by multiple grader comments.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Rex,

          Congratulations on a great job with your homework assignment! Your portfolio page is visually appealing and effectively meets most of the acceptance criteria.

          Firstly, I wanted to commend you on the great job you did with the navigation bar. It includes links to sections about you, your work, and how to contact you. Additionally, your navigation links to each corresponding section on the page, which helps with the user experience. Your HTML code is well-structured, and you have used appropriate semantic tags to identify different sections of your page.

          In the section about your work, the first image is larger in size than the others, great job. However, there are a couple of areas that could use some improvement. It would be helpful to have titled images or placeholders for all your work so it's easier to update your codebase with projects in the future.

          Another area that could use some improvement is your repository. Adding more comments to your code will help you and others understand what is happening in your code and make it easier to update or modify it in the future.

          Lastly, it's recommended that the application resemble the mock-up functionality provided in the Challenge instructions a bit more closely. I like how you included a placeholder for your Resume. Do no forget to add the appropriate attribute to the Resume link to make it functional. It is good practice to ensure that when a user clicks on your work/project links, they do not navigate away from your homepage.

          That being said, you have demonstrated a good understanding of concepts such as flexbox, media queries, and CSS variables, which you have used to structure and style your page. Keep up the great work!

          -Central Grader, SB.
          Central Grader , Apr 7 at 7:49pm

          <br />
          <br />
          Thank you for your resubmit Rex! Great job taking the feedback provided and completing this challenge! - Central Grader, EE
          Central Grader , Apr 23 at 9:38pm

          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/Book2-Portfolio-Start-Up" >https://github.com/rxs291/Book2-Portfolio-Start-Up</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>


      {/* challeng3 modal */}
      <Modal centered scrollable show={showModal.modal6} onHide={() => handleModalClose('modal6')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  PasswordGenerator  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          My first Javascript oriented program. A series of logic based decision making to help figure out and generate a password based on user inputs. A very fun challenge.
          <br />
          <br />
          <b>Grader Comments</b>:
          Hi Rex,

          Thanks for the submission, you absolutely nailed this assignment! The program successfully requires a character length between 8 - 128 characters and asks a series of questions regarding what characters should be included such as upper/lower case letters, numbers, and special characters. I created consistent passwords based on these prompts multiple times and the program allowed me to mix and match my choices. Well done! Looking over at your GitHub repo, you almost have everything needed for a perfect one! This includes a well-written README file with a short description, a live URL link and screenshot of the project, a healthy amount of commits, and a unique repo name. You have all of these besides a proper description of the project. Try including a few different sections about the project such as; New concepts learned, any challenges you faced, and how to work the project. Good documentation is half the battle so remember to include these for your next assignments. Other than that, awesome job with this assignment and keep up the hard work. You’re doing great! grade = 98/100

          Best,
          Central Grader, NH
          Central Grader , Apr 8 at 5:49pm

          <br />
          Hello Rex,

          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/PasswordGenerator">https://github.com/rxs291/PasswordGenerator</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 98/100</b>
        </Modal.Footer>
      </Modal>


      {/* challeng4 modal */}
      <Modal centered scrollable show={showModal.modal7} onHide={() => handleModalClose('modal7')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  QuizAndScoreKeeper  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          First application integrating HTML, CSS, and Javascript all together in one. This application practiced rendering elements to the page based on a global variable, which was the array of quiz questions. Upon completion of the quiz, it also grabs user name input and pairs it together with their score into local storage, then calling it back to render into the leaderboard.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hi Rex,
          Congratulations on an outstanding homework challenge! You were able to demonstrate your ability to build a Quiz application using HTML, CSS and JavaScript. Nice work! Double check on your ReadMe file. It looks like some things got carried over from password generator. Additionally, if you want the headers to be bold there needs to be a space between the word and the pound sign. For example: # Description will be bold and #Description will not be bold. You'll also want to expand a bit on the description of the project. All in all, great job. Keep up the great work. Caroline central grader
          Central Grader , Apr 14 at 7:03pm


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/QuizAndScoreKeeper">https://github.com/rxs291/QuizAndScoreKeeper</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 99/100</b>
        </Modal.Footer>
      </Modal>



      <Modal centered scrollable show={showModal.modal8} onHide={() => handleModalClose('modal8')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  DayPlanner  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          A logic heavy application that also required the Day.js library to work with date and time. Struggled with this originally, had to resubmit with many fixes, but I got there.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Good job on this assignment, Rex!

          The application loads at the deployed link with the date at the top and time blocks set up with color coding. However, the time blocks are not set up for a standard business day of 9AM-5PM as shown in the mock-up. Due to this issue, the color coding is also not functioning as it should. I am currently showing 2AM as the current time instead of 2PM because of the extra time blocks along with the `eventHourElement` variable definition on line 17 of the script. Adjusting the hours will help with this. I do see you were able to develop each time block with their own text area and save buttons. Great job getting the local storage functional so the entries persist on the page after reload!

          Good work on your repository. The name is unique, the structure looks good, and your code contains comments. However, I don't see a lot of commits and the commit messages are not descriptive. You want to be testing and pushing your code often. For each block of code you create, you should be pushing it with a brief but detailed commit message describing what you did with the code in that commit. This helps show the evolution of the code and creates reference points for you to go back to in case the code breaks at some point. An example of a good commit message could be `added function to add color coding to time blocks depending on time of day`. Good work getting your README developed with the description, screenshot, and link to the deployed application!

          A suggestion for future development: adding a `clear all` button for the user to reset their scheduler so they don't have to manually remove previous entries.
          This link will help add that functionality to a button:
          https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear

          Keep up the good work!
          Happy coding :)

          -CG DS
          Central Grader , Apr 16 at 2:03pm
          <br /><br />
          Amazing work Rex! Absolutely hit the nail on the head with this assignment regarding the requirements. Each timeblock contains an input field and save button, clicking a time block's save button saves the input text to local storage allowing the text to persist when the application is refreshed, and each timeblock is color coded to indicate whether it is in a past, present, or future hour. Your repo follows good practices for naming conventions, indentations, and file structure. Keep up the good work!

          CC DB
          Central Grader , Apr 24 at 2:08am


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/DayPlanner">https://github.com/rxs291/DayPlanner</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>



      <Modal centered scrollable show={showModal.modal9} onHide={() => handleModalClose('modal9')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  WeatherForecaster  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          Uses the OpenWeather API to retrieve weather data and uses localStorage to store persistent data. Use the 5 Day Weather Forecast to retrieve weather data for cities.
          <br />
          <b> resubmission notes: </b> <br />
          added the Current weather API,
          added a clear button
          implemented local storage usage
          fixed bug search issues, able to look up multi-word cities like "Salt Lake City"
          return error message and stops functions when no city information found from search results
          added more comments
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hello Rex, great work submitting your assignment. Your work shows really shows how much you've been learning so far. Unfortunately, the app fails to search for future and current weather conditions but does display the city name and dates, due to a `Failed to fetch` error at cityLookup on line 40 of script.js.

          The points deducted were from the items listed below.
          *Current weather conditions are not displayed.
          *Future weather conditions are not displayed.

          Other than that, you do an excellent job all around.

          -CG KP
          Central Grader , Apr 19 at 2:49pm
          <br /><br />
          Hi Rex,

          Thanks for the re-submission and amazing job with the Weather Dashboard assignment! I was able to search for multiple different cities and receive the current weather data such as wind speed, temperature, humidity, the date, icons to match the current weather, and the upcoming 5-day weather forecast. Not only that, but the program allows me to view my past city searches and saves them to the local storage. Amazing! You nailed this assignment right on the head and I congratulate you. Great work. Looking over at your GitHub repo, you have everything needed for a perfect one! This includes a well-written README file with a short description, a live URL link and screenshot of the project, a healthy amount of commits, and a unique repo name. You have all of these. Awesome job with this assignment and keep up the hard work. You’re doing great!

          Best,
          Central Grader, NH
          Central Grader , Apr 25 at 8:36pm


          <br />
          <br />
          <b>GitHub Link</b>: <a href=" https://github.com/rxs291/WeatherForecaster"> https://github.com/rxs291/WeatherForecaster</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>




      <Modal centered scrollable show={showModal.modal10} onHide={() => handleModalClose('modal10')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  Readme Generator </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          Used the Inquirer package in combincation with Node.js to deliver our first command line interface.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hello Rex,

          Congratulations on an exceptional job completing the homework assignment! Your ability to build a command line interface program that compiles information into a comprehensive README is truly impressive. You have done an outstanding job integrating all the necessary modules to build this feature and have met the challenge requirements without any errors in the terminal. It's great to see that you have separated out your server logic and integrated your markdown code using require, which shows a good understanding of proper coding conventions. Your JS file is a great example of clean, tight and readable functions, each with a unique purpose. Furthermore, your walkthrough video was excellent and demonstrated how a user would use, enter responses, and generate a README. Your work is exceptional, and you should be proud of what you have accomplished. Keep up the great work!  - “Central Grader TM”
          Central Grader , Apr 29 at 12:33pm


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/myReadMeGenerator">https://github.com/rxs291/myReadMeGenerator</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>



      <Modal centered scrollable show={showModal.modal11} onHide={() => handleModalClose('modal11')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i> SVG Logo Maker  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.  The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file. application should use Jest for running the unit tests and Inquirer for collecting input from the user.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hi Rex,

          Very well done on this assignment! It meets all of the requirements, is visually appealing, and appears to work as intended. Where you lost out on a few points is when working on a project make sure to commit often and descriptively. That way if your code breaks somewhere, you have a history of commits that you can revert back to in order to get a working version up and running again.

          One thing that I really appreciated about your code was that your spacing and indenting was clear and consistent throughout. This makes reading one's code so much easier to accomplish and understand.

          Very nicely done. Keep up the great work!

          -SK
          Central Grader , May 4 at 8:10am


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/logoMaker3000">https://github.com/rxs291/logoMaker3000</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 98/100</b>
        </Modal.Footer>
      </Modal>




      <Modal centered scrollable show={showModal.modal12} onHide={() => handleModalClose('modal12')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  Note Taker  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          This application will use an Express.js back end and will save and retrieve note data from a JSON file.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Rex,
          Congratulations on an outstanding homework assignment! Awesome work deploying this assignment and doing the bonus! You were able to demonstrate your ability to build an Express application with helper utility functions, a back-end with a server handling incoming requests, and made all of this information reflect on the client side! Your HTML routes are working perfectly, and they're able to render the correct view every time. That's a really important aspect of this assignment, and you've done an excellent job with it. Your API routes are working perfectly as well, and it's clear that you've put a lot of thought into making them as efficient and effective as possible. Great job on that! Overall, your code is well-written and easy to follow. Keep it up!

          Below are the missing requirements:
          * The README.md file is missing a screenshot of the application, here's a helpful reference on how to add one: https://guides.github.com/features/mastering-markdown/

          If you have any questions regarding the above, please don't hesitate to reach out to your instructional staff. We are all here to help support you.

          -Central Grader PT
          Central Grader , May 7 at 9:40pm

          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/NoteTaker">https://github.com/rxs291/NoteTaker</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>




      <Modal centered scrollable show={showModal.modal13} onHide={() => handleModalClose('modal13')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  Employee Tracker  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          Built a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL (MySQL2 package).
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hello Rex,

          Thank you for submitting your assignment.  Excellent work with your Employee Tracker!The application satisfies most of the Technical Acceptance Criteria. The area of improvement was adding an Employee.


          Great work on getting some bonus points as well! The maximum score is a 100.

          There is a slight improvement that could be made with adding an Employee, as well as some of the bonus points that you did. Giving the array of employees list an additional choice of None, will allow users to add a new employee when one is not present in the database.

          Regarding the repo itself, you want to have a descriptive and extensive commit history. They are great for “save points” in your code, not only in case something broke at some point and you have a way to reference it, but also you can look back and read your thought process on how you did things(and future employers can as well).The README passes the criteria, but I would add a little bit of color with some screenshots in there.You have the node_modules in your repo; That is an article to show you how to get rid of it: https://stackoverflow.com/questions/50675829/remove-node-modules-from-git-in-vscode

          Should you need any assistance, don’t forget to reach out to your Instructional staff or tutor(ask SSM if one is available) as an excellent source of information. Keep up the good work!

          -AJA, Central Grading
          Central Grader , May 12 at 8:25pm


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/EmployeeTrackster">https://github.com/rxs291/EmployeeTrackster</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>



      <Modal centered scrollable show={showModal.modal14} onHide={() => handleModalClose('modal14')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  E-commerce Back End  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          Built the back end for an e-commerce site. Took a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hello Rex, thanks for submitting this challenge!

          Your walkthrough video shows how to create the database from mysql shell, how to seed the database from the CLI, how to start the server, the get, post, put and delete routes for tags, products and categories, awesome work!
          I cloned your repo for local testing and at first encountered a few path issues. Seems like you moved everything out of the develop folder but forgot to update the path to the connection file in each of the models and the path to the routes in the server.js. After that, I was able to do all the routes shown in the video, the models and tables associations are correct, awesome work!
          The application includes a readme with a description and a link to the walkthrough video.
          Keep up the awesome work! Central grader TY
          Central Grader , May 15 at 1:24am


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/E_Com_BackEnd">https://github.com/rxs291/E_Com_BackEnd</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>


      <Modal centered scrollable show={showModal.modal15} onHide={() => handleModalClose('modal15')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  Tech Blog  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          Followed the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. (Also, I was docked for points when I in fact did the assignment according to specifications, never resubmitted for those points though.)
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hello Rex, great job on submitting your assignment. It seems like you have put in a lot of hard work into this assignment. Great job on deploying your project as well as getting your code properly uploaded to your GitHub repository.

          Great job on your tech blog website! You really seemed to have put in a lot of time into this website, because its looking amazing! Great work meeting the vast majority of the technical criteria for this assignment. Good work on displaying all existing blog posts on both the home page and user dashboard for their created posts, making it easy for users to navigate and find the content they're looking for. Your application dashboard includes the option to create new blog posts, and once created, they're added to the homepage and dashboard! Update and delete functionality is working great as well with no issues. The comment feature is working as expected and shows all relevant information of the user who left the comment, such as the username and date the comment was left. Your code is very cleanly written and commented, and your project file structure is very neatly organized! Tremendous job!

          Your repository is looking good as well! Good work on having an decent commit history with proper descriptions to show your progress and workflow as you developed your blog site. Great job as well on having a great README! Your README includes a brief description of your project, steps for installation, and usage details, as well as a screenshot of the website! Good job!

          The points deducted were for the reasons listed below:
          - Your site should automatically redirect users to the login/signup page if they are not currently logged in. At the moment, it seems your deployment is missing that one feature.
          - Your README should also contain a link to the deployment of your website. Make sure to include this for future assignments!

          Beyond that, you did a marvelous job! I am extremely impressed with your work and your commitment to making a great application. You're really learning the material and applying the knowledge to your work! Keep up the hard work on your future assignments!  -Central Grader, GC
          Central Grader , May 26 at 10:46am

          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/TechBloggers">https://github.com/rxs291/TechBloggers</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 96/100</b>
        </Modal.Footer>
      </Modal>





      <Modal centered scrollable show={showModal.modal16} onHide={() => handleModalClose('modal16')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  Regex Tutorial  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          Includes sections that correspond to each of the components that make up the regex. Describes what each component does, a snippet of the component, and at least one example of the component.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hello Rex,

          Congratulations on an outstanding homework assignment! I must say, you really knocked it out of the park with your Regex module gist tutorial! It's evident that you have a strong grasp of the topic and your tutorial demonstrated that beautifully.

          I was particularly impressed with how you structured your tutorial. It was organized in a clean and readable manner, making it easy to follow along. Your explanations of the purpose, power, and proper usage of regex were spot-on, and it's clear that you put a lot of effort into providing deep insights.

          Your gist repo is truly comprehensive. I appreciate the way you weaved together the underlying regex topics and provided detailed sections that corresponded to important components in the starter code. Each component was described thoroughly, and I actually learned a few things myself! The inclusion of code snippets for each example was also a great touch.

          Speaking of your GitHub gist, it's fantastic! You created a unique tutorial that covers all the necessary markdown for a comprehensive learning resource. Your adherence to best practices for the gist structure, multiple descriptive commits, and the presence of a quality README file really stood out.

          I want to take a moment to highlight how impressed I am with your ability to create learning materials not only for students but also for engineers. It's clear that you're building upon the skills you've acquired so far and going above and beyond. Keep up the great work!

          Once again, I want to commend you on this amazing tutorial on Regex. Your dedication and the flow you've established are truly commendable. Keep up the excellent work!

          CG, TGA
          Central Grader , May 29 at 4:46pm


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://gist.github.com/rxs291/ab60e1d875e59b94f7e5f8ab545f7f20">https://gist.github.com/rxs291/ab60e1d875e59b94f7e5f8ab545f7f20</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>



      <Modal centered scrollable show={showModal.modal17} onHide={() => handleModalClose('modal17')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  Social Network API  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          Used Express.js for routing, a MongoDB database, and the Mongoose ODM.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hi Rex!
          Congrats on submitting another assignment! You built a backend using Mongo and Mongoose, and express, and were able to test out all your routes in insomnia in your video which is awesome to see.
          Great job organizing your code by having a models, controllers, and routes, directory. This improves readability and sustainability should your backend scale. This makes it quite easy to address the logic of your queries, address the schemas, or see the routes and endpoints. APIs usually follow this convention, no matter the language, so it’s important to build up this habit.
          You were also able to use mongoose’s connect method to establish your database connection, and in your respective models files, create schemas that contained the appropriate fields. You also properly embedded reactions, and thoughts, as subdocuments into the corresponding models. Nicely done.
          Great job with your video, also appreciate the organziation you had in insomia, your walkthrough met all of the requirements as it showed how to start your server, went through the corresponding GET routes for the user and thoughts resources, as well as a GET for each ID. You also demonstrated full CRUD with the POST, PUT, and DELETE methods for multiple thoughts and users. You were also able to test out your API too, which is extremely important to get data to the client.
          On your thought controller and user controller, great use of mongoose’s populate method to make sure mongoose pulls the corresponding field. I see that you also used the select to not include mongo’s version with the select: "-__v”. Awesome job! On your Models, great job using validators, having them on the model is a bit more robust too. You also demonstrate great understanding of JS promises by utilizing async / await and try / catch blocks. It makes the code so much more clean. Great usage of status codes where appropriate, such as 404, 500 etc. nice to see and in the client you can handle responses using status codes like that.
          Great work using if checks to check if the user exist when getting the getSingle, updateUser, delete etc. That was awesome to see and not needed, but it makes your API handle more edge cases. This is fantastic work! I would challenge you since you find yourself repeating that if statement over and over to refactor it into a helper function and call that function where needed. But this was awesome to see!
          Again, awesome organization of your repo, and your code is clean with efficient comments. You created a unique repo and followed best practices in terms of coding conventions. I would recommend committing in smaller chunks with more descriptive messages, on a team it makes it easier to maintain.

          Overall, phenomenal work! You met all of the technical requirements and I hope you enjoyed working with nosql databases! Keep up the great work!
          Central Grader RR
          Central Grader , Jun 3 at 7:10pm


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/FriendsNetworkApi">https://github.com/rxs291/FriendsNetworkApi</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 100/100</b>
        </Modal.Footer>
      </Modal>





      <Modal centered scrollable show={showModal.modal18} onHide={() => handleModalClose('modal18')} keyboard={false}>
        <Modal.Header>
          <div >
            <Modal.Title > <i>  (PWA): Text Editor  </i></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <b> My Contributions</b>:
          <br />
          The application is a single-page app that meets PWA criteria. Features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.
          <br />
          <br />
          <b>Grader Comments</b>:
          <br />
          Hei hei, Rex!
          Congratulations on a great homework assignment!
          It looks like you forgot to include a link to the deployed app in your README.md. I also noticed that you have duplicate /assets/ directory in the root of your app. Please remember that the /assets/ directory should only be located in the /client/ directory of your app.

          Your app is 95% completed! You did excellent work so far, but I encourage you to look into the bug of an offline note that is joining the old data and new data together Is there a way to take the old data and have it replaced by the new data instead? This is an excellent bug to deep dive with a Learning Assistant, Tutor, or one of your Teacher’s Assistants.

          Mary E.
          Central Grader , Jun 5 at 2:39pm


          <br />
          <br />
          <b>GitHub Link</b>: <a href="https://github.com/rxs291/FinalTextEditor">https://github.com/rxs291/FinalTextEditor</a>
        </Modal.Body>
        <Modal.Footer>
          {/* modal footer info */}
          <b>Grade: 93/100</b>
        </Modal.Footer>
      </Modal>









    </>

  );
};

export default ModalContent;