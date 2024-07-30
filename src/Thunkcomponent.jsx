import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, createUser, updateUser, deleteUser } from './Reduxthunkcrud/actions';

const Thunkcomponent = () => {
  const [user, setUser] = useState({ name: '', age: '', salary: '' });
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleCreateUser = () => {
    dispatch(createUser(user));
    setUser({ name: '', age: '', salary: '' });
  };

  const handleUpdateUser = (id) => {
    dispatch(updateUser({ id, ...user }));
    setUser({ name: '', age: '', salary: '' });
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h1>Users</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={user.salary}
          onChange={(e) => setUser({ ...user, salary: e.target.value })}
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.salary}</td>
              <td>
                <button onClick={() => handleUpdateUser(user.id)}>Update</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Thunkcomponent;



