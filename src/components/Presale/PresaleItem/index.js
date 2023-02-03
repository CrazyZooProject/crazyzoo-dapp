import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PresaleItem.css'

import token from '../../../assets/Crazy_Zoo_Token 3.png'

const PresaleItem = (props) => {
    return (
        <Row key={props.key} className="ps-wraper">
            {/* <Col md={1} sm={0}></Col> */}
            <Col md={4} className="ps-price" sm={12}>
                <div className='ps-token'>
                    <img src={token} alt="token"/>
                    <span className='unit'>{props.sale}USDT</span>
                </div>
            </Col>
            <Col md={8} sm={12}>
                <Col md={12} sm={12} className="ps-title">{props.title}</Col>
                <Col md={12} sm={12} className="ps-description">{props.description}</Col>
            </Col>
            {/* <Col md={1} sm={0}></Col> */}
        </Row>
    )
}

export default PresaleItem;
