import React, { useState, useRef } from 'react';
import './Podcast.css';
import { Play } from 'react-ionicons';

const Podcast = () => {
    const podcastData = [
        {
            title: "Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies",
            date: "2023-09-15"
        },
        {
            title: "Ask Unladylike: Late Bloomer with Forever 35",
            date: "2023-09-17"
        },
        {
            title: "How to Effectively Incentivize Team Members",
            date: "2023-09-23"
        },
        {
            title: "How to go from Start-Up to Scale-Up",
            date: "2023-10-05"
        },
        {
            title: "Deadbuttons – Tired of You | Live at Club Heavy",
            date: "2022-02-15"
        },
        {
            title: "Boogie Through the Universe with SOWO",
            date: "2022-02-15"
        },
        {
            title: "Glittering Blackness, Fall – 4 | Live at Club Heavy",
            date: "2022-02-15"
        },
        {
            title: "The Meditative Photos of Chaelinjane",
            date: "2022-02-15"
        }
    ];

    const [playIconColors, setPlayIconColors] = useState(new Array(podcastData.length).fill('#ffffff'));
    const [dateColors, setDateColors] = useState(new Array(podcastData.length).fill('#ffffff'));
    const linkRefs = podcastData.map(() => useRef());

    const handleHover = (index) => {
        const updatedColors = [...playIconColors];
        updatedColors[index] = '#007bff';
        setPlayIconColors(updatedColors);

        const updatedDateColors = [...dateColors];
        updatedDateColors[index] = '#007bff';
        setDateColors(updatedDateColors);
    }

    const handleLeave = (index) => {
        const updatedColors = [...playIconColors];
        updatedColors[index] = '#ffffff';
        setPlayIconColors(updatedColors);

        const updatedDateColors = [...dateColors];
        updatedDateColors[index] = '#ffffff';
        setDateColors(updatedDateColors);
    }

    return (
        <section className='podcast' id='podcast'>
            <ul className='podcast-list'>
                {podcastData.map((item, index) => (
                    <li key={index}>
                        <a
                            className='podcast-card'
                            ref={linkRefs[index]}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleLeave(index)}
                            onFocus={() => handleHover(index)}
                            onBlur={() => handleLeave(index)}
                        >
                            <figure className='card-banner'>
                                <img src={`/images/podcast-${index + 1}.png`} alt={`podcast-${index + 1}`} />
                                <div className='card-banner-icon'>
                                    <Play color={playIconColors[index]} height="20px" width="20px" />
                                </div>
                            </figure>
                            <div className='card-content'>
                                <div className='card-meta'>
                                    <p className="pod-epi">Episodes: {index + 1}</p>
                                    <time dateTime={item.date}>
                                        {new Date(item.date).toLocaleDateString()}
                                    </time>
                                </div>
                                <h3 className="h3 card-title">{item.title}</h3>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Podcast;
