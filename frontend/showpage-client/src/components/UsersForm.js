import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/usersActions'
import './Internal.css'


class UsersForm extends Component {

    state = {
        name: '',
        email: '',
        company: '',
        comment: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state)
    }

    render() {   
        return (
            <form onSubmit={this.handleSubmit} className='form-s'>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                
                <br />
                <br />

                <label>Email:</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name="email" />
                
                <br />
                <br />

                <label>Company:</label>
                <input type='text' value={this.state.company} onChange={this.handleChange} name="company" />
                
                <br />
                <br />

                <label>Comment:</label>
                <input type='text' value={this.state.comment} onChange={this.handleChange} name="comment" />
                
                <br />
                <br />

                <input type="submit" value="Send Message" className='sub-btn' />
            </form>
        );
    }
}

export default connect(null, { addUser })(UsersForm);