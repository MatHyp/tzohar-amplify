import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Contactpage from "../../components/Contactpage";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/logo-big.png";
import MainShowRoom from "../../components/Showroom/MainShowRoom";
import axios from "axios";


const ShowRoom = () => {
  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle
        pageTitle={"Show Room"}
        pagesub={"Showroom"}
      />
      <MainShowRoom />
      <Footer ftClass={"wpo-site-footer-s2"}  />
      <Scrollbar />
    </Fragment>
  );
};
export default ShowRoom;


// export async function getStaticProps() {
//   const contactData = await axios.get(
//     "http://16.16.211.34/api/contact"
//   );

//   return {
//     props: {
//       contactData: contactData.data.data,
//     },
//     revalidate: 10, // In seconds
//   };
// }