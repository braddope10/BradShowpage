// This will be our container = data + methods

import React, { Component } from 'react'
import { connect } from 'react-redux'
import UsersForm from './UsersForm'
import { fetchUsers } from '../actions/usersActions'


class UsersContainer extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        return (
            <div>
                <UsersForm />
            </div>
        );
    }
}

export default connect(null, { fetchUsers })(UsersContainer)