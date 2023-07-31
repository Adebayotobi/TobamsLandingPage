import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export const CustomButton = ({
  height,
  onClick,
  fontSize = "12px",
  width = "120px",
  hover = "#118181",
  bgColor = "#811141",
  textColor = "white",
  border,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? hover : bgColor,
    color: textColor,
    padding: "10px",
    borderRadius: "8px",
    width: width,
    cursor: "pointer",
    fontSize: fontSize,
    border: `1px solid ${border}`,
    height: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s", 
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={"flex justify-center items-center gap-4 my-4"}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        View All
      </button>
      <FiArrowRight size={20} />
    </div>
  );
};

export default CustomButton;
