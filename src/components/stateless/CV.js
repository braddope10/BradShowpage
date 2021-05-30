import React from 'react'
import '../Internal.css'

import Quote from '../quotes/Quote'
import { QuoteItems } from '../quotes/QuoteItems'

import bradResume from './resumeImage/bradResume.png'

const CV = () => {
    return (
        <div className='classic-text'>
            <h1 className='wacky-line'>
                <span>C</span>
                <span>V</span>
                <span>!</span>
            </h1>

            <div className="resume-box">
                <img className="resume-img" src={bradResume} width="49%" height="200%" />
            </div>

            <Quote quote={QuoteItems[2].quote} author={QuoteItems[2].author}/>
        </div>
    );
};

export default CV;