import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <div > 
    <ul style={{backgroundColor: '#26495c'}}  className="nav d-flex justify-content-end mb-4 py-2 fs-5 fst-italic fw-bolder " >


      <div className='container'><h1 className='nameTitle'>Rex (Ki) Sarchan</h1></div> 

      <li id='hoverLink' className="nav-item ps-1 ">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className=  {currentPage === 'Home' ? 'nav-link active ' : 'nav-link'} 
          style={{ color: currentPage === 'Home' ? 'var(--ochre)' : 'white' }}
        >
          Home
        </a>
      </li>
      <li id='hoverLink' className="nav-item ps-1">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={{ color: currentPage === 'About' ? 'var(--ochre)' : 'white' }}

        >
          About
        </a>
      </li>
      <li id='hoverLink' className="nav-item ps-1">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active ' : 'nav-link'}
          style={{ color: currentPage === 'Portfolio' ? 'var(--ochre)' : 'white' }}
        >
          Portfolio
        </a>
      </li>
      <li id='hoverLink' className="nav-item ps-1">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={{ color: currentPage === 'Contact' ? 'var(--ochre)' : 'white' }}
        >
          Contact
        </a>
      </li>
    </ul>

    </div>
  );
}

export default NavTabs;
