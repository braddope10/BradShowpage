import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteFour = () => {
    return (
        <div className='quote-box'>
            <q className='quote-q'>
                {QuoteItems[3].quote}
            </q>
            <p className='quote-author'>
                - {QuoteItems[3].author}
            </p>
        </div>
    )
}

export default QuoteFour;