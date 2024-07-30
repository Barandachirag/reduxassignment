import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, createUser, updateUser, deleteUser } from './Reduxuithunk/actions'; // Ensure the correct path
import { TextField, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Thunkusers = () => {
  const [user, setUser] = useState({ name: '', age: '', salary: '' });
  const [isUpdate, setIsUpdate] = useState(false); 
  const [updateUserId, setUpdateUserId] = useState(null); 
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleCreateUser = () => {
    if (isUpdate) {
      dispatch(updateUser({ id: updateUserId, ...user }));
      setIsUpdate(false);
      setUpdateUserId(null);
    } else {
      dispatch(createUser(user));
    }
    setUser({ name: '', age: '', salary: '' });
  };

  const handleEditUser = (user) => {
    setIsUpdate(true);
    setUpdateUserId(user.id);
    setUser({ name: user.name, age: user.age, salary: user.salary });
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h1>Users</h1>
      <div>
        <TextField
          label="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={{ margin: '10px' }}
        />
        <TextField
          label="Age"
          type="number"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          style={{ margin: '10px' }}
        />
        <TextField
          label="Salary"
          type="number"
          value={user.salary}
          onChange={(e) => setUser({ ...user, salary: e.target.value })}
          style={{ margin: '10px' }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleCreateUser} 
          style={{ margin: '10px', padding: '10px 20px' }}
        >
          {isUpdate ? 'Update User' : 'Create User'}
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.salary}</TableCell>
              <TableCell>
                <Button onClick={() => handleEditUser(user)}  variant="contained" 
                color="primary" 
                style={{ margin: '10px', padding: '10px 20px' }}>
                  Edit
                </Button>
                <Button onClick={() => handleDeleteUser(user.id)} variant="contained" 
                color="error" 
                style={{ margin: '10px', padding: '10px 20px' }}
                   >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Thunkusers;


