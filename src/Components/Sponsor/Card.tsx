import React from 'react';
import profile from '../../assets/profile.png';

interface CardProps {
  borderCorol?: string;
  top?: string;
  left?: string;
  bottom?: string;
}

const Card: React.FC<CardProps> = ({ borderCorol, top, left, bottom }) => {
  return (
    <div className='relative'>
    <div
      className={`w-28 h-28 rounded-full p-2 border-2 absolute`}
      style={{
        borderColor: borderCorol,
        top: `${top}px` ,
        left: `${left}px`,
        bottom:`${bottom}px`,
      }}
    >
      <img src={profile} alt="" className="w-full rounded-full h-full object-cover" />
    </div></div>
  );
};

export default Card;
