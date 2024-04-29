import React from "react";
import styles from "./OrginazationComp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import Card from "../../common/components/Card/Card";

interface orgsProps {
  id: number;
  name: string;
  owner_email: string;
  owner_name: string;
  owner_picture: string;
}

interface OrginazationCompProps {
  data: Array<orgsProps>;
  className?: string;
  onClick: (e: MouseEvent, each: orgsProps) => void;
}

const OrginazationComp: React.FC<OrginazationCompProps> = ({
  data,
  className,
  onClick,
}) => {
  const { container, imageStyle, textStyle } = styles;
  return (
    <>
      {data?.map((each: orgsProps, index: number) => (
        <Card
          key={index}
          className={`${container} ${className}`}
          onClick={(e: MouseEvent) => onClick(e, each)}
        >
          <div className={imageStyle}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <p className={textStyle}>{each?.name}</p>
        </Card>
      ))}
    </>
  );
};

export default OrginazationComp;
