import React from 'react';

import test from '../../images/testingVideo.mp4';

export default function Home() {
  return (
    <div id='homeContainer' class="col-9 container-fluid">
       <h1 id='opener'>Welcome to my page!</h1>
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
        Poke raw denim flexitarian chambray waistcoat vaporware. Hashtag pour-over gorpcore locavore. Activated charcoal swag marfa vexillologist cornhole post-ironic +1. Synth readymade typewriter polaroid seitan plaid shaman.
        {/* Remaining content */}
      </p>
    </div>
  );
}
