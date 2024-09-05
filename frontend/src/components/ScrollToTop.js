import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Example: Using Font Awesome for arrow icon

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 400px
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        }
         else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top on button click
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-5 right-5 w-12 py-2 px-4  rounded-full text-white bg-blue-600 z-50 ${isVisible ? 'block' : 'hidden'}`}>
            {isVisible && (
                <button onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
