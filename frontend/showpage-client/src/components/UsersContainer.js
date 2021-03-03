// This will be our container = data + methods

import React from 'react'
import { connect } from 'react-redux'

const UsersContainer = ({ users }) => {
    return (
        <div>
            {users.map(user => <ul><li key={user.id}> {user.name} - {user.email} - {user.company} - {user.comment}</li></ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps)(UsersContainer)