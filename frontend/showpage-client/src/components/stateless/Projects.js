import React from 'react'
import '../Internal.css'
import { ReactTinyLink } from 'react-tiny-link'

import QuoteTwo from './Quotes/QuoteTwo'

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
            <div className="tiny-link">
                <ReactTinyLink
                    cardSize="large"
                    showGraphic={true}
                    header="Hotel Registry App (SQL, Ruby, RoR, JavaScript, React, Redux)"
                    description="not much"
                    maxLine={2}
                    minLine={1}
                    url="https://github.com/braddope10/reactReduxApp"
                />
            </div>
            <QuoteTwo />
        </div>
    );
};

export default Projects;