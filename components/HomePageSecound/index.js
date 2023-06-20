import React from "react";
import Link from "next/link";
import VideoModal from "../../components/ModalVideo/VideoModal";
import Image from "next/image";

const HomePageSecound = ({abimg}) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className={`wpo-about-area section-padding `}>
      <div className="Secound_Section_Container">
        <div className="section_flex_contaier">
          <div className="img-container">
            <Image
              src={abimg}
              alt="logo"
              className="aboutImg"
            />
          </div>
          <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span></span>
                                <h2>Our high-performance windows, doors, and facades are available in both contemporary and traditional designs.</h2>
                            </div>
                           
                        </div>
                    </div>
          {/* <div className="office-info-text">
            <div className="office-info-icon">
              <div className="icon">
                <i className="fi flaticon-email"></i>
              </div>
            </div>
            <h2>Contact Us</h2>
            <p style={{fontSize: '23px'}}>Our high-performance windows, doors, and facades arę available in both contemporary and traditional designs.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomePageSecound;
