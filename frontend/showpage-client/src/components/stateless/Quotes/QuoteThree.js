import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteThree = () => {
    return (
        <section className='quote-sec-three'>
            <div className='quote-box quote-style'>
                <blockquote>
                    <p>
                        {QuoteItems[2].quote}
                    </p>
                </blockquote>
            </div>
            <div>
                <p className='quote-author'>
                    - {QuoteItems[2].author}
                </p>
            </div>
        </section>
    )
}

export default QuoteThree;