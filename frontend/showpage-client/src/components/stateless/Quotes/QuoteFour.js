import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteFour = () => {
    return (
        <section className='quote-sec-four'>
            <div className='quote-box quote-style'>
                <blockquote>
                    <p>
                        {QuoteItems[3].quote}
                    </p>
                </blockquote>
            </div>
            <div>
                <p className='quote-author'>
                    - {QuoteItems[3].author}
                </p>
            </div>
        </section>
    )
}

export default QuoteFour;