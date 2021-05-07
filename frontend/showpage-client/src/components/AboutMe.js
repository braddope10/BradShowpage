import React from 'react'
import './Internal.css'

import ImageSlider from '../slider/ImageSlider'
import { SliderData } from '../slider/SliderData';

import Quote from './stateless/Quotes/Quote'
import { QuoteItems } from './stateless/Quotes/QuoteItems'
// import QuoteTwo from './stateless/Quotes/QuoteTwo'
// import QuoteThree from './stateless/Quotes/QuoteThree'
// import QuoteFour from './stateless/Quotes/QuoteFour'
// import QuoteFive from './stateless/Quotes/QuoteFive'

import ParagraphOne from './AboutMeParagraphs/ParagraphOne' 
import ParagraphTwo from './AboutMeParagraphs/ParagraphTwo'
import ParagraphThree from './AboutMeParagraphs/ParagraphThree'
import ParagraphFour from './AboutMeParagraphs/ParagraphFour'
import ParagraphFive from './AboutMeParagraphs/ParagraphFive'
import ParagraphSix from './AboutMeParagraphs/ParagraphSix'
import ParagraphSeven from './AboutMeParagraphs/ParagraphSeven'


const AboutMe = () => {
    return (
        <div>
            <h1 className='wacky-line'>
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
                <span>!</span>
            </h1>
            <ParagraphOne />
            
            <ParagraphTwo />
            
            <ParagraphThree />
            
            <ParagraphFour />
            
            <ParagraphFive />

            <ImageSlider slides={SliderData} />
            
            <ParagraphSix />
            
            <ParagraphSeven />
            
            <Quote quote={QuoteItems[0].quote} author={QuoteItems[0].author}/>
        </div>
    );
};

export default AboutMe;