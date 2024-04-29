import React, { useContext, useState } from "react";
import styles from "./ExecutionComp.module.css";
import { DeveloperDataContext } from "../../utils/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBoxOpen,
  faCodeBranch,
  faCodeCommit,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../common/components/Card/Card";
import Filter from "../../common/components/Filter/Filter";
import ExecutionContainer from "../../common/components/ExecutionContainer/ExecutionContainer";
import {
  faCalendar,
  faCircleCheck,
  faCircleXmark,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface testDataProps {
  id: number;
  status: string;
  deploy: string;
  branch: string;
  branchId: string;
  repoName: string;
  deployUrl: string;
  passed: Array<any>;
  failed: Array<any>;
}

interface ExecutionCompProps {
  className: string;
}

const ExecutionComp: React.FC<ExecutionCompProps> = ({ className }) => {
  const {
    container,
    wrapper,
    headerText,
    navBarStyle,
    executionDataStyle,
    executionCardStyle,
    resultContainer,
    resultText,
    rightIcon,
    conditionContainer,
    failed,
    passed,
  } = styles;
  const [initialData, setInitialData] = useState({
    id: 0,
    status: "failed",
    deploy: "build-and-deploy(12332)",
    branch: "master",
    branchId: "a3df3acf",
    repoName: "mgiamberardino",
    deployUrl: "https://app-staging.levo.ai/api",
    failed: [
      { name: "GET /application/{id}/services", time: "2s" },
      { name: "GET /application/{id}/services", time: "10s" },
      {
        name: "PUT /application/{applicationId}/services/{serviceId}",
        time: "2s",
      },
    ],
    passed: [
      {
        name: "PUT /application/{applicationId}/services/{serviceId}",
        time: "8s",
      },
      {
        name: "PUT /application/{applicationId}/services/{serviceId}",
        time: "2s",
      },
      {
        name: "POST /application/{applicationId}/services/{serviceId}",
        time: "4s",
      },
      {
        name: "GET /application/{applicationId}/services/{serviceId}",
        time: "2s",
      },
      { name: "GET /application/{applicationId}/", time: "2s" },
      {
        name: "PUT /application/{applicationId}/services/{serviceId}",
        time: "4s",
      },
      {
        name: "POST /application/{applicationId}/services/{serviceId}",
        time: "6s",
      },
      { name: "POST /application/{applicationId}/services", time: "2s" },
      {
        name: "GET /application/{applicationId}/services/{serviceId}",
        time: "8s",
      },
      { name: "POST /application/{applicationId}/services", time: "2s" },
    ],
  });
  const [testData, setTestData] = useState<testDataProps>(initialData);
  const { appData, setAppData } = useContext(DeveloperDataContext);
  const [searchData, setSearchData] = useState("");

  console.log(testData);
  return (
    <div className={`${container} ${className}`}>
      <div className={wrapper}>
        <div className={navBarStyle}>
          <span className={headerText}>{appData?.testReport?.name}</span>
          <span>
            <FontAwesomeIcon icon={faAngleRight} className={rightIcon} />
            {appData?.executionData?.name}
          </span>
          <div
            className={`${conditionContainer} ${
              appData?.executionData?.status === "failed" ? failed : passed
            }`}
          >
            <span>{appData?.executionData?.status ?? "passed"}</span>
            <FontAwesomeIcon
              icon={
                appData?.executionData?.status === "failed"
                  ? faCircleXmark
                  : faCircleCheck
              }
            />
          </div>
        </div>
        <div className={executionDataStyle}>
          <Card className={executionCardStyle}>
            <div>
              <span>
                <FontAwesomeIcon icon={faCalendar} /> Duration:
                {appData?.executionData?.timeTaken}
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} /> Finished
                {appData?.executionData?.timeAgo} ago
              </span>
            </div>
            <p>
              <FontAwesomeIcon icon={faBoxOpen} />
              <span>{testData?.deploy}</span>
            </p>
            <div>
              <span>
                <FontAwesomeIcon icon={faCodeBranch} /> {testData?.branch}
              </span>
              <span>
                <FontAwesomeIcon icon={faCodeCommit} /> {testData?.branchId}
              </span>
              <span>
                <FontAwesomeIcon icon={faGithub} /> {testData?.repoName}
              </span>
            </div>
            <p>
              <FontAwesomeIcon icon={faGlobe} /> {testData?.deployUrl}
            </p>
          </Card>
          <div className={resultContainer}>
            <p className={resultText}>Results</p>
            <Filter
              searchData={searchData}
              setSearchData={setSearchData}
              initialPassed={testData?.passed}
              initialFailed={testData?.failed}
              setTestData={setTestData}
              initialData={initialData}
            />
            <ExecutionContainer
              data={testData?.failed}
              testText="failed"
              numi={testData?.failed?.length.toString()}
              deno={(
                testData?.failed?.length + testData?.passed?.length
              ).toString()}
              condition={faCircleXmark}
            />
            <ExecutionContainer
              data={testData?.passed}
              testText="passed"
              numi={testData?.passed?.length.toString()}
              deno={(
                testData?.failed?.length + testData?.passed?.length
              ).toString()}
              condition={faCircleCheck}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutionComp;
