import React, { Component } from 'react'
import './Internal.css'

import Quote from './stateless/Quotes/Quote'
import { QuoteItems } from './stateless/Quotes/QuoteItems'


const Network = () => {
    return (   
        <div className='classic-text'>
            <h1 className='wacky-line'>
                <span>F</span>
                <span>O</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
                <span>W</span>
                
                <span className='i-span'>M</span>
                <span>E</span>
                <span>!</span>
            </h1>
            <Quote quote={QuoteItems[3].quote} author={QuoteItems[3].author}/>
        </div>
    );
}


export default Network