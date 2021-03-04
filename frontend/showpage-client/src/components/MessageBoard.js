import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'
import UsersContainer from './UsersContainer'
import UsersForm from './UsersForm'
import './Internal.css'

class MessageBoard extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        return (
            
            <div className='classic-text'>
                <h1 className='wacky-line'>
                    <span>M</span>
                    <span>E</span>
                    <span>S</span>
                    <span>S</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                    
                    <span className='i-span'>M</span>
                    <span>E</span>
                    <span>!</span>
                </h1>
                <UsersForm />
                <UsersContainer />
            </div>
        );
    }
}

export default connect(null, { fetchUsers })(MessageBoard)