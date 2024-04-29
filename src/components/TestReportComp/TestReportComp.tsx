import React, { useContext, useState } from "react";
import styles from "./TestReportComp.module.css";
import { DeveloperDataContext } from "../../utils/appContext";
import Card from "../../common/components/Card/Card";

interface TestReportCompProps {
  className: string;
  onClick: (e: MouseEvent, each: any) => void;
}

const TestReportComp: React.FC<TestReportCompProps> = ({
  className,
  onClick,
}) => {
  const {
    container,
    wrapper,
    cardContainer,
    headerText,
    cardContent,
    left,
    right,
  } = styles;
  const { appData, setAppData } = useContext(DeveloperDataContext);
  const [testData, setTestData] = useState([
    {
      id: 0,
      name: "Execution 1",
      timeTaken: "10 min",
      timeAgo: "2min",
      passed: "10 passed",
      failed: "2 failed",
    },
    {
      id: 1,
      name: "Execution 2",
      timeTaken: "10 min",
      timeAgo: "2min",
      passed: "10 passed",
      failed: "2 failed",
    },
    {
      id: 2,
      name: "Execution 3",
      timeTaken: "10 min",
      timeAgo: "2min",
      passed: "10 passed",
      failed: "2 failed",
    },
    {
      id: 3,
      name: "Execution 4",
      timeTaken: "10 min",
      timeAgo: "2min",
      passed: "10 passed",
      failed: "2 failed",
    },
  ]);

  return (
    <div className={`${container} ${className}`}>
      <div className={wrapper}>
        <p className={headerText}>{appData?.testReport?.name}</p>
        <div className={cardContainer}>
          {testData?.map((each: any, index: number) => (
            <Card
              key={index}
              className={cardContent}
              onClick={(e: MouseEvent) => onClick(e, each)}
            >
              <div className={left}>
                <p>{each?.name}</p>
                <p>
                  {each?.timeAgo} <span>-</span> {each?.timeTaken}
                </p>
              </div>
              <div className={right}>
                <p>{each?.passed}</p>
                <p>{each?.failed}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestReportComp;
