import React, { useEffect, useState } from "react";
import styles from "./Filter.module.css";

interface FilterProps {
  searchData: string;
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
  initialPassed: any;
  initialFailed: any;
  setTestData: React.Dispatch<React.SetStateAction<testDataProps>>;
  initialData: any;
}

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

const Filter: React.FC<FilterProps> = ({
  searchData,
  setSearchData,
  initialPassed,
  initialFailed,
  setTestData,
  initialData,
}) => {
  const { container, searchContainer } = styles;

  useEffect(() => {
    function debounce<T extends (...args: any[]) => any>(
      func: T,
      delay: number
    ) {
      let timeoutId: ReturnType<typeof setTimeout>;

      return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        const context = this;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    }

    const filterData = (searchText: string) => {
      const filteredPassed = initialData?.passed?.filter((each: any) =>
        each.name.includes(searchText)
      );
      const filteredFailed = initialData?.failed?.filter((each: any) =>
        each.name.includes(searchText)
      );
      setTestData((prevState: any) => ({
        ...prevState,
        passed: filteredPassed,
        failed: filteredFailed,
      }));
    };

    const debounceData = debounce(filterData, 500);

    if (!searchData) {
      setTestData(initialData);
    } else debounceData(searchData);
  }, [searchData]);

  return (
    <div className={container}>
      <input
        className={searchContainer}
        value={searchData}
        placeholder="Filter by endpoint..."
        onChange={(e) => setSearchData(e.target?.value)}
      />
    </div>
  );
};

export default Filter;
