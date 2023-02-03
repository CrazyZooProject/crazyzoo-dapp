import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./roadmap.css";

import footfeel from '../../assets/foot_feel.png';
import footoutline from '../../assets/foot_outline.png';

import Leaf9 from '../../assets/backgrounds/leaves9.png';
import Leaf13 from '../../assets/backgrounds/leaves13.png';
import Leaf17 from '../../assets/backgrounds/leaves17.png';

export const RoadMap = () => {

    const roadmapdata = [
        {
            title: 'Q4 2022',
            contents: [
                {
                    content: 'Create Contract'
                },
                {
                    content: 'Create Website'
                },
                {
                    content: 'Create Whitepaper'
                },
                {
                    content: 'Visualizing & creating NFTs'
                }
            ],
            done: true,
            batch: true,
            progress: 20
        },
        {
            title: 'Q1 2023',
            contents: [
                {
                    content: 'Double Audit + KYC'
                },
                {
                    content: 'Whitehacker'
                },
                {
                    content: 'Pinksale partner'
                },
                {
                    content: ' 1º presale'
                },
                {
                    content: ' 1º presale'
                },
                {
                    content: 'Listing on Uniswap'
                },
                {
                    content: 'Start NFT Staking'
                }
            ],
            done: false,
            batch: true,
            progress: 20
        },
        {
            title: 'Q2 2023',
            contents: [
                {
                    content: 'Create Contract'
                },
                {
                    content: 'Create Website'
                },
                {
                    content: 'Create Whitepaper'
                },
                {
                    content: 'Visualizing & creating NFTs'
                }
            ],
            done: false,
            batch: true,
            progress: 20
        },
        {
            title: 'Q4 2022',
            contents: [
                {
                    content: 'Create Contract'
                },
                {
                    content: 'Create Website'
                },
                {
                    content: 'Create Whitepaper'
                },
                {
                    content: 'Visualizing & creating NFTs'
                }
            ],
            done: false,
            batch: true,
            progress: 20
        },
        {
            title: 'Q4 2022',
            contents: [
                {
                    content: 'Create Contract'
                },
                {
                    content: 'Create Website'
                },
                {
                    content: 'Create Whitepaper'
                },
                {
                    content: 'Visualizing & creating NFTs'
                }
            ],
            done: false,
            batch: true,
            progress: 20
        },
        {
            title: 'Q4 2022',
            contents: [
                {
                    content: 'Create Contract'
                },
                {
                    content: 'Create Website'
                },
                {
                    content: 'Create Whitepaper'
                },
                {
                    content: 'Visualizing & creating NFTs'
                }
            ],
            done: false,
            batch: true,
            progress: 20
        },
    ]
    return (
        
        <>  
            <div className="roadmap-mother">
                <Container className="roadmap-div">
                    <p className="intro_title">Roadmap</p>
                    {/* <img className='roadmapImg' /> */}
                    <Row>
                        <RoadMapItem roadmapdata={roadmapdata} />
                    </Row>

                </Container>
                <img className='leaf9' src={Leaf9} />
                <img className='leaf13' src={Leaf13} />
                <img className='leaf17' src={Leaf17} />
            </div>
        </>
    );
};

const RoadMapItem = (props) => {
    let roadmapdata = props.roadmapdata;
    return (
        <>
            {roadmapdata.map((mapdata, k) => (
                <Col lg={4} md = {6} xs={12} className="roadmap-container">
                    <div className="roadmap-item" key={k}>
                        <div className={"roadmap-quater roadmap-quater" + (k + 1)}>
                            {mapdata.title}
                            <img className={"road-map-icon" + (k + 1)} />
                            <div className={"percent" + (k + 1)} ></div>
                        </div>
                        <div className="roadmap-content">
                            {/* <img src={footfeel} />
                            <p>Create connect</p> */}
                            {mapdata.contents.map((data, i) => (
                                <div>
                                    <img src={mapdata.done ? footfeel : footoutline} />
                                    <font>{data.content}</font>
                                </div>
                            ))}
                        </div>
                    </div>
                    {k == 0 ? 
                    <div className="rodamap_circle">
                        <div className="fill_circle"></div>
                    </div> 
                    : 
                    <div className="rodamap_circle">

                    </div>
                    }
                    
                </Col>
            ))}
                <div className="road_map_lines"></div>
        </>
    )
}