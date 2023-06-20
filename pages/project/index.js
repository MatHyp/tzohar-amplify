import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import ProjectsS2 from "../../components/ProjectsS2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/logo-big.png";
import axios from "axios";

const ProjectPage = ({ projects }) => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle
        pageTitle={"Projects"}
        pagesub={"Projects"}
      />
      <ProjectsS2 projects={projects} />
      <Footer ftClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectPage;

export async function getStaticProps() {
  const postsRes = await axios.get(
    "http://16.16.211.34/api/projects?populate=project_images"
  );


  return {
    props: {
      projects: postsRes.data.data,
      // contactData: contactData.data.data,

    },
    revalidate: 10, // In seconds
  };
}
