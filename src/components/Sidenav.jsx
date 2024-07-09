import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Person as PersonIcon } from '@mui/icons-material';

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Drawer variant="permanent" open={isOpen}>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          {isOpen && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemIcon><PersonIcon /></ListItemIcon>
          {isOpen && <ListItemText primary="User Panel" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidenav;
