import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side: 'left', open: boolean) => ( event: React.KeyboardEvent | React.MouseEvent ) => {
    if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = (side: 'left') => (
    <div className={classes.list} role="presentation" onClick={toggleDrawer(side, false)} onKeyDown={toggleDrawer(side, false)} >
      <List>
          <ListItem button>
              <Link to="/">
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/about">
                <ListItemText primary="About" />
              </Link>
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer('left', true)}
                edge="start"
            >
          <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={state.left} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}