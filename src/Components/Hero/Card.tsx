import React from "react";

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
  bgColor,
  width,
  height,
  rotation,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    width: width,
    height: height,
    transform: `rotate(${rotation})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={cardStyle} className={className}></div>;
};

export default Card;
