import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Explanation.css'
import Leaf1 from "../../assets/leaf1.png"

const Explanation = () => {
    return (
        <Container fluid className='explanation'>
            <Row className='for-back'>
                <Col md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} className='exp-header'>
                    Foraging
                </Col>
            </Row>
            <Row className='for-back mt-30'>
                <Col md={{ span: 8, offset: 2 }} className="exp-desc">
                    5% Fee (back into NFT Pool liquidity), Reinvesting is basically like buying food for your animals. If your Animal NFT runs out, you need to deposit another Animal NFT otherwise your food can’t be used and you don’t get further APY on that.
                </Col>
            </Row>
            <Row className='for-back leaf-container'>
                <Col md={{ span: 10, offset: 2 }} className="exp-desc exp-crazy">
                If the NFT ends its earning period it will go into the “CrazyMode” and you can continue to withdraw the forage earnings. However, if there is no other NFT staked, the forage is 50% halved as penalty.
                </Col>
                <img src = {Leaf1} />
            </Row>
            <Row className='for-back'>
                <Col md={{ span: 2, offset: 5 }} className="learn-more">
                    <button>Learn more</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Explanation;
