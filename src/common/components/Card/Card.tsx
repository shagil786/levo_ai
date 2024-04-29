import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: any;
}

const Card: React.FC<CardProps> = ({ className, children, onClick }) => {
  const { container } = styles;
  return (
    <div className={`${container} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
