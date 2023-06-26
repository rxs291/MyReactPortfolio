import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6qj37jc', 'template_htna63o', form.current, 'T1p2PTfGwcRvD4fck')
      .then((result) => {
        console.log(result.text);
        console.log('message sent')
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <div id="contactContainer" className="container d-flex flex-wrap justify-content-around  mt-5 pt-5">
        <div>
        <h1 className='pb-4'>Contact Me Here</h1>
        <ul>
          <li id='linksList'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
            <a id='contactLinks' href='https://www.linkedin.com/in/rex-ki-sar-797a82279/'> https://www.linkedin.com/</a>
          </li>
          <li id='linksList'>
            <FontAwesomeIcon icon={faEnvelope} size='2x' />
            <a id='contactLinks' href="#"> rxs291@yahoo.com</a>
          </li>
          <li id='linksList'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
            <a id='contactLinks' href="https://github.com/rxs291"> https://github.com/rxs291</a>
          </li>
          <li id='linksList'>
            <FontAwesomeIcon icon={faInstagram} size='2x' />
            <a id='contactLinks' href='https://www.instagram.com/sarchanrex/'> https://www.instagram.com/</a>
          </li>
        </ul>
        </div>
        <div>

        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
        </div>

        <div className="container text-center mt-4 pt-5">
        <p><i>Thank you for visiting!</i></p>
      </div>
        
      </div>

       
    </div>
  );
}

const StyledContactForm = styled.div`
  width: 100%;

  form {
    display: flex;
    width: 27rem;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px; 

    input,
    textarea {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 3px solid var(--cream);

      &:focus {
        border: 2px solid rgba(38, 73, 92, 1);
      }
    }

    textarea {
      min-height: 100px;
      max-height: 200px;
    }

    label {
      margin-top: 1rem;
      font-size: 1.5rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }

  @media (max-width: 600px) {
    form {
      font-size: 14px;

      input,
      textarea {
        height: 30px;
        padding: 5px;
      }

      label {
        font-size: 1.2rem;
      }
    }
  }
`;
