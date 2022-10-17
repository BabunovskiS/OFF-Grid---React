import React, {Component} from 'react'
import './Ebook.css'
import {FaFacebookF} from "react-icons/fa";
import {SiInstagram} from "react-icons/si";



class Ebook extends Component {
    render() {
        return (
            <div className="full-web-advanced">
                <div className="full-section-1-new">
                    <div className="col-lg-12" id="section1-full-col">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-11" id="section1-col1">
                                    EBOOK<br/>
                                </div>
                                <div className="col-lg-1" id="section1-col2">
                                    <span className="facebook-icon"><FaFacebookF/></span>
                                    <span className="instagram-icon"><SiInstagram/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="backgroung-section-5-modify">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" id="full-section-5">
                                <div className="col-lg-5" id="left-section-5-img">
                                    <img className="img1-left-section-5"
                                         src={require('../../assets/img-book.png')}
                                         alt="s"/>
                                </div>
                                <div className="col-lg-7" id="right-section-5-new">
                                    <div className="full-right-section-5-new">
                                        <p className="text-right-1-section-5">
                                            RATHER DO-IT-YOURSELF
                                        </p>
                                        <p className="text-right-2-section-5">
                                            10X your results with this guide on<br/>
                                            Hunting down leads and winning them<br/>
                                            as clients....it’s totally FREE
                                        </p>
                                        <div className="form-full">
                                            <input type="text" name="user_name" placeholder="Name" id="text-name"/>
                                            <input type="email" name="user_email" placeholder="E-mail" id="text-email"/>
                                            <input type="mobile" name="mobile" placeholder="Mobile Number" id="mobile"/>
                                            <input type="website" name="website" placeholder="Website" id="website"/>

                                            <input type="submit" value="I WANT IT NOW" id="text-button"/>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ebook;

