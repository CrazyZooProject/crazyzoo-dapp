import React from 'react'

import './StakingDescription.css'


const StakingDescription = (props) => {
    return (
        <div className='token_info'>
            <div className='info_title'>
                {props.item}
            </div>
            <input type='text' className='info_value' placeholder={props.alternative} />
            {/*  value={''} */}
                
        </div>
    )
}

export default StakingDescription;
