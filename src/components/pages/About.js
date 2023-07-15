import React from 'react';
import kiProfilePic from '../../images/kiProfilePic.jpg'

import Carousel from '../Carousel'

export default function About() {
  return (
    <div id='aboutContainer' className="col-9 container-fluid d-flex justify-content-around flex-wrap">



      <div className='container col-5 mt-5'>
        <h1>Get To Know Me</h1>

        <div className='container-fluid d-flex flex-row flex-wrap justify-content-center pt-4 align-items-center'>
          <img id='aboutPic' className='mb-3 mt-2' src={kiProfilePic} alt="coolKiPic" />

          <p>I'm a proud dog dad to two hyperactive furballs, Malcolm and Jupiter, and uncle to Maka. These three bring so much love and laughter to my life, I can't imagine a world without them! I'm also a full-time volleyball junky and dedicated gym rat! I live for the intense, highly competitive matches that get my heart racing and firmly believe that a strong body fosters a strong mind.
          <br />
      <br /><hr className='paragraphBreak' /> <br />

             And to <i>really</i> put myself out there, I've also got this burning desire to make the world a better place. I truly believe that with enough determination and collaboration, we can create a society that's kinder, more inclusive, and more compassionate. So, I'm on a mission to do my part, using my skills and influence to drive meaningful change.

            And thats it! Dog fanatic, volleyball enthusiast, and a dreamer with a mission to change the world for the better. Together, let's make a difference!</p>

        </div>
      </div>

      <div className='container col-5 mt-5'>

        <div className='carousel container pt-5 mt-5 pe-5 '>
          <Carousel />
        </div>

      </div>
    </div>
  );
}
