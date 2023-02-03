import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './welcome.css';
import home_zoo_img from '../../assets/zoo_back_1.png';

export const Welcome = () => {
  return (
    <>
      <div className="welcome_part">
        <Container>
          <div className="welcome_string">Welcome to Crazy Zoo!</div>
          <div className="subscribe_container">
            <input type='text' placeholder='Subscribe to our newsletter' />
            <button className="subscribe_btn">Subscribe</button>
          </div>
          </Container>
          {/* <img className="home_zoo_img" src = {home_zoo_img} /> */}
          {/* <div className="gradient_effect"></div> */}
      </div>
    </>
  );
};
