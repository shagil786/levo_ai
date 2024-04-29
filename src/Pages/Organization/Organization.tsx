import React, { useContext, useEffect, useState } from "react";
import styles from "./Organization.module.css";
import OrginazationComp from "../../components/OrginazationComp/OrginazationComp";
import { useNavigate } from "react-router-dom";
import { DeveloperDataContext } from "../../utils/appContext";

const Organization = () => {
  const navigate = useNavigate();
  const { appData, setAppData } = useContext(DeveloperDataContext);
  const { container, header, orginazationStyle, textContainer, wrapper } =
    styles;
  const [orgs, setOrgs] = useState([
    {
      id: 1,
      name: "Wikibox",
      owner_email: "clittler0@stanford.edu",
      owner_name: "Chloris Littler",
      owner_picture: "http://dummyimage.com/246x100.png/ff4444/ffffff",
    },
    {
      id: 2,
      name: "Jaxnation",
      owner_email: "sdarnbrough1@addtoany.com",
      owner_name: "Skell Darnbrough",
      owner_picture: "http://dummyimage.com/129x100.png/ff4444/ffffff",
    },
  ]);

  useEffect(() => {}, []);

  const handleNavigate = (e: MouseEvent, each: any) => {
    e.stopPropagation();
    setAppData({ orgData: each });
    navigate(`test-report/${each?.id}`);
  };

  return (
    <div className={container}>
      <div className={header}>Levo</div>
      <div className={wrapper}>
        <div className={textContainer}>
          <p>Organizations</p>
          <p>Pick the organization you want to access to</p>
        </div>
        <div className={orginazationStyle}>
          <OrginazationComp data={orgs} onClick={handleNavigate} />
        </div>
      </div>
    </div>
  );
};

export default Organization;
