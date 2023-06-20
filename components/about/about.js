import React from 'react'
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo/VideoModal'
import Image from 'next/image'

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className={`wpo-about-area section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <Image src={props.abimg} alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About Us</span>
                                <h2>We Offer You Profesional Services</h2>
                            </div>
                            <p>European windows and doors for homes and businesses are what we make and install. Poland is the
country where our facility is. Special orders can be accommodated by designing our cutting-edge
production line. Because we are the manufacturer, we can negotiate shipping costs, component and
hardware prices, and other costs with reputable European suppliers so that we may pass the savings
along to you. Our customers can count on us for affordable costs, superior service, and quick
response times.Give us a chance to work on your project.</p>
                            <div className="btns">
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;