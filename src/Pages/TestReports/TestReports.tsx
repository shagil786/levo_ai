import React, { useContext } from "react";
import Nav from "../../common/components/Nav/Nav";
import styles from "./TestReports.module.css";
import TestReportComp from "../../components/TestReportComp/TestReportComp";
import { useNavigate } from "react-router-dom";
import { DeveloperDataContext } from "../../utils/appContext";

const TestReports = () => {
  const { container, left, right } = styles;
  const { appData, setAppData } = useContext(DeveloperDataContext);
  const navigate = useNavigate();
  const handleNavigate = (e: MouseEvent, each: any) => {
    const executionData = { ...each };
    executionData.status = each.failed_tests === 0 ? "success" : "failed";

    setAppData({ ...appData, executionData });
    navigate(`/execution/${each?.id}`, { replace: true });
  };
  return (
    <div className={container}>
      <Nav className={left} />
      <TestReportComp className={right} onClick={handleNavigate} />
    </div>
  );
};

export default TestReports;
