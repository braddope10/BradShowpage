// This will be our container = data + methods

import React from 'react'
import { connect } from 'react-redux'
import './Internal.css'

const UsersContainer = ({ users }) => {
    return (
        <div className='u-text'>
            {users.map(user => <ul><li key={user.id}> {user.name} - {user.email} - {user.company} - {user.comment}</li></ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps)(UsersContainer)