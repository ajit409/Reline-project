import React from 'react';
import './Header.css'
import { Link as ScrollLink } from "react-scroll";


const Header = () => {


    return (
        <>
            <header>
                <main>
                    <div className="container is-menu">
                        <div className="menu_wrap">
                            <div className="menu">

                                <a href="#hero" className="home-logo">
                                    <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659ae66ac6ff554eb69c20d9_Logo-icon.svg" className="logo-nav" />
                                </a>
                                {/* <a href="#projekte" className="menu_link " >
                                    <div className="menu_link-bg" ></div>
                                    <p className="menu_link-text">Projekte</p>
                                </a> */}



                                <ScrollLink to="projekte" smooth={true} className="menu_link">
                                    <p className="menu_link-text">Projekte</p>
                                    <div className="menu_link-bg"></div>
                                </ScrollLink>


                                <ScrollLink to="services" smooth={true} className="menu_link">
                                    <p className="menu_link-text">Services</p>
                                    <div className="menu_link-bg"></div>
                                </ScrollLink>

                                <ScrollLink to="FAQs" smooth={true} className="menu_link">
                                    <p className="menu_link-text">FAQs</p>
                                    <div className="menu_link-bg"></div>
                                </ScrollLink>


                                <a href="#" className="button-primary">
                                    <div className="button-text-primary">Jetzt Anfragen</div>
                                    <div className="button-circle-primary"></div>
                                </a>
                                <div className="menu_shape" >
                                    <div className="menu_shape-bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section id="hero">
                        <div className="padding-global">
                            <div className="container-large">
                                <div className="header75_component">
                                    <div className="header75_content">
                                        <div className="f-pic r-1">
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa195fccf5c14abe18ded_Reached%20Views.svg" className="hero-pic" />
                                        </div>
                                        <div className="cilent-pic l-3">
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa19783f545731ef71b14_Kunden.svg" className="hero-pic" />
                                        </div>

                                        <div className="c-pic l-2">
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa196524adf76bfc7ca9c_Mehr%20Leads.svg" className="hero-pic" />

                                        </div>


                                        <div className="d-pic r-3" >
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/65a12daa8175f9b30ba18986_Reline%20photoshooting.png" className="hero-pic" />
                                        </div>

                                        <div className="e-pic l-1" >
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa196264ad19f204851d9_Tools.svg" className="hero-pic" />

                                        </div>

                                        <div className="webflow-pic r-2" >
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659b4fc4faadfb8ed90b8b4e_Webflow.svg" className="hero-pic" />

                                        </div>



                                        <div className="text-align-center">
                                            <div className="max-width-xlarge align-center">
                                                <div className="margin-bottom margin-small z">
                                                    <div className="tagline header">
                                                        <div className="text-weight-semibold">Creative Studio</div>
                                                    </div>
                                                    <h1 className="heading-1">Wir bringen das volle Potenzial aus Ihrer Online-Präsenz</h1>
                                                </div>
                                                <div className="sub-text-hero">
                                                    <p className="text-size-medium-hero">Kreativität trifft Strategie, um Ihr Geschäft online zu stärken. Mehr Kunden, Umsatz und digitaler Erfolg durch unser Expertenteam.</p>
                                                </div>
                                                <div className="spacer-medium"></div>
                                                <div className="button-group is-center">
                                                    <a href="/kontakt" className="button-primary max-width-full-mobile-landscape w-inline-block">
                                                        <div className="button-text-primary">Jetzt Anfragen</div>
                                                        <div className="button-circle-primary"></div>
                                                    </a>
                                                    <a href="https://cal.com/reline" target="_blank" className="button-sec max-width-full-mobile-landscape w-inline-block">
                                                        <div className="button-text-sec">Gespräch buchen</div>
                                                        <div className="button-circle-sec"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </header>
        </>
    )
}

export default Header;




