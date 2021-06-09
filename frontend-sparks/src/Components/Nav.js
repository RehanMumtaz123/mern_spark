import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Bank from '../bank.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sizes:{
    width: 160,
    height: 90
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor:'transparent'}}>
      <AppBar position="static">
        <Toolbar variant="">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <img className={classes.sizes} src={Bank}/>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
