import React from 'react';
import { LogoApple, LogoSoundcloud, LogoTwitter, LogoFacebook, LogoInstagram} from 'react-ionicons';
import './Footer.css';

const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-brand">
                            <a href="#" className="logo">
                                <img src="/images/logo.webp" alt="logo" />
                            </a>

                            <p className="footer-text">
                                Stay connected with us and receive updates on the latest trends and technologies in the industry. We're dedicated to providing you with valuable insights and resources to help you succeed.
                            </p>
                        </div>

                        <div className="contact-info">
                            <h4 className="footer-link-title">Start A Conversation</h4>
                            <a href="mailto:hnengare@gmail.com" className="footer-link">hnengare@gmail.com</a>
                            <a href="#" className="footer-link">+90 533 850 2322</a>
                            <a href="#" className="footer-link">+90 533 850 2322</a>
                        </div>

                        <div className="social-list-box">
                            <p className="social-title">Follow Us On:</p>
                            <ul className="social-list edit">
                                <li>
                                    <a href="#" className="social-link">
                                        <LogoFacebook
                                            color={'#ffffff'}
                                            title={'Facebook'}
                                            height="22px"
                                            width="22px"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <LogoTwitter
                                            color={'#ffffff'}
                                            title={'twitter'}
                                            height="22px"
                                            width="22px"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <LogoInstagram
                                            color={'#ffffff'}
                                            title={'Instagram'}
                                            height="22px"
                                            width="22px"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <LogoSoundcloud
                                            color={'#ffffff'}
                                            title={'soundcloud'}
                                            height="22px"
                                            width="22px"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <LogoApple
                                            color={'#ffffff'}
                                            title={'iCloud'}
                                            height="22px"
                                            width="22px"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            &copy; 2022 <a href="#">HilarioNengareJr</a>. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;
