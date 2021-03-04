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

        e.target.reset() //
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state)
    }

    render() {   
        return (
            <div className='bkg-ops'>
                <form onSubmit={this.handleSubmit} className='form-s'>
                    <label>Name</label>
                    <br />
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name" className="reg-box" required />

                    <br />
                    <br />

                    <label>Email</label>
                    <br />
                    <input type='text' value={this.state.email} onChange={this.handleChange} name="email" className="reg-box" required />

                    <br />
                    <br />

                    <label>Company</label>
                    <br />
                    <input type='text' value={this.state.company} onChange={this.handleChange} name="company" className="reg-box" required />

                    <br />
                    <br />

                    <label>Comment</label>
                    <br />
                    <textarea type='text' value={this.state.comment} onChange={this.handleChange} name="comment" className="comment-box" required />

                    <br />
                    <br />

                    <input type="submit" value="Send Message" className='sub-btn' />
                </form>
            </div>
        );
    }
}

export default connect(null, { addUser })(UsersForm);