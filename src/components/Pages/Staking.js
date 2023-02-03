import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../../components/NavBar";

import StakingDescription from "../StakingDescription";
import CrazyZooPool from '../CrazyZooPool';
import Footer from "../Footer/Footer";

import Leave1 from '../../assets/staking_leaves/1.png';
import Leave2 from '../../assets/staking_leaves/2.png';
import Leave3 from '../../assets/staking_leaves/3.png';
import Leave4 from '../../assets/staking_leaves/4.png';


import TokenomicsContentBig from '../../assets/tokenomics_big.png';


export const Staking = () => {
  return (
    <div className="staking_container">
      <NavBar name = "staking" />
      <div className="staking_string">Crazy Zoo Staking</div>
      <Container className='staking_description_container'>
        <Row className="st-wraper">
          <Col lg={3} md={6} sm={12}>
            <StakingDescription item={'Crazy Zoo Staked'} value={0} alternative={'$0.00'} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <StakingDescription item={'Total liquidity'} value={0} alternative={'0.00'} />
          </Col>
          <Col lg={3} md={6} sm={12}>
            <StakingDescription item={'APR'} value={0} alternative={'%0.00'} />
          </Col>
          <Col lg={3} md={6} sm={12} className='btn_group'>
            <input type='button' className="stake_btn" value="Stake" />
            <input type='button' className="unstake_btn" value="Unstake" />
          </Col>
        </Row>
        <Row className="st-detail-wraper">
          <Col lg={4} md={6} sm={12}>
            <CrazyZooPool />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <CrazyZooPool />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <CrazyZooPool />
          </Col>
        </Row>
        <Row>
          <Footer value = {2} />
        </Row>
      </Container>
      <img className="staking_bottom_positoner"  src = {TokenomicsContentBig} />
      <img src = {Leave1} className = {'st_leave1'} />
      <img src = {Leave2} className = {'st_leave2'} />
      <img src = {Leave3} className = {'st_leave3'} />
      <img src = {Leave4} className = {'st_leave4'} />
    </div>
  );
};
