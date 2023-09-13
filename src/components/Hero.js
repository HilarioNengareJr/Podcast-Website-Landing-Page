import React from 'react';
import './Hero.css';
import { HeadsetSharp } from 'react-ionicons';


const Hero = () => {
    return (
        <section className='hero' id='hero'>
            <div className='section-row'>
                <div className='hero-content'>
                    <img src='/images/hero-title.png' alt='hero-title' />
                    <p className='hero-text'>
                        Are you ready to dive into a world of inspiration, knowledge, and captivating stories? Look no further. iPodcast is your gateway to a treasure trove of engaging content.
                    </p>
                    <button className='btn-primary hero-btn d-sm btn'>
                    <HeadsetSharp
                        color={'#fff'}
                        height="17px"
                        width="17px"
                    /> Listen Now</button>
                    <div className='hero-links'>
                        <p className='btn-title'>Subscribe on: </p>
                        <a className='btn-link'>
                            <img src='/images/apple.png' alt='Apple Logo' style={{ width: '17px', height: '17px' }} /> <span>Apple Music</span>
                        </a>
                        <a className='btn-link'>
                            <img src='/images/soundcloud.png' alt='Soundcloud' style={{ width: '17px', height: '17px' }} /> <span>SoundCloud</span>
                        </a>
                    </div>
                    <button className='btn-primary d-lg hero-btn btn'><HeadsetSharp
                        color={'#fff'}
                        height="17px"
                        width="17px"
                    /> Listen Now</button>
                </div>
                <div className='hero-banner d-lg'></div>
            </div>
        </section>
    )
}

export default Hero;
