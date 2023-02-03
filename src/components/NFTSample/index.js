import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './nftsample.css';

import Lemur from '../../assets/samples/lemur.png';
import Phino from '../../assets/samples/clear-phino.png';
import Gorila from '../../assets/samples/gorila.png';

import Leaf7 from '../../assets/backgrounds/leaves7.png';



export const NFTSample = () => {

    return (
        <>
            <div className="nft_sample">
                <img className='leaf7_2' src={Leaf7} />
                <Container className="sample_container">
                    <Row>
                        {/* <Col lg = {3}> */}
                        <p className="sample_title">Crazy Zoo NFTs</p>
                        <p className="sample_content">There will be 3 Crazy Zoo NFT Collections each containing 3 different animals. The collections will be launched across multiple time periods and they feature top tier AAA quality animals. </p>
                        {/* </Col> */}
                    </Row>
                    <Row className="sample_row">
                        <Col lg={4} sm={6} xs={12}>
                            <div className="sample_list">
                                <img src={Lemur} />
                                <div className="embed"><div>Lemur</div><div>03</div></div>
                                <div className="sample_cost"> cost 125 $ZOO</div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <div className="sample_list blur">
                                <img src={Phino} />
                                <div className="embed"><div>Rhino</div><div>02</div></div>
                                <div className="sample_cost"> cost 250 $ZOO</div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <div className="sample_list blur">
                                <img src={Gorila}></img>
                                <div className="embed"><div>Gorilla</div><div>03</div></div>
                                <div className="sample_cost"> cost 500 $ZOO</div>
                            </div>
                        </Col>

                    </Row>
                    <Row className='for-back'>
                        <Col md={{ span: 3, offset: 5 }} className="learn-more-first">
                            <button>Learn more</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
