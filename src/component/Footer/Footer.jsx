import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="padding-global">
                    <div className="padding-vertical">
                        <div className="padding-bottom">
                            <div className="footer8_top-wrapper">
                                <div className="footer8_left-wrapper">
                                    <a href="#">
                                        <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa1d9589d4584c9a48d3e_Reline%20Logo.svg" />
                                    </a>
                                </div>
                                <div className="footer8_legal-list">
                                    <a href="#" target="_blank" className="footer8_legal-link">Rechtliche Hinweise</a>
                                    <div>
                                        <div className='locales-list'>
                                            <div>
                                                <a href="#" className="link-current">DE</a>
                                            </div>
                                            <div>
                                                <a href='#' className="link">EN</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="padding-medium">
                            <div className="footer8_bottom-wrapper">
                                <div className="footer8_legal-list">
                                    <div className="social-icons1_list">
                                        <a href="mailto:info@reline.ch" className="social-icons1_link">
                                            <div className="icon-embed-xsmall">
                                                <FontAwesomeIcon icon={faEnvelope} style={{ width: '22px', height: '22px' }}/>
                                            </div>
                                        </a>
                                        <a href="https://www.instagram.com/" className="social-icons1_link">
                                            <div className="icon-embed-xsmall">
                                                <FontAwesomeIcon icon={faInstagram} style={{ width: '22px', height: '22px' }} />
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/" className="social-icons1_link">
                                            <div className="icon-embed-xsmall">
                                                <FontAwesomeIcon icon={faLinkedin} style={{ width: '22px', height: '22px' }} />
                                            </div>
                                        </a>
                                        <a href="https://www.behance.net/" className="social-icons1_link">
                                            <div className="icon-embed-xsmall">
                                                <FontAwesomeIcon icon={faBehance} style={{ width: '22px', height: '22px' }} />
                                            </div>
                                        </a>

                                      
                                    </div>
                                </div>
                                <div className="footer8_credit-text">© 2024 Reline GmbH</div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
