import React from 'react'
import Container from 'react-bootstrap/Container';
import PresaleItem from './PresaleItem';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Presale.css'

import Leaf12 from '../../assets/backgrounds/leaves19.png';
import Leaf13 from '../../assets/backgrounds/leaves20.png';

const testdata=[
  {
    price:'0.9$ ',
    title:"The first Sale",
    description:"The first presale phase for the $ZOO token will offer a big discount at 0.9$ USDT per $ZOO and a limit of 120.000 tokens allocated for phase 1."
  },
  {
    price:'0.95$ ',
    title:"The second Sale",
    description:"It will offer another discount at 0.95$ USDT per $ZOO and a limit of 220.000 tokens allocated for phase 2."
  },
  {
    price:'1.00$ ',
    title:"Listing Price",
    description:""
  }
]

const Presale = () =>  {
  return (
    <Container className='ps-component'>
        <div className='presale-header'>
            <div className='pHeader-text'>Presale</div>
        </div>
        <div>
          {
            testdata.map((el,key)=>
             {
              return <PresaleItem key={key} sale={el.price} title={el.title} description={el.description}/>}
            )
          }
        </div>
        {/* leaves12 */}
        <img className='leaf12' src={Leaf12} />
        {/* <img className='leaf13' src={Leaf13} /> */}
    </Container>
  )
}

export default Presale;
