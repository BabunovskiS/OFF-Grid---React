import React from 'react'
import './Footer.css'
import {FaFacebookF} from "react-icons/fa";
import {SiInstagram} from "react-icons/si";


function Footer() {
    return (
        <div className="footer">
            <div className="black-end-2">
            </div>
            <div className="black-end-radius-2">
            </div>
            <div className="container">
                <div className="row">
                    <div className="full-footer">
                        <div className="col-lg-12" id="footer-col-12">
                            <div className="col-lg-3" id="footer-col-1">
                                <div className="f-c-1-full">
                                    <p className="big-text-f-c-1">
                                        OFF GRID
                                    </p>
                                    <p className="text-2-f-c-1">
                                        Off Grid was established with one goal. To help ambitious trade and construction
                                        businesses scale their operation through the use of modern digital marketing
                                        strategies
                                    </p>
                                    <p className="icons">
                                        <span className="facebook-icon"><FaFacebookF/></span>
                                        <span className="instagram-icon-footer"><SiInstagram/></span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3" id="footer-col-1">
                                <div className="f-c-1-full">
                                    <p className="big-text-f-c-1-white">
                                        SERVICES
                                    </p>
                                    <p className="text-2-f-c-1-white">
                                        PPC<br/>
                                        Social Media Management<br/>
                                        Lead Generation<br/>
                                        Email Marketing<br/>
                                        Website Design & Development<br/>
                                        SEO<br/>
                                        Branding<br/>
                                        Logo Design
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3" id="footer-col-1">
                                <div className="f-c-1-full">
                                    <p className="big-text-f-c-1-white">
                                        CONTACT
                                    </p>
                                    <p className="text-2-f-c-1-white">
                                        Sydney, Australia.<br/>
                                        hello@offgriddigital.com.au<br/>
                                        0411 124 879
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3" id="footer-col-1">
                                <div className="f-c-1-full">
                                    <p className="big-text-f-c-1-white">
                                        OG WEEKLY
                                    </p>
                                    <p className="text-2-f-c-1">
                                        To receive weekly educational emails covering digital marketing news and advice,
                                        please subscribe to our newsletter. Don`t worry, you can unsubscribe at any
                                        time.
                                    </p>
                                    <div className="form-footer">
                                        <input type="email" name="user_email" placeholder="Email address*"
                                               id="footer-email"/>
                                        <input type="submit" value="Subscribe" id="button-footer"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12" id="copy">
                            ©2022 - OFF GRID Digital
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
