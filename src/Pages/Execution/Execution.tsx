import React from "react";
import Nav from "../../common/components/Nav/Nav";
import styles from "./Execution.module.css";
import ExecutionComp from "../../components/ExecutionComp/ExecutionComp";

const Execution = () => {
  const { container, left, right } = styles;
  return (
    <div className={container}>
      <Nav className={left} selectionDisabled />
      <ExecutionComp className={right} />
    </div>
  );
};

export default Execution;
