// This will be our container = data + methods

import React from 'react'
import { connect } from 'react-redux'
import './Internal.css'

const UsersContainer = ({ users }) => {
    return (
        <div className='u-text'>
            {users.slice(0).reverse().map(user => 
            <ol className='each-message'>
                <li key={user.id}> 
                <strong><label>Name:</label></strong>
                <br />
                <br />
                {user.name} 
                <br /><br />
                <strong><label>Email:</label></strong>
                <br />
                <br />
                {user.email} 
                <br /><br />
                <strong><label>Company:</label></strong>
                <br />
                <br />
                {user.company} 
                <br /><br />
                <strong><label>Comment:</label></strong>
                <br />
                <br />
                {user.comment}
                </li>
            </ol>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps)(UsersContainer)