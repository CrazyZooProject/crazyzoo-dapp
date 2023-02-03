import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leaf7 from '../../assets/backgrounds/leaves7.png';
import Leaf8 from '../../assets/backgrounds/leaves8.png';

import './introduction.css';

export const Introduction = () => {

    return (
        <>
            <div className="intro">
                <Container fluid className="what_is_zoo">
                    <Row>
                        {/* <Col lg = {3}> */}
                        <p className="intro_title">Introduction</p>
                        {/* </Col> */}
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="left_detail">
                                <h3>What is Crazy Zoo?</h3>
                                <p>Crazy Zoo is a Play to Earn Social Impact Ecosystem that offers a user-friendly platform that connects a variety of blockchain and cryptocurrency-related industries. </p>
                                {/* <p className="desk_only_view">Crazy Zoo is a Play to Earn Social Impact Ecosystem that offers a user-friendly platform that connects a variety of blockchain and cryptocurrency-related industries. </p> */}
                                <p>With innovation at the foundation of all we do, we constantly strive to stay one step ahead of the competition in this constantly evolving industry, while also making sure we adhere to our basic values of sustainability and equality.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="right_detail">

                            </div>
                        </Col>
                    </Row>
                    <img className='leaf7' src={Leaf7} />
                    <img className='leaf8' src={Leaf8} />
                </Container>


            </div>
        </>
    );
};
