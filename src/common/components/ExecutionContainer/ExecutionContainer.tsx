import React, { useState } from "react";
import styles from "./ExecutionContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";

interface ExecutionContainerProps {
  testText?: string;
  numi?: string;
  deno?: string;
  condition?: any;
  data?: Array<any>;
}

const ExecutionContainer: React.FC<ExecutionContainerProps> = ({
  testText,
  numi,
  deno,
  condition,
  data,
}) => {
  const {
    resultContainer,
    textContainer,
    cardContent,
    wrapper,
    conditionStyle,
    passedStyle,
    failedStyle,
    hide,
    show,
  } = styles;
  const [isVisible, setIsVisible] = useState(true);
  const getTestResults = (
    numi: string | undefined,
    deno: string | undefined
  ) => (
    <>
      <span>({numi}</span>/<span>{deno})</span>
    </>
  );
  return (
    <div className={resultContainer}>
      <div
        className={textContainer}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <FontAwesomeIcon icon={isVisible ? faAngleDown : faAngleUp} />
        <FontAwesomeIcon
          icon={condition}
          className={`${conditionStyle} ${
            testText === "passed" ? passedStyle : failedStyle
          }`}
        />
        <p>
          <span>{testText} Tests</span> {getTestResults(numi, deno)}
        </p>
      </div>
      <div className={`${wrapper} ${isVisible ? show : hide}`}>
        {data?.map((each: any, index: number) => (
          <Card
            key={index}
            className={`${cardContent} ${
              testText === "passed" ? passedStyle : failedStyle
            }`}
          >
            <p>{each?.name}</p>
            <p>{each?.time}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExecutionContainer;
