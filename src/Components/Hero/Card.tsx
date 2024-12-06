import React from 'react';

interface CardProps {
  className?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  rotation?: string;
  imageSrc: string;
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({
  className,
  bgColor ,
  width,
  height ,
  rotation,
  // imageSrc,
  // imageAlt
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    width: width,
    height: height,
    transform: `rotate(${rotation})`,
    display: 'flex',
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
  };

  // const imageStyle: React.CSSProperties = {
  //   width: '100%',
  //   height: 'auto',
  //   objectFit: 'cover'
  // };

  return (
    <div 
      style={cardStyle}
      className={className}
    >
      {/* <img 
        src={imageSrc} 
        alt={imageAlt} 
        style={imageStyle}
      /> */}
    </div>
  );
};

export default Card;