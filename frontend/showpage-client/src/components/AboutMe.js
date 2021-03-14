import React from 'react'
import './Internal.css'

import ImageSlider from '../slider/ImageSlider'
import { SliderData } from '../slider/SliderData';

import QuoteOne from './stateless/Quotes/QuoteOne'
import QuoteTwo from './stateless/Quotes/QuoteTwo'
import QuoteThree from './stateless/Quotes/QuoteThree'
import QuoteFour from './stateless/Quotes/QuoteFour'
import QuoteFive from './stateless/Quotes/QuoteFive'



const AboutMe = () => {
    return (
        <div>
            <h1 className='wacky-line'>
                <span>W</span>
                <span>E</span>
                <span>L</span>
                <span>C</span>
                <span>O</span>
                <span>M</span>
                <span>E</span>
                <span>!</span>
            </h1>
            <p className='classic-about'>
                A little about myself. 
                <br />
                <br />
                My name is <strong>Bradley Lopez</strong> , I am a detail-oriented college student currently attending College of Southern Nevada in 
                Las Vegas for <strong>Computing & Information Technology</strong> where I am in the process of obtaining an associates degree and I also obtain a certification in <strong>Full-Stack 
                Software Engineering</strong> through a 600+ hour course at Flatiron School.
                <br />
                <br />
                During the course of my academic career, I also managed to accrue nearly 6 years of work experience. 
                <br />
                <br />
                Most recently, I have had the privilege of working for <strong>Lopez Brothers</strong> as an Automotive Technician Assistant, 
                where I learned valuable professional skills such as customer 
                needs assessment, record management, and workflow planning.
            </p>
            <ImageSlider slides={SliderData} />
            <QuoteOne />
            <QuoteTwo />
            <QuoteThree />
            <QuoteFour />
            <QuoteFive />
        </div>
    );
};

export default AboutMe;