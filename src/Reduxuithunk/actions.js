import api from './Api';

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const response = await api.get('/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', error });
  }
};

export const createUser = (user) => async (dispatch) => {
  dispatch({ type: 'CREATE_USER_REQUEST' });
  try {
    const response = await api.post('/users', user);
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_USER_FAILURE', error });
  }
};

export const updateUser = (user) => async (dispatch) => {
  dispatch({ type: 'UPDATE_USER_REQUEST' });
  try {
    const response = await api.put(`/users/${user.id}`, user);
    dispatch({ type: 'UPDATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_USER_FAILURE', error });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: 'DELETE_USER_REQUEST' });
  try {
    await api.delete(`/users/${userId}`);
    dispatch({ type: 'DELETE_USER_SUCCESS', payload: userId });
  } catch (error) {
    dispatch({ type: 'DELETE_USER_FAILURE', error });
  }
};
