import React from 'react'
import '../../Internal.css'
import { QuoteItems } from './QuoteItems'

const QuoteThree = () => {
    return (
        <div className='quote-box'>
            <q className='quote-q'>
                {QuoteItems[2].quote}
            </q>
            <p className='quote-author'>
                - {QuoteItems[2].author}
            </p>
        </div>
    )
}

export default QuoteThree;