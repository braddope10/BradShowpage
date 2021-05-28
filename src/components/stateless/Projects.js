import React from 'react'
import '../Internal.css'
// import { ReactTinyLink } from 'react-tiny-link'

import Quote from './Quotes/Quote'
import { QuoteItems } from './Quotes/QuoteItems'

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
            <div>

            </div>
            {/* <div className="tiny-link">

                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    header="Personal Showpage (JavaScript, React)"
                    description="A website where you will be introduced to my personal and professional life!"
                    maxLine={5}
                    minLine={1}
                    url="https://github.com/braddope10/BradShowpage"
                />

                <br />
                
                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    header="Hotel Registry App (SQL, Ruby, Rails, JavaScript, React, Redux)"
                    description="Register new guests. Create & update posts pertaining to room status."
                    maxLine={5}
                    minLine={1}
                    url="https://github.com/braddope10/reactReduxApp"
                />

                <br />

                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    header="Zodiac Sign Calculator (SQL, Ruby, Rails, JavaScript)"
                    description="An application that requires you to fill out a form in order for you to see you Zodiac sign."
                    maxLine={5}
                    minLine={1}
                    url="https://github.com/braddope10/zodiac_javascript"
                />

                <br />

                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    header="Truck Driver App (SQL, Ruby, Rails)"
                    description="An application that can be used as a tool by truckers around the nation to create a detailed record of their varying day-to-day shifts."
                    maxLine={5}
                    minLine={1}
                    url="https://github.com/braddope10/my_trucking"
                />

                <br />

                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    header="Pokemon Collector (SQL, Ruby, Sinatra)"
                    description="Allows pokemon card collectors to virtualize their collection while also giving them a chance to see other great collections."
                    maxLine={5}
                    minLine={1}
                    url="https://github.com/braddope10/sinatra-project"
                />
                <br />

                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    header="Nevada City Population CLI (Ruby, Nokogiri)"
                    description="A gem that you interact with, using the terminal, to see the populations of different cities in Nevada."
                    maxLine={5}
                    minLine={1}
                    url="https://github.com/braddope10/city_pop"
                />
            </div> */}
            <Quote quote={QuoteItems[1].quote} author={QuoteItems[1].author}/>
        </div>
    );
};

export default Projects;