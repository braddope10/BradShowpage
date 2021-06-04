import React from 'react'
import '../Internal.css'
import { LinkItems } from './projectLinks/LinkItems'
import LinkPreview from './projectLinks/LinkPreview'

import Quote from './quoteBox/Quote'
import { QuoteItems } from './quoteBox/QuoteItems'

const Projects = () => {
    return (
        <div className='classic-text'>
            <div className="wacky-text" >
                <h1 className='wacky-line'>
                    <span>PROJECTS</span>
                </h1>
            </div>

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