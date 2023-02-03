import React from "react";
import "./Tokenomics.css";
import TokenomicsContent from '../../assets/tokenomics.png';
import TokenomicsContentBig from '../../assets/tokenomics_big.png';
import TokenomicsContentSmall from '../../assets/tokenomics_small.png';

export const Tokenomics = () => {
    return (
      <div className="tokenomics-div">
        <div className="field-title">
            <label className="field-title-name">Tokenomics</label>
        </div>
        <div className="tokenomics-content">
            <img className="tokenomics-content-image" src={TokenomicsContent} />
            <img className="tokenomics-content-back-image" src={TokenomicsContentBig} />
        </div>
      </div>
    );
  };