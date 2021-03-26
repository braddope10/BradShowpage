import React from 'react'
import '../Internal.css'

import QuoteThree from './Quotes/QuoteThree'

const CV = () => {
    return (
        <div className='classic-text'>
            <h1 className='wacky-line'>
                <span>C</span>
                <span>V</span>
                <span>!</span>
            </h1>
            <p>
                Tech text goes here
            </p>
            <QuoteThree />
        </div>
    );
};

export default CV;