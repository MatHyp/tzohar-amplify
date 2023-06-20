import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const { carts } = props;

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    href="/">
                    <Image
                      src={props.Logo}
                      alt="logo"
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link
                        onClick={ClickHandler}
                        href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/shop">Products</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/">
                            PCV Windows
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/">
                            Alluminum Windows
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/">
                            Steel Windows
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/">
                            Facades
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/">
                            SlidingDoors
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        onClick={ClickHandler}
                        href="/project">
                        Portfolio
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/showroom">
                        Showroom
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, { removeFromCart })(Header);
