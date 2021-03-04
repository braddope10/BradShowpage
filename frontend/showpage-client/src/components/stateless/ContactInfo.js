import React from 'react'
import '../Internal.css'

const ContactInfo = () => {
    return (
        <div className='classic-contact'>
            <h1 className='wacky-line'>
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
                <br />
                <span>I</span>
                <span>N</span>
                <span>F</span>
                <span>O</span>
                <span>!</span>
            </h1>
            <p>
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
                <br />
                <strong>Location</strong>
                <br />
                Las Vegas, NV
            </p>
        </div>
    );
};

export default ContactInfo;