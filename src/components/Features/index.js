import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './features.css';

import Earth from '../../assets/batches/earth.png';
import Shield from '../../assets/batches/shield.png';
import Star from '../../assets/batches/star.png';
import Target from '../../assets/batches/target.png';

import Leaf6 from '../../assets/backgrounds/leaves6.png';



export const Features = () => {

    const arrBatches = [
        {
            img: Star,
            detail: 'Share & Earn',
            link: '#'
        },
        {
            img: Target,
            detail: 'Community owned',
            link: '#'
        },
        {
            img: Earth,
            detail: 'Decentralized',
            link: '#'
        },
        {
            img: Shield,
            detail: 'Focus on security',
            link: '#'
        }
    ]
    return (
        <>
            <Container>
                <Row className="batch_row">
                    {
                        arrBatches.map((batch, k) => (
                            <Col lg={3} sm={6} xs={6}>
                                <div className="batchlist">
                                    <img src={batch.img} />
                                    <p>{batch.detail}</p>
                                </div>
                            </Col>
                        ))
                    }
                    {/* <img className='leaf6' src={Leaf6} /> */}
                </Row>
            </Container>
        </>
    );
};
