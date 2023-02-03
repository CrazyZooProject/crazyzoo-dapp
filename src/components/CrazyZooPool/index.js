import React from 'react'

import './CrazyZooPool.css'

const CrazyZooPool = () => {
    return (
        <>
            <div className='pool_container'>
                <div className='pool_name'>Crazy Zoo Pool</div>
                <div className='pool_group'>
                    <div>
                        <font>TVL:</font>
                        <font>$0.00</font>
                    </div>
                    <div>
                        <font>APR:</font>
                        <font>0.0%</font>
                    </div>
                    <div>
                        <font>APy:</font>
                        <font>0.0%</font>
                    </div>
                </div>
                <button>Stake</button>
            </div>
        </>
    )
}

export default CrazyZooPool;
