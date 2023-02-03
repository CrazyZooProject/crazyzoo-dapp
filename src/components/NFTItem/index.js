import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'



import 'bootstrap/dist/css/bootstrap.min.css';
import './NFTItem.css'


const NFTItem = (props) => {
    return (
        <Container className='ni-item'>
            <Row>
                <Col md={3} sm={6} xs={6} className='ni-whole-prop-wraper'>
                    <div className='nft-avatar'>
                        <img src={props.src} alt='nft' />
                    </div>
                </Col>
                <Col md={3} sm={6} xs={6} className='ni-whole-prop-wraper'>
                    <div className='ni-prop-wraper ni-mobile-name'>
                        <div className='ni-title'>{props.name}</div>
                        <div className='nbsp'>&nbsp;</div>
                    </div>
                    <div className='ni-prop-wraper'>
                        <div className='ni-title'>Cost</div>
                        <div className='ni-cost'>{props.cost}&nbsp;&ZOO</div>
                    </div>
                    <div className='ni-prop-wraper'>
                        <div className='ni-title'>Harvest Period</div>
                        <div className='ni-period'>{props.period}&nbsp;DAYS</div>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={6} className='ni-whole-prop-wraper'>
                    <div className='ni-prop-wraper'>
                        <div className='ni-title'>Daily Rewards</div>
                        <div className='ni-prop-text'>{props.reward}</div>
                    </div>
                    <div className='ni-prop-wraper'>
                        <div className='ni-title'>Total Payout</div>
                        <div className='ni-prop-text'>{props.payout}&nbsp;&ZOO</div>
                    </div>
                </Col>
                <Col md={3} sm={6} xs={6} className='ni-whole-prop-wraper'>
                    <div className='ni-prop-wraper'>
                        <div className='ni-title'>Food for</div>
                        <div className='ni-prop-text'>{props.food}</div>
                    </div>
                    <div className='ni-prop-wraper'>
                        <div className='ni-title'>Min feed per month</div>
                        <div className='ni-prop-text'>{props.perMonth}</div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NFTItem;