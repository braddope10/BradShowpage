import React, { Component } from 'react'
import { addUser } from '../actions/usersActions'


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

    render() {   
        return (
            <form onSubmit={this.handleSubmit}>
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

                <input type="submit" value="Send Message" />
            </form>
        )
    }
}

export default UsersForm;