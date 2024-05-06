import React from 'react';
import './Faq.css';
import { useState } from 'react';

const Faq = () => {
    const [hoveredTab, setHoveredTab] = useState(null);

    return (
        <div>
            <section id="FAQs">
                <div className="padding-global background-color-white">
                    <div className="container-small">
                        <div className="padding-section-large">
                            <div className="text-align-center">
                                <div className="max-width-large ">
                                    <div className="tagline">
                                        <div className="text-weight-semibold">FAQs</div>
                                    </div>
                                    <div className="spacer-xsmall"></div>
                                    <h2 className="heading-2">Oft gestellte Fragen</h2>
                                </div>
                            </div>

                            <div className="spacer-large"></div>
                            <div className="faq4_component">
                                <div data-current="Studio" data-easing="ease" className="tab4_component w-tabs">
                                    <div className="tab4_tabs-menu w-tab-menu" role="tablist">
                                        <a
                                            data-w-tab="Angebot"
                                            className={`tab4_tab-link ${hoveredTab === 'Angebot' ? 'hovered' : ''}`}
                                            href="#"
                                            onMouseEnter={() => setHoveredTab('Angebot')}
                                            onMouseLeave={() => setHoveredTab(null)}
                                        >
                                            <div className="tab-text">Angebot</div>
                                        </a>
                                        <a
                                            data-w-tab="Studio"
                                            className={`tab4_tab-link ${hoveredTab === 'Studio' ? 'hovered' : ''}`}
                                            href="#"
                                            onMouseEnter={() => setHoveredTab('Studio')}
                                            onMouseLeave={() => setHoveredTab(null)}
                                        >
                                            <div className="tab-text">Studio</div>
                                        </a>
                                        <a
                                            data-w-tab="Website"
                                            className={`tab4_tab-link ${hoveredTab === 'Website' ? 'hovered' : ''}`}
                                            href="#"
                                            onMouseEnter={() => setHoveredTab('Website')}
                                            onMouseLeave={() => setHoveredTab(null)}
                                        >
                                            <div className="tab-text">Website</div>
                                        </a>


                                    </div>
                                    <div className="tab4_tabs-content w-tab-content">
                                        <div className="tab4_tab-pane w-tab-pane w--tab-active">
                                            <div className="faq4_list">
                                                <div className="faq4_accordion">
                                                    <div className="faq4_question">
                                                        <div className="text-size-medium text-color-black">Wie erhalte ich Informationen über die Kosten Ihrer Dienstleistungen?<br /></div>
                                                        <div className="faq4_icon-wrappper">
                                                            <div className="icon-embed-small w-embed">
                                                                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="faq4_answer">
                                                        <div className="faq4_answer-text">Nach einem kurzen Erstgespräch erstellen wir innerhalb von 24-48 Stunden ein individuelles Preisangebot, das auf Ihren spezifischen Bedürfnissen und Anforderungen basiert.</div>
                                                    </div>
                                                </div>
                                                <div className="faq4_accordion">
                                                    <div className="faq4_question">
                                                        <div className="text-size-medium text-color-black">Was sind die Zahlungsbedingungen für ein Projekt?<br /></div>
                                                        <div className="faq4_icon-wrappper">
                                                            <div className="icon-embed-small w-embed">
                                                                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="faq4_answer">
                                                        <div className="faq4_answer-text">Für die meisten Projekte erfordern wir eine Anzahlung von 50% zu Beginn, gefolgt von 25% bei Projekt-Halbzeit und den restlichen 25% bei Fertigstellung und Lieferung.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq;

