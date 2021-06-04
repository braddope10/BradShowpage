import React from 'react'
import './Internal.css'

import Quote from './stateless/quoteBox/Quote'
import { QuoteItems } from './stateless/quoteBox/QuoteItems'
import github from './networkImages/github.png'
import instagram from './networkImages/instagram.png'
import linkedin from './networkImages/linkedin.png'


const Network = () => {
    return (   
        <div className='classic-text'>
            <div className="wacky-text">
                <h1 className='wacky-line'>
                    <span className="i-span">FOLLOW</span>
                    <span>ME</span>
                </h1>
            </div>
            
            <div className="social-media">
                <a href="https://github.com/braddope10">
                    <img alt="Github" src={github}/>
                </a>
            </div>

            <div className="social-media">
                <a href="https://www.linkedin.com/in/bradley-lopez-7283031b7/">
                    <img alt="LinkedIn" src={linkedin}/>
                </a>
            </div>

            <div className="social-media">
                <a href="https://www.instagram.com/x_bradd/">
                    <img alt="Github" src={instagram}/>
                </a>
            </div>
           
            <Quote quote={QuoteItems[3].quote} author={QuoteItems[3].author}/>

            <div className="freepik">
                Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    );
}


export default Network