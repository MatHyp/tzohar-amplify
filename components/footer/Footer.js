import React from "react";
import Link from "next/link";
import Services from "../../api/service";
import Projects from "../../api/project";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = () => {
  // console.log(contactData);
  return (
    <footer className={` wpo-site-footer-s2`}>
      <div className="wpo-upper-footer">
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-between" }}>
            <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link
                    onClick={ClickHandler}
                    className="logo"
                    href="/">
                    <img
                      src="/images/logo_big.png"
                      alt=""
                      width="100%"
                    />
                  </Link>
                </div>
                <p>
                  European windows and doors for homes and businesses are what
                  we make and install. Poland is the country where our facility
                  is. Special orders can be accommodated by designing our
                  cutting-edge production line.
                </p>
              </div>
            </div>

            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    {/* <li>
                      <i className="fi flaticon-location"></i> {contactData.address}
                    </li>
                    <li>
                      <i className="fi flaticon-telephone"></i>{contactData.first_tel}
                      <br />
                      {contactData.secound_tel}
                    </li>
                    <li>
                      <i className="fi flaticon-email"></i>
                      {contactData.first_mail}
                      
                      <br />
                      {contactData.secound_mail}
                    </li> */}
                      <li>
                      <i className="fi flaticon-location"></i>4554 Richmond Street Philadelphia, Pa 19137
                    </li>
                    <li>
                      <i className="fi flaticon-telephone"></i>609-605-3891
                      <br />

                    </li>
                    <li>
                      <i className="fi flaticon-email"></i>
                      mail@tzoharwindows.com
                      
                      <br />
                      greg@tzoharwindows.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <ul>
                <li>All rights reserved by Tzohar 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

