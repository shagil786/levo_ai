import React, { useContext, useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { DeveloperDataContext } from "../../../utils/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

interface NavProps {
  className: string;
  selectionDisabled?: boolean;
}

const Nav: React.FC<NavProps> = ({ className, selectionDisabled }) => {
  const { container, wrapper, reportsStyle, reportWrapperStyle, selected } =
    styles;
  const { appData, setAppData } = useContext(DeveloperDataContext);
  const [activeReport, setActiveReport] = useState<{
    id: number;
    name: string;
  }>({ id: 0, name: "Test Reports#1" });
  const reportsData = [
    { id: 0, name: "Test Reports#1" },
    { id: 1, name: "Test Reports#2" },
  ];

  useEffect(() => {
    setAppData({ ...appData, ["testReport"]: activeReport });
  }, [activeReport]);

  return (
    <div className={`${container} ${className}`}>
      <div className={wrapper}>
        <p>Levo</p>
        <p>{appData?.orgData?.name}</p>
      </div>
      <div className={reportsStyle}>
        {reportsData?.map((each: any, index: number) => (
          <div
            className={`${reportWrapperStyle} ${
              each?.id === activeReport?.id ? selected : ``
            }`}
            key={index}
            onClick={() =>
              selectionDisabled ? undefined : setActiveReport(each)
            }
          >
            {activeReport?.id === each?.id && (
              <FontAwesomeIcon icon={faCaretRight} />
            )}
            <p>{each?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
