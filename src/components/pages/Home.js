import React from 'react';

import test from '../../images/testingVideo.mp4';

export default function Home() {
  return (
    <div id='homeContainer' class="col-8 container-fluid">
       <h1 id='opener'>Welcome To My Page!</h1>
    <div id='videoContainer'>
      
        <video
          src={test}
          style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
          title="video"
          autoPlay 
          loop
          muted

        />
      </div>
      <p>
      Hey there! My name is Rex (though I go by Ki),  I'm a newly graduated full-stack web developer from the University of Texas at Austin, completing my intensive bootcamp in June 2023. With over 10 years of valuable customer service experience, I bring a unique perspective and skill set to my development work. Though I take a simple yet professional approach to front-end development, where I truly excel is in my back-end capabilities, implementing robust and efficient solutions to drive seamless functionality and enhance user interactions.
      <br />
      <br /><hr className='paragraphBreak' /> <br />
      Throughout my career, I've honed my ability to understand and address the needs of clients and users, ensuring that their requirements are met with precision and efficiency. This customer-centric mindset drives me to go above and beyond in delivering high-quality web applications that not only meet expectations but also exceed them.
      <br />
      <br /><hr className='paragraphBreak' /> <br />
      Feel free to explore my portfolio and discover the diverse range of projects I've worked on, showcasing my skills, creativity, and problem-solving abilities. I'm excited to collaborate on new opportunities and bring your ideas to life with my expertise in full-stack web development. 



        {/* Remaining content */}
      </p>
    </div>
  );
}
