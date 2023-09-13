import React, { useState, useRef, useEffect } from 'react';
import './NavBar.css';
import { SearchOutline, LogInOutline, CartOutline } from 'react-ionicons';

const NavBar = () => {

    const [isFocused, setIsFocused] = useState(false);
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

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    return (
        <header ref={navbarRef}>
            <nav className='navbar'>
                <div className='navbar-brand align-left nav-item'>
                    <img src='/images/logo.webp' alt='Logo' className='logo-img shadow' />
                </div>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            Podcast
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            Host
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            Blog
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            Contact
                        </a>
                    </li>
                </ul>
                <div className='navbar-actions nav-item align-right'>
                    <div className={`nav-icon search-bar${isFocused ? ' expanded' : ''}`}>
                        <input
                            className={`search-bar-input ${isFocused ? 'input-expanded' : ''}`}
                            type='text'
                            aria-label='Search'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <SearchOutline
                            color={'#007bff'}
                            title={'Search'}
                            height="25px"
                            width="25px"
                            className='search-icon'
                        />
                    </div>
                    <span className='nav-icon-nav'>
                        <LogInOutline
                            color={'#fff'}
                            title={'Login'}
                            height="25px"
                            width="25px"
                        />
                    </span>
                    <span className='nav-icon-nav'>
                        <CartOutline
                            color={'#fff'}
                            title={'Save'}
                            height="25px"
                            width="25px"
                        />
                    </span>
                    <button className='nav-btn btn'>
                        <img src='/images/paypal.png' alt='Soundcloud' style={{ width: '18px', height: '18px' }} /> Donate</button>
                </div>
            </nav>
        </header>

    );
}

export default NavBar;