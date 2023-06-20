import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Projects from "../../api/project";
import Image from "next/image";

import About1 from "/public/images/tzohar/about.jpeg";
import About2 from "/public/images/tzohar/about2.jpeg";
import About3 from "/public/images/tzohar/about3.jpeg";

const ProjectSection = ({pClass,gallery}) => {
  var settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    // <div className={`wpo-project-area ${pClass}`}>
    //   <div className="container-fluid">
    //     <div className="row align-items-center">
    //       <div className="wpo-project-wrap project-active owl-carousel">
    //         <Slider {...settings}>
           


              /* {gallery.map((img) =>{
                console.log(img.attributes.url);
              return <div className="wpo-project-item" key={img.id}>
                <div className="wpo-project-img">
                  <img

                    src={`http://13.48.84.233/${img.attributes.url}`}
                    alt=""
                    style={{
                      height: "100%",
                        // width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
    //           })} */
    //           <div className="wpo-project-item">
    //             <div className="wpo-project-img">
    //               <Image
    //                 src={About2}
    //                 alt=""
    //                 style={{
    //                   //   height: "20px",
    //                   height: "100%",

    //                   objectFit: "contain",
    //                 }}
    //               />
    //             </div>
    //           </div>
    //           <div className="wpo-project-item">
    //             <div className="wpo-project-img">
    //               <Image
    //                 src={About3}

    //                 style={{
    //                   height: "100%",
    //                   objectFit: "contain",
    //                 }}
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </Slider>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={`wpo-project-area ${pClass}`}>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="wpo-project-wrap project-active owl-carousel">
          <Slider {...settings}>
            {/* {Projects.slice(0, 4).map((project, pot) => (
                              <div className="wpo-project-item" key={pot}>
                                  <div className="wpo-project-img">
                                      <Image src={project.pImg} alt="" />
                                      <div className="left-border"></div>
                                      <div className="right-border"></div>
                                  </div>
                                  <div className="wpo-project-text">
                                      <h2><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}>{project.title}</Link></h2>
                                      <span>{project.subTitle}</span>
                                  </div>
                              </div>
                          ))} */}
            {/* <div
              className="wpo-project-item"
              key={pot}>
              <div className="wpo-project-img">
                <Image
                  src={project.pImg}
                  alt=""
                />
                <div className="left-border"></div>
                <div className="right-border"></div>
              </div>
              <div className="wpo-project-text">
                <h2>
                  <Link
                    onClick={ClickHandler}
                    href="/project/[slug]"
                    as={`/project/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>
                <span>{project.subTitle}</span>
              </div>
            </div> */}
            <div className="wpo-project-item">
              <div className="wpo-project-img">
                <Image
                  src={About1}
                  alt=""
                  style={{
                    height: "100%",
                    //   width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="wpo-project-item">
              <div className="wpo-project-img">
                <Image
                  src={About2}
                  alt=""
                  style={{
                    //   height: "20px",
                    height: "100%",

                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="wpo-project-item">
              <div className="wpo-project-img">
                <Image
                  src={About3}
                  // fill={true}
                  // layout={"fill"}
                  style={{
                    height: "100%",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default ProjectSection;
