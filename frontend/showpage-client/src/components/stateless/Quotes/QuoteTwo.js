import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteTwo = () => {
    return (
        <div className='quote-box'>
            <q className='quote-q'>
                {QuoteItems[1].quote}
            </q>
            <p className='quote-author'>
                - {QuoteItems[1].author}
            </p>
        </div>
    )
}

export default QuoteTwo;