import React from 'react'
import '../Internal.css'

import Quote from './quoteBox/Quote'
import { QuoteItems } from './quoteBox/QuoteItems'

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
                <img alt="Bradley's Resume" className="resume-img" src={bradResume} />
            </div>

            <div className="submit-btn">
                <a href={bradResume} download={bradResume}>Download!</a>
            </div>

            <Quote quote={QuoteItems[2].quote} author={QuoteItems[2].author}/>
        </div>
    );
};

export default CV;