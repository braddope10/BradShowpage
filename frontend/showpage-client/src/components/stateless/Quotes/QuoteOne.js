import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteOne = () => {
    return (
        <section className='quote-sec-one'>
            <div className='quote-box quote-style'>
                <blockquote>
                    <p>
                        {QuoteItems[0].quote}
                    </p>
                </blockquote>
            </div>
            <div>
                <p className='quote-author'>
                    - {QuoteItems[0].author}
                </p>
            </div>
        </section>
    )
}

export default QuoteOne;