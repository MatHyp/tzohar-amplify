import React from "react";
import Link from "next/link";
import Projects from "../../api/project";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

import SingelProject from "./SingelProject";

const ProjectSectionS2 = ({ projects }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="">
      <div
        className=""
        style={{ marginTop: "40px" }}>
        <SectionTitle
          subTitle={"Featured Works"}
          MainTitle={"Our Projects"}
        />

        <div className="main-project-container">
          <div className="project-flex">
            {projects.toReversed().map(({ attributes }) => {
              return <SingelProject attributes={attributes} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionS2;
