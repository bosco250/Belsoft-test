import React from "react";
import profile from "../../assets/profile.png";

interface CardProps {
  borderCorol?: string;
  top?: string;
  left?: string;
  bottom?: string;
}

const Card: React.FC<CardProps> = ({ borderCorol, top, left, bottom }) => {
  return (
    <div className="relative">
      <div
        className={`w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full p-2 border-2 absolute`}
        style={{
          borderColor: borderCorol,
          top: top ? `${top}px` : undefined,
          left: left ? `${left}px` : undefined,
          bottom: bottom ? `${bottom}px` : undefined,
          transform: "translateX(-50%)", // Centers the card horizontally
          right: left === undefined ? "0" : undefined, // Handles overflow on the right
        }}
      >
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
