import React, { useRef, useEffect, useState } from 'react';
import { ChevronUp } from 'react-ionicons'
import './Goto.css';

const GoTo = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const goTopBtn = useRef(null);
       
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const currentScrollThreshold = 200;

            if (prevScrollPos > currentScrollThreshold) {
                goTopBtn.current.classList.add("active");
            } else {
                goTopBtn.current.classList.remove("active");
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [prevScrollPos]);

    return (
        <a href="#top" className="go-top" ref={goTopBtn}>
            <ChevronUp
                color={'#ffffff'}
                title={'Go Up'}
                height="40px"
                width="40px"
                className='md hydrated'
            />
        </a>
    );
}

export default GoTo;
