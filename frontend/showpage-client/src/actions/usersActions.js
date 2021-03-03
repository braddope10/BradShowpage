// Create an action that is going to fetch the grads from my api

export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch( { type: 'FETCH_USERS', payload: users } ))
    }
}

export const addUser = user => {
    fetch('http://127.0.0.1:3000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(users => dispatch( { type: 'FETCH_USERS', payload: users } ))
}