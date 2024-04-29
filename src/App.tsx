import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Organization from "./Pages/Organization/Organization";
import Execution from "./Pages/Execution/Execution";
import TestReports from "./Pages/TestReports/TestReports";
import { DeveloperDataContext } from "./utils/appContext";
import { Suspense, useState } from "react";
import CommonLoader from "./common/components/CommonLoader/CommonLoader";
import Nav from "./common/components/Nav/Nav";

function App() {
  const [appData, setAppData] = useState([]);

  return (
    <DeveloperDataContext.Provider
      value={{
        appData,
        setAppData,
      }}
    >
      <Suspense fallback={<CommonLoader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Organization />} />
            <Route path="test-report/:id" element={<TestReports />} />
            <Route path="execution/:id" element={<Execution />} />
          </Routes>
        </Router>
      </Suspense>
    </DeveloperDataContext.Provider>
  );
}

export default App;
