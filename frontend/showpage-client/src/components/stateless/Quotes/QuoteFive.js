import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteFive = () => {
    return (
        <section className='quote-sec-five'>
            <div className='quote-box quote-style'>
                <blockquote>
                    <p>
                        {QuoteItems[4].quote}
                    </p>
                </blockquote>
            </div>
            <div>
                <p className='quote-author'>
                    - {QuoteItems[4].author}
                </p>
            </div>
        </section>
    )
}

export default QuoteFive;