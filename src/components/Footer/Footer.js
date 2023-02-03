import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import twitterImg from "./twitter.png";
import telegramImg from "./telegram.png";
import discordImg from "./discord.png";
import mediumImg from "./medium.png";
import bookImg from "./book.png";

import twitterImg2 from "./twitter_2.png";
import telegramImg2 from "./telegram_2.png";
import discordImg2 from "./discord_2.png";
import mediumImg2 from "./medium_2.png";

import "./footer.css";

import Leaf21 from '../../assets/backgrounds/leaves21.png';

const Footer = (props) => {
  if (props.value == 0)
    return (
      <Container fluid className="footer">
        <Row className="justify-content-center">
          <Col>
            <div className="social-media">
              <a href="https://twitter.com/CrazyZoo_io" target="_blank">
                <img src={twitterImg} alt="twitter" />
              </a>
              <a href="https://t.me/crazyzoo_Official" target="_blank">
                <img src={telegramImg} alt="telegram" />
              </a>
              <a href="https://discord.gg/crazyzoo" target="_blank">
                <img src={discordImg} alt="discord" />
              </a>
              <a>
                <img src={mediumImg} alt="instagram" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2022 Crazy Zoo. All rights reserved.</p>
          </Col>
        </Row>
        <img className='leaf21' src={Leaf21} />
      </Container>
    );
  else if (props.value == 1)
    return (
      <Container fluid className="footer_1">
        <Row className="justify-content-center">
          <Col>
            <div className="social-media_1">
              <a href="https://twitter.com/CrazyZoo_io" target="_blank">
                <img src={twitterImg} alt="twitter" />
              </a>
              <a href="https://t.me/crazyzoo_Official" target="_blank">
                <img src={telegramImg} alt="telegram" />
              </a>
              <a href="https://discord.gg/crazyzoo" target="_blank">
                <img src={discordImg} alt="discord" />
              </a>
              <a>
                <img src={mediumImg} alt="instagram" />
              </a>
              <a>
                <img src={bookImg} alt="book" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  else
    return (
      <Container fluid className="footer_2">
        <Row className="justify-content-center">
          <Col>
            <div className="social-media type2">
              <a href="https://twitter.com/CrazyZoo_io" target="_blank">
                <img src={twitterImg2} alt="twitter" />
              </a>
              <a href="https://t.me/crazyzoo_Official" target="_blank">
                <img src={telegramImg2} alt="telegram" />
              </a>
              <a href="https://discord.gg/crazyzoo" target="_blank">
                <img src={discordImg2} alt="discord" />
              </a>
              <a>
                <img src={mediumImg2} alt="instagram" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-text-2">&nbsp;&nbsp;© 2022 Crazy Zoo. All rights reserved. </p>
          </Col>
        </Row>
        {/* <img className='leaf21' src={Leaf21} /> */}
      </Container>
    )
};

export default Footer;
