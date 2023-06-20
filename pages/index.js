import React from "react";
import HomePageSecound from "../components/HomePageSecound/index";
import Hero from "../components/hero";
import Navbar from "../components/Navbar/Navbar";
import Scrollbar from "../components/scrollbar/scrollbar";
import Logo from "/public/images/logo-big.png";
import abimg from "/public/images/240_F_53427270_7QPlS8yHbvEvFA5joOH800aPSkNHYo6W.jpeg";
import Footer from "../components/footer/Footer";
import axios from "axios";


const HomePage = (  ) => {
  // console.log(contactData);
  return (
    <div>
      <Navbar
        Logo={Logo}
        hclass={"header-style-1"}
      />
      <Hero />
      <HomePageSecound abimg={abimg} />
      <Footer />
      <Scrollbar />
    </div>
  );
};
export default HomePage;

// export async function getStaticProps() {
//   const contactData = await axios.get(
//     `http://16.16.211.34/api/contact`
//   );
//     console.log(contactData);
//   return {
//     props: {
//       contactData: contactData.data.data,
//     },
//     revalidate: 10, // In seconds
//   };
// }
