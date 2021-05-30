import React from 'react'

class LinkPreview extends React.Component {
    render () {
        return (
            <div className="link-div">
                <a className="link-box" href={this.props.url}>

                    <p className="link-header">
                        {this.props.header}
                    </p>
                    
                    <p className="link-code">
                        {this.props.code}
                    </p>

                    <p className="link-summary">
                        {this.props.summary}
                    </p>

                    <p className="link-url">
                        {this.props.url}
                    </p>

                </a> 
            </div>
        )
    }
}

export default LinkPreview