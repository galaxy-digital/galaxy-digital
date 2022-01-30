import React, { useEffect, useState } from "react";
import "./details.scss";
import Recent1 from "../../assets/images/recent1.png";
import Header from "../../components/layout/header/Header";
import useStore, { request } from "../../useStore";

const Detail = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const responseData = await request("/api/v1/project", []);
    setProjects(responseData?.result);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="background">
      <div className="container details">
        <Header />
        <div className="title">
          <h2>We Design with care and Develop with precision</h2>
          <h1>Our Recent Projects</h1>
        </div>
        <div className="content">
          {projects
            ? projects.map((item: any) => {
                return (
                  <div key={item._id}>
                    <div>
                      <h2>{item.project}</h2>
                      <span>{item.details}</span>
                    </div>
                    <img src={Recent1} alt="recent1" />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Detail;
