// This will be our container = data + methods

import React from 'react'
import { connect } from 'react-redux'
import './Internal.css'

const UsersContainer = ({ users }) => {
    return (
        <div className='u-text'>
            {users.slice(0).reverse().map(user => 
            <ol className='each-message'>
                <li key={user.id} className='li-list'> 
                <label>Name</label>
                <br />
                {user.name} 
                <br /><br />
                <label>Email</label>
                <br />
                {user.email} 
                <br /><br />
                <label>Company</label>
                <br />
                {user.company} 
                <br /><br />
                <label>Comment</label>
                <br />
                {user.comment}</li>
            </ol>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps)(UsersContainer)