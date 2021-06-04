import React from 'react'
import '../Internal.css'

import Quote from './quoteBox/Quote'
import { QuoteItems } from './quoteBox/QuoteItems'

import bradResume from './resumeImage/bradResume.png'

const CV = () => {
    return (
        <div className='classic-text'>
            <div className="wacky-text">
                <h1 className='wacky-line'>
                    <span>CV</span>
                </h1>
            </div>
            <div className="resume-box">
                <img alt="Bradley's Resume" className="resume-img" src={bradResume} />
            </div>

            <div className="submit-btn">
                <a href={bradResume} download={bradResume}>DOWNLOAD</a>
            </div>

            <Quote quote={QuoteItems[2].quote} author={QuoteItems[2].author}/>
        </div>
    );
};

export default CV;