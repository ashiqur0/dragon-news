import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'
import bgImg from '../../assets/bg.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-semibold text-xl text-primary'>Q-Zone</h1>

            <div className="space-y-5">
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
                <img src={bgImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;