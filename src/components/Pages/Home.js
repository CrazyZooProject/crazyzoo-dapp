import React from "react";

import NavBar from "../../components/NavBar";


import { Welcome } from '../Welcome';
import { Features } from '../Features';
import { Introduction } from '../Introduction';
import { NFTSample } from '../NFTSample';
import Presale from "../Presale";
import NFTItem from "../NFTItem";
import Explanation from "../Explanation";
import { RoadMap } from '../RoadMap';
import { Tokenomics } from "../Tokenomics";
import { BackLeafImages } from "../BackLeafImages";
import src1 from "../../assets/Grape.png";
import src2 from "../../assets/Leaves.png";
import src3 from "../../assets/Banana_Energy 1.png";

import Leaf18 from '../../assets/backgrounds/leaves18.png';
import Leaf22 from '../../assets/backgrounds/leaves22.png';
import Giraffe from '../../assets/exp_add.png';

import Footer from "../Footer/Footer";


const NFTItemData = [
  {
    src: src1,
    cost: "3.5",
    period: "500",
    reward: "0.5% (0.0175 $ZOO)",
    payout: "8.75",
    food: "Lemur",
    perMonth: "2",
    name: "Grapes"
  },
  {
    src: src2,
    cost: "7.5",
    period: "500",
    reward: "0.5% (0.25 $ZOO)",
    payout: "18.75",
    food: "Rhino",
    perMonth: "2",
    name: "Leaves"
  },
  {
    src: src3,
    cost: "15",
    period: "500",
    reward: "0.5% (0.5 $ZOO)",
    payout: "37.5",
    food: "Gorila",
    perMonth: "2",
    name: "Banana"
  }
]

export const Home = () => {
  return (
    <div className="pages">
        <NavBar name = "home"/>

      {/* <div className="green_part"> */}
      <Welcome />
      <Features />
      {/* </div> */}
      <Introduction />
      <Tokenomics />
      <NFTSample />
      <div className="roadmap_entire">
        <RoadMap />
        <img className = 'giraffe' src = {Giraffe} />
      </div>
      <Explanation />
      <div className="ni-component">
        {
          NFTItemData.map((el, key) => {
            return (
              <>
                <NFTItem
                  src={el.src}
                  cost={el.cost}
                  period={el.period}
                  reward={el.reward} p
                  payout={el.payout}
                  food={el.food}
                  perMonth={el.perMonth}
                  name={el.name} />
              </>)
          })
        }
        <img className='leaf18' src={Leaf18} />
        <img className='leaf22' src={Leaf22} />
      </div>
      <Presale />
      <Footer value = {0} />
      <BackLeafImages />
    </div>
  );
};
