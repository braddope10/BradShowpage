import React from 'react'
import '../Internal.css'

import QuoteFour from './Quotes/QuoteFour'

const ContactInfo = () => {
    return (
        <div>
            <h1 className='wacky-line'>
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
                
                <span className='i-span'>I</span>
                <span>N</span>
                <span>F</span>
                <span>O</span>
                <span>!</span>
            </h1>
            <p className='classic-contact'>
                <strong>Name</strong>
                <br />
                Bradley Lopez - Herrera
                <br />
                <br />
                <strong>Phone</strong>
                <br />
                925.989.3480
                <br />
                <br />
                <strong>Email</strong>
                <br />
                <div className='email-dec'>
                    <a href="mailto: developerbrad99@gmail.com">developerbrad99@gmail.com</a>
                </div>
                <br />
                <strong>Location</strong>
                <br />
                Las Vegas, NV
            </p>
            <QuoteFour />
        </div>
    );
};

export default ContactInfo;