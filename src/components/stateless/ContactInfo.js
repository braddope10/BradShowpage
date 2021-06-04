import React from 'react'
import '../Internal.css'

import Quote from './quoteBox/Quote'
import { QuoteItems } from './quoteBox/QuoteItems'

const ContactInfo = () => {
    return (
        <div>
            <div className="wacky-text" >
                <h1 className="wacky-line">
                    <span className="i-span">CONTACT</span>
                    <span>INFO</span>
                </h1>
            </div>
            <p className='classic-contact'>
                <strong>Name</strong>
                <br />
                Bradley Lopez - Herrera
                <br />
                <br />
                <strong>Phone</strong>
                <br />
                <div className='link-dec'>
                    <a href="tel:19259893480">925.989.3480</a>
                </div>
                <br />
                <strong>Email</strong>
                <br />
                <div className='link-dec'>
                    <a href="mailto: developerbrad99@gmail.com">developerbrad99@gmail.com</a>
                </div>
                <br />
                <strong>Location</strong>
                <br />
                Las Vegas, NV
            </p>
            <Quote quote={QuoteItems[4].quote} author={QuoteItems[4].author}/>
        </div>
    );
};

export default ContactInfo;