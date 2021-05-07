import React from 'react'
import '../Internal.css'

import Quote from './Quotes/Quote'
import { QuoteItems } from './Quotes/QuoteItems'

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
            <Quote quote={QuoteItems[2].quote} author={QuoteItems[2].author}/>
        </div>
    );
};

export default CV;