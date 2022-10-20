import React, {Component} from 'react'
import './Home.css'
import {FaFacebookF} from 'react-icons/fa';
import {SiInstagram} from 'react-icons/si';

import {Link} from "react-router-dom";
import {Accordion} from "react-bootstrap";


class Home extends Component {
    render() {
        return (
        <div className="full-header">
                <div className="img-and-text-header">
                    <img
                        src={require('../../assets/colorize-new.png')}
                        alt="s"/>


                    <div className="col-lg-12" id="full-col">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5" id="left-header">
                                    <div className="left-header-text1">
                                        <p>TRADIE</p>
                                    </div>
                                    <div className="left-header-text2">
                                        <p>‘Where Tradies come to get<br/>
                                            discovered online and grow<br/>
                                            their business<br/>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-1" id="center-header-line">
                                    <p class="line">

                                    </p>
                                </div>

                                <div className="col-lg-5" id="right-header">
                                    <div className="right-header-text">
                                        <p>GROWTH<br/>
                                            PARTNER
                                        </p>
                                    </div>
                                </div>


                                <div className="col-lg-1" id="end-header-icons">
                                    <span class="facebook-icon"><FaFacebookF/></span>
                                    <span className="instagram-icon"><SiInstagram/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="after-big-text">
                        <div className="col-lg-12" id="full-text-before-button">
                            <div className="container">
                                <div className="row">
                                    <p class="text-cc">
                                        Whether you’re a custom home builder, run a construction business or provide a
                                        general trade service such as installing solar panels...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-header-full">
                        <div className="col-lg-12" id="button-header-b">
                            <div className="container">
                                <div className="row">
                                    <div className="button-header">
                                        <button className="viewmenu">We’d love to work with you</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backgroung-section-2">
                    <div className="container">
                        <div className="row">
                            <div className="background-black-section">
                                <div className="logo-black-section">
                                    <img
                                        src={require('../../assets/a705b8d931915af1e2be402fac1c2961.png')}
                                        alt="s"/>
                                </div>
                                <div className="col-lg-12" id="after-logo-text-and-img">
                                    <div className="col-lg-6" id="after-logo-text">
                                        <div className="green-block">
                                            <div className="name-green-block">
                                                Alex Dickinson
                                            </div>
                                            <div className="message-green-block">
                                                MESSAGE FROM OUR
                                                FOUNDER AND HEAD
                                                OF DEVELOPMENT,
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" id="after-logo-img">
                                        <img
                                            src={require('../../assets/33109fd0adc261f059ef62ac95f52913.png')}
                                            alt="s"/>
                                    </div>
                                </div>
                                <div className="col-lg-12" id="full-text-and-button">
                                    <div className="accordiont-text">
                                        <p className="befote-text">
                                            Hey business owner,<br/>
                                            <p></p>
                                            Being a Tradie is hard enough.<br/>
                                            Trust me I get it.<br/>
                                            <p></p>
                                            I’ve heard it all from family, friends and now even clients.<br/>
                                            It’s a war out there.<br/>
                                            <p></p>
                                            When you first signed up to be a tradie, did you ever comprehend all the day
                                            to day tasks you’d have to manage.
                                            Schedules, Ordering, Admin, Management, Marketing and the long list of
                                            chores that bring you nothing but headaches and do so little for the money
                                            needle.<br/>
                                            Probably not....<br/>
                                            <p></p>
                                            So for the past few years you’ve played the juggling act, just getting
                                            through the day by the grit of your teeth.
                                            Don’t worry, any sane person would feel the same, especially when you’re
                                            limited to your own time and resources.<br/>
                                        </p>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Read more..</Accordion.Header>
                                                <Accordion.Body>
                                                    But it’s 2021 now and things are a little different, smart phones,
                                                    smart TV’s and pretty soon we’ll be driving smart cars.
                                                    <br/>
                                                    <p></p>
                                                    So, it’s about time you invest in a SMART-SYSTEM
                                                    <br/>
                                                    <p></p>
                                                    I’m talking about automation (to get your time back)
                                                    <br/>
                                                    <p></p>
                                                    Artificial Intelligence (because well.....computers are smarter than
                                                    we are) & a 24/7 marketplace that never fatigues (because for the
                                                    first time ever we have access to one......THE INTERNET.
                                                    <br/>
                                                    <p></p>
                                                    I’m guessing you’ve been online for a while.
                                                    <br/>
                                                    <p></p>
                                                    Trying to find the latest trends or hacks to solve all your
                                                    problems.
                                                    <br/>
                                                    <p></p>
                                                    Or you’ve looked through 20 different agencies that are all offering
                                                    the same damn thing.
                                                    <br/>
                                                    <p></p>
                                                    ‘With over 10 years of experience’
                                                    <br/>
                                                    <p></p>
                                                    ‘The most affordable prices’
                                                    <br/>
                                                    <p></p>
                                                    Or the best of all
                                                    <br/>
                                                    <p></p>
                                                    ‘We guarantee an increase in your website traffic’ Well, guess
                                                    what...
                                                    <br/>
                                                    <p></p>
                                                    All that means nothing unless strangers end up knocking at your
                                                    door, requesting to book your services.
                                                    <br/>
                                                    <p></p>
                                                    People are not coming to your website, hoping the history of your
                                                    business can solve their problems. They
                                                    <br/>
                                                    <p></p>
                                                    WANT a SOLUTION and they WANT it NOW
                                                    <br/>
                                                    <p></p>
                                                    That’s what makes us different.
                                                    <br/>
                                                    <p></p>
                                                    We only care about the results and we won’t stop until we achieve
                                                    them.
                                                    <br/>
                                                    <p></p>
                                                    If you want to work with a team that actually prioritises return on
                                                    investment and treats your business like their own. Then book a
                                                    complimentary strategy session.
                                                    <br/>
                                                    <p></p>
                                                    It’ll be the best opportunity for us to meet each other and undergo
                                                    a thorough inspection on the following:
                                                    - Current website, <br/>
                                                    - Social media channels <br/>
                                                    - Email lists <br/>
                                                    - Long term goals <br/>
                                                    - Current business position <br/>
                                                    <p></p>
                                                    From this I will be able to offer the most practical suggestions
                                                    moving forward &.....only if you’re READY.
                                                    <br/>
                                                    <p></p>
                                                    We’ll get to work. <br/>

                                                    (remember this, as we’ll advise you ourselves if we think the
                                                    business is ready for growth. It’s nothing personal, it’s just we
                                                    don’t want businesses pissing money up the wall, when they don’t
                                                    have their ducks in order)
                                                    <br/>
                                                    <p></p>
                                                    I forgot to mention, <br/>

                                                    There's no lock in contracts...because who the hell wants to be held
                                                    hostage? NOT ME...
                                                    <Accordion.Header>Read less..</Accordion.Header>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="backgroung-section-3">
                    <div className="container">
                        <div className="row">
                            <div className="heading-section-3">
                                Let’s get serious
                            </div>
                            <div className="col-lg-12" id="full-section-3">
                                <div className="col-lg-6" id="left-banner-section-3">
                                    <div className="full-insta-block">
                                        <p class="insta-name">INSTAGRAM</p>
                                        <div className="img-1-insta">
                                            <img
                                                src={require('../../assets/166524436724833083.png')}
                                                alt="s"/>
                                        </div>
                                        <div className="more-text-insta-bold">
                                            The one Instagram CHANNEL you need to be following
                                        </div>
                                        <div className="more-text-insta-description">
                                            We post 7 days a week, so if you want to learn something, market
                                            independently and figure things out yourself. Give us a follow
                                        </div>
                                        <div className="button-insta">
                                            <button className="viewmenu">Become smarter with us</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" id="right-banner-section-3">
                                    <div className="full-insta-block">
                                        <p className="insta-name">AGS</p>
                                        <div className="img-1-ads">
                                            <img
                                                src={require('../../assets/f08d3f634c3c844fcca543433a5b4f29.png')}
                                                alt="s"/>
                                        </div>
                                        <div className="more-text-insta-bold">
                                            The one Instagram CHANNEL you need to be following
                                        </div>
                                        <div className="more-text-insta-description">
                                            We post 7 days a week, so if you want to learn something, market
                                            independently and figure things out yourself. Give us a follow
                                        </div>
                                        <div className="button-insta">
                                            <button className="viewmenu">Read more</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="black-end">
                </div>
                <div className="black-end-radius">
                </div>

                <div className="backgroung-section-4">
                    <div className="container">
                        <div className="row">

                            <div className="heading-section-4">
                                Why Tradies choose to work<br/>
                                with Off Grid
                            </div>
                            <div className="col-lg-12" id="full-section-4">
                                <div className="col-lg-6" id="left-section-4">
                                    <p class="first-text-left-section">
                                        You’ve probably read enough...so we’ll get
                                        straight to the point
                                    </p>
                                    <p className="second-text-left-section">
                                        1. We’re Australian based<br/>
                                        2. We’re return on investment focused meaning if<br/> you’re not making gains
                                        after our optimisation period...we’ll be the first to call it out<br/>
                                        3. We're a Tradie partner<br/>
                                        4. We’re a digital extension of every partner that joins our team<br/>
                                        5. We guarantee results<br/>
                                    </p>

                                </div>
                                <div className="col-lg-6" id="right-section-4">
                                    <img className="img1-right-section-4"
                                         src={require('../../assets/d380829c5481f01b4b88297df4b89084.jpg')}
                                         alt="s"/>
                                    <img className="img2-right-section-4"
                                         src={require('../../assets/logo-section4.png')}
                                         alt="s"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backgroung-section-5">
                    <div className="col-lg-12" id="full-section-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5" id="left-section-5-img">
                                    <img className="img1-left-section-5"
                                         src={require('../../assets/img-book.png')}
                                         alt="s"/>
                                </div>
                                <div className="col-lg-7" id="right-section-5">
                                    <div className="full-right-section-5">
                                        <p class="text-right-1-section-5">
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

                <div className="backgroung-section-6">
                    <div className="container">
                        <div className="row">
                            <div className="">
                                <div className="col-lg-12" id="full-section-6">
                                    <div className="col-lg-6" id="left-section-6">
                                        <p className="first-text-left-section-6">
                                            ABOUT OF GRID
                                        </p>
                                        <p class="second-text-left-section-6">
                                            Hey!<br/>

                                            I’m Alex Dickinson and the founder of Off Grid Digital.<br/>

                                            Before I move on just remember....WE ARE NOT AN AGENCY!<br/>

                                            You won’t be lied to,<br/>

                                            You won’t be given false promises,<br/>

                                            & you won’t be burned.<br/>

                                            When Off Grid was established, I made a promise.<br/>

                                            Off Grid Digital would be the GO-TO Growth Partner for any Tradie looking to
                                            scale their business using an online system<br/>

                                            & i intend on keeping it.<br/><p></p>

                                            So what does this mean for you?<br/>
                                        </p>
                                        <input type="submit" value="Heres our promise" id="heres-our-promise-button"/>
                                    </div>
                                    <div className="col-lg-6" id="right-section-6-img">
                                        <img
                                            src={require('../../assets/dcde0a2ba637ff70cecbc4b5a93f0fd9.png')}
                                            alt="s"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-section-7">
                    <div className="container">
                        <div className="row">

                            <div className="heading-section-7">
                                RESOURCES TO HELP YOU GROW YOUR BUILDING
                                OR TRADES BUSINESS
                            </div>

                            <div className="col-lg-12 " id="full-section-7-box">

                                <div className="col-lg-4" id="box-section-1">
                                    <div className="full-box-section-1">
                                        <div className="box-img">
                                            <img
                                                src={require('../../assets/img-book.png')}
                                                alt="s"/>
                                        </div>
                                        <div className="button-position-sec-7">
                                            <input type="submit" value="Get the Guide" id="section-7-box-button"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" id="box-section-2">
                                    <div className="full-box-section-2">
                                        <div className="box-img">
                                            <img
                                                src={require('../../assets/mobile-pp-removebg-preview.png')}
                                                alt="s"/>
                                        </div>
                                        <div className="button-position-sec-7">
                                            <input type="submit" value="Take the Quiz" id="section-7-box-button"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" id="box-section-3">
                                    <div className="full-box-section-3">
                                        <div className="box-img">
                                            <img
                                                src={require('../../assets/book-img.png')}
                                                alt="s"/>
                                        </div>
                                        <div className="button-position-sec-7">
                                            <input type="submit" value="Get the Guide" id="section-7-box-button"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-section-8">
                    <div className="heading-section-8">
                        <div className="container">
                            <div className="row">
                                DO YOU THINH YOUR WEBSITE COULD BE DOING BETTER?<br/>
                                CHECH WITH OUR FREE WEBSITE PERFORMANCE TEST
                            </div>
                            <div className="form-section-8">
                                <p className="wb-url">Website URL</p>
                                <input type="text" name="user_name" placeholder="Enter your website address"
                                       id="website-adress"/>

                                <label htmlFor="inputState" id="state-ch">What’s the biggest challenge with your website
                                    right now?</label>
                                <select id="inputState" className="form-control">
                                    <option selected>I need more traffic</option>
                                    <option>...</option>
                                    <option>...</option>
                                    <option>...</option>
                                </select>
                                <button className="viewmenu" id="button-end-section-8">NEXT</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-section-9">
                    <div className="container">
                        <div className="row">
                            <div className="heading-section-9">
                                WE SERVE WITH PRIDE
                            </div>
                            <div className="col-lg-12 " id="full-section-9-card">
                                <div className="col-lg-2" id="card-section-9">
                                    <img
                                        src={require('../../assets/444b0f63009691da393d5a8848ac66c5.png')}
                                        alt="s"/>
                                </div>
                                <div className="col-lg-2" id="card-section-9">
                                    <img
                                        src={require('../../assets/6e8673b53e34f678e139d3ce0a7b6a16.png')}
                                        alt="s"/>
                                </div>
                                <div className="col-lg-2" id="card-section-9">
                                    <img
                                        src={require('../../assets/95e494e18fd0bef9fbce377ff0292339.png')}
                                        alt="s"/>
                                </div>
                                <div className="col-lg-2" id="card-section-9">
                                    <img
                                        src={require('../../assets/b31dcba6a2f1a3805e8a42c8e87b3529.png')}
                                        alt="s"/>
                                </div>
                                <div className="col-lg-2" id="card-section-9">
                                    <img
                                        src={require('../../assets/6856f2eae7c0db5f75bd7da3766871cf.png')}
                                        alt="s"/>
                                </div>
                                <div className="col-lg-2" id="card-section-9">
                                    <img
                                        src={require('../../assets/logo-end.PNG')}
                                        alt="s"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

