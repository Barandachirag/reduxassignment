// src/actions.js
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', error });
    }
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: 'CREATE_USER_REQUEST' });
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      dispatch({ type: 'CREATE_USER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'CREATE_USER_FAILURE', error });
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: 'UPDATE_USER_REQUEST' });
    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      dispatch({ type: 'UPDATE_USER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'UPDATE_USER_FAILURE', error });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_USER_REQUEST' });
    try {
      await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'DELETE_USER_SUCCESS', payload: userId });
    } catch (error) {
      dispatch({ type: 'DELETE_USER_FAILURE', error });
    }
  };
};
