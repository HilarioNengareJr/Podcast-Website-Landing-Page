import React, { useState, useRef, useEffect } from 'react';
import './NavBarMobile.css';
import { SearchOutline, LogInOutline, CartOutline, MenuOutline, LogoPaypal } from 'react-ionicons';

const NavBarMobile = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);
    const navbarRef = useRef(null)

    useEffect(
        () => {
            const handleScroll = () => {
                const currentScrollPosition = window.scrollY;

                if (prevScrollPosition > currentScrollPosition) {
                    navbarRef.current.style.top = '0';
                } else {
                    navbarRef.current.style.top = '-120px';
                }

                setPrevScrollPosition(currentScrollPosition);
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }, [prevScrollPosition]);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    }


    return (
        <header className="active d-small" ref={navbarRef} data-header>
            <div className="container">
                <div className={ isNavExpanded ? "overlay active" : " d-lg"} onClick={toggleNav} data-overlay></div>
                <a href="#" className="logo mobile-logo">
                    <img src="/images/logo.webp" alt="logo" />
                </a>

                <button className="nav-toggle-btn" onClick={toggleNav} data-nav-toggle-btn>
                    <MenuOutline
                        color={'#ffffff'}
                        title={'Menu'}
                        height="40px"
                        width="40px"
                        className="ion-icon"
                    />
                </button>

                <nav className={ isNavExpanded ? "navbar active" : " d-lg"} data-navbar>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#hero" className="navbar-link">Home</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#podcast" className="navbar-link">Podcast</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Host</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Blog</a>
                        </li>

                        <li className="navbar-item">
                            <a href="#Newsletter" className="navbar-link">Contact</a>
                        </li>

                    </ul>

                    <div className="navbar-actions">
                        <button className="navbar-btn">
                            <SearchOutline
                                color={'#ffffff'}
                                title={'Search'}
                                height="25px"
                                width="25px"
                            />
                        </button>

                        <button className="navbar-btn">
                            <LogInOutline
                                color={'#ffffff'}
                                title={'LOG IN'}
                                height="25px"
                                width="25px"
                            />
                        </button>

                        <button className="navbar-btn">
                            <CartOutline
                                color={'#ffffff'}
                                title={'Shopify'}
                                height="25px"
                                width="25px"
                            />
                        </button>

                        <button className="btn">
                            <LogoPaypal
                                color={'#ffffff'}
                                title={'PAYPAL'}
                                height="23px"
                                width="23px"
                            />
                            <span>Donate</span>
                        </button>

                    </div>
                </nav>

            </div>
        </header>


    );
}

export default NavBarMobile;