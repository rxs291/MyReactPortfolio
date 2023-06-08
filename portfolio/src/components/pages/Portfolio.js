import React from "react";
import backgroundImage1 from '../../images/project1.png';
import backgroundImage2 from '../../images/project2.JPG';


 

export default function Portfolio() {


  const img = {
    objectFit: 'contain'
  }

  const images = {
    project1: {
      backgroundImage: `url(${backgroundImage1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    
    },
    project2: {
      backgroundImage: `url(${backgroundImage2})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
  };

  const background = {
    backgroundColor: 'white', 
    opacity: 0.85,
    color: 'black', 
    width: '50%',
    margin: 'auto'

  }
   

  return (
    <div class="col-9 container-fluid">
      <h1>Portfolio Page</h1>
      <p>
        I'm baby schlitz pitchfork scenester keffiyeh organic poke fingerstache
        glossier leggings intelligentsia fashion axe fam master cleanse bespoke.
        Umami blackbird spyplane air plant gentrify kickstarter post-ironic fit
        pitchfork yes plz bruh 90's scenester. Scenester tofu next level
        coloring book tumeric lyft offal occupy polaroid. Flexitarian same pug
        woke, sustainable four dollar toast yes plz street art vexillologist. +1
        tattooed solarpunk, portland VHS 8-bit franzen sus trust fund. Vape
        cronut synth austin tote bag cray whatever. Small batch deep v kogi,
        tacos marxism distillery shoreditch portland hashtag crucifix cornhole
        hammock blog. Banjo helvetica mukbang, skateboard seitan tumblr DSA
        sriracha. Banh mi vice wayfarers everyday carry gastropub meh stumptown
        tumeric. Kitsch prism jawn gorpcore chicharrones taiyaki post-ironic
        bespoke yuccie tonx JOMO retro sustainable. Migas vinyl roof party
        affogato swag cred. Trust fund venmo humblebrag PBR&B prism snackwave
        mustache artisan actually. Kogi umami pok pok, pickled meh readymade
        wolf cliche DIY. Photo booth hell of art party, adaptogen chambray 3
        wolf moon vape cardigan letterpress cupping pug gatekeep. Leggings
        poutine raclette lomo tonx, cloud bread big mood plaid lyft butcher
        fashion axe cray.
      </p>

      <div className="d-flex row justify-content-center gap-5">
        <div className="card text-center w-25 p-3">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Project 3</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-body-secondary">
            2 days ago
          </div>
        </div>
        <div className="card text-center w-25 p-3" style={images.project2}>
          <div className="card-header">
            Featured
          </div>
          <div className="card-body " style = {background}>
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-body-secondary">
            2 days ago
          </div>
        </div>
        <div className="card text-center w-25 p-3" >
          <div className="card-header fw-bold fst-italic">
            5 Guys Plan Your Date Night
          </div>
          <div className="card-body" style={images.project1}>
            <h5 className="card-title"></h5>
            <p className="card-text"></p> 
            
          </div>
          <div className="card-footer text-body-secondary">
          <a href="https://rxs291.github.io/5GuysMakingYourDateNight/" className="btn fw-bold">Visit Site</a>
          </div>
        </div>
      </div>

    </div>
  );
}
