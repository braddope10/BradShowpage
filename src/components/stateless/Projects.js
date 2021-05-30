import React from 'react'
import '../Internal.css'
import { LinkItems } from './projectLinks/LinkItems'
import LinkPreview from './projectLinks/LinkPreview'

import Quote from './quotes/Quote'
import { QuoteItems } from './quotes/QuoteItems'

const Projects = () => {
    return (
        <div className='classic-text'>
            <h1 className='wacky-line'>
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>J</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
                <span>S</span>
                <span>!</span>
            </h1>
            
            <LinkPreview url={LinkItems[0].url} header={LinkItems[0].header} code={LinkItems[0].code} summary={LinkItems[0].summary} />
            
            <LinkPreview url={LinkItems[1].url} header={LinkItems[1].header} code={LinkItems[1].code} summary={LinkItems[1].summary} />
            
            <LinkPreview url={LinkItems[2].url} header={LinkItems[2].header} code={LinkItems[2].code} summary={LinkItems[2].summary} />
            
            <LinkPreview url={LinkItems[3].url} header={LinkItems[3].header} code={LinkItems[3].code} summary={LinkItems[3].summary} />
            
            <LinkPreview url={LinkItems[4].url} header={LinkItems[4].header} code={LinkItems[4].code} summary={LinkItems[4].summary} />
            
            <LinkPreview url={LinkItems[5].url} header={LinkItems[5].header} code={LinkItems[5].code} summary={LinkItems[5].summary} />
            
            <Quote quote={QuoteItems[1].quote} author={QuoteItems[1].author}/>
        </div>
    );
};

export default Projects;