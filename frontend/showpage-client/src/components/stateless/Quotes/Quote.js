import React from 'react'
import '../../Internal.css'
// import { QuoteItems } from './QuoteItems'

class Quote extends React.Component {
    render() {
        return (
            <section className='quote-sec-one'>
            <div className='quote-box quote-style'>
                <blockquote>
                    <p>
                        {this.props.quote}
                    </p>
                </blockquote>
            </div>
            <div>
                <p className='quote-author'>
                    - {this.props.author}
                </p>
            </div>
        </section>
        )
    }
}

export default Quote;
