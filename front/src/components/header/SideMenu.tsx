import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <>
      <Link to={'/'}>
        <MenuItem>Home </MenuItem>
      </Link>
      <Link to={'/appbar'}>
        <MenuItem>AppBar</MenuItem>
      </Link>
      <Link to={'/auth'}>
        <MenuItem>Auth</MenuItem>
      </Link>
      <Link to={'/todo'}>
        <MenuItem>ToDoApp</MenuItem>
      </Link>
      <MenuItem>Electron</MenuItem>
    </>
  );
};

export default SideMenu;
