import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import About from "../../components/about/about";
import ProjectSection from "../../components/Projects";

import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "/public/images/logo-big.png";
import abimg from "/public/images/about.jpg";
import axios from "axios";

const AboutPage = () => {
  
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle
        pageTitle={"About Us"}
        pagesub={"About"}
      />
      <About abimg={abimg} />
      <ProjectSection />
      <Footer ftClass={"wpo-site-footer-s2"}  />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;

// export async function getStaticProps() {

//   const gallery = await axios.get(
//     "http://13.48.84.233/api/contact"
//   );
  
//   return {
//     props: {
//       contactData: contactData.data.data,
//       gallery: gallery.data.data
//     },
//     revalidate: 10, // In seconds
//   };
// }