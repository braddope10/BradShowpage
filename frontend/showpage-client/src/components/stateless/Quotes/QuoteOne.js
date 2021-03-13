import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteOne = () => {
    return (
        <div className='quote-box'>
            <q className='quote-q'>
                {QuoteItems[0].quote}
            </q>
            <p className='quote-author'>
                - {QuoteItems[0].author}
            </p>
        </div>
    )
}

export default QuoteOne;