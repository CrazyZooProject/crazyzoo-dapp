import Leaf1 from '../../assets/backgrounds/leaves1.png';
import Leaf2 from '../../assets/backgrounds/leaves2.png';
import Leaf3 from '../../assets/backgrounds/leaves3.png';
import Leaf4 from '../../assets/backgrounds/leaves4.png';
import Leaf5 from '../../assets/backgrounds/leaves5.png';
import Leaf6 from '../../assets/backgrounds/leaves6.png';
import Leaf8 from '../../assets/backgrounds/leaves8.png';
import Leaf9 from '../../assets/backgrounds/leaves9.png';
import Leaf10 from '../../assets/backgrounds/leaves10.png';
import Leaf11 from '../../assets/backgrounds/leaves11.png';
import Leaf12 from '../../assets/backgrounds/leaves12.png';
import Leaf13 from '../../assets/backgrounds/leaves13.png';
import Leaf14 from '../../assets/backgrounds/leaves14.png';

import './BackLeafImages.css'

export const BackLeafImages = () => {
    return (
        <div className='leaves_overlay'>
            <img className='leaf1' src={Leaf1} />
            <img className='leaf2' src={Leaf2} />
            <img className='leaf3' src={Leaf3} />
            <img className='leaf4' src={Leaf4} />

            <img className='leaf5' src={Leaf5} />
            <img className='leaf6' src={Leaf6} />

            {/* <img className='leaf9' src={Leaf9} />
            <img className='leaf10' src={Leaf10} />
            <img className='leaf11' src={Leaf11} />
            <img className='leaf12' src={Leaf12} />
            <img className='leaf13' src={Leaf13} /> */}
            {/* <img className='leaf14' src={Leaf14} /> */}
        </div>
    )
}