// This will be our container = data + methods

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'

class UsersContainer extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        return (
            <div>
                Users Container
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer)