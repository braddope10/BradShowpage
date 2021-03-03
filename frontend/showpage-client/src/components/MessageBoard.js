import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'
import UsersContainer from './UsersContainer'
import UsersForm from './UsersForm'

class MessageBoard extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        return (
            <div>
                <UsersForm />
                <UsersContainer />
            </div>
        );
    }
}

export default connect(null, { fetchUsers })(MessageBoard)