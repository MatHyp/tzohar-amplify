import React, { Fragment } from "react";
import { connect } from "react-redux";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { addToCart } from "../../store/actions/action";
import ShopProduct from "../../components/ShopProduct";
import api from "../../api";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/logo-big.png";
import axios from "axios";
const ShopPage = ({ products,contactData }) => {

  const addToCartProduct = (product, qty = 1) => {
    props.addToCart(product, qty);
  };



  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle
        pageTitle={"Products"}
        pagesub={"Products"}
      />
      <section className="wpo-shop-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ShopProduct
                addToCartProduct={addToCartProduct}
                products={products}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer ftClass={"wpo-site-footer-s2"} contactData={contactData.attributes} />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart })(ShopPage);

export async function getStaticProps() {
  const postsRes = await axios.get(
    "http://16.16.211.34/api/products?populate=*"
  );

  const contactData = await axios.get(
    "http://16.16.211.34/api/contact"
  );

  return {
    props: {
      products: postsRes.data.data,
      contactData: contactData.data.data,
    },
    revalidate: 10, // In seconds
  };
}

