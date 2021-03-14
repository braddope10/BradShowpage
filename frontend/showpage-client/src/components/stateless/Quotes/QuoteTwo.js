import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteTwo = () => {
    return (
        <section className='quote-sec-two'>
            <div className='quote-box quote-style'>
                <blockquote>
                    <p>
                        {QuoteItems[1].quote}
                    </p>
                </blockquote>
            </div>
            <div>
                <p className='quote-author'>
                    - {QuoteItems[1].author}
                </p>
            </div>
        </section>
    )
}

export default QuoteTwo;