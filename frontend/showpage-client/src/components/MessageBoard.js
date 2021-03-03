import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'
import UsersForm from './UsersForm'


class MessageBoard extends Component {
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

export default connect(null, { fetchUsers })(MessageBoard)