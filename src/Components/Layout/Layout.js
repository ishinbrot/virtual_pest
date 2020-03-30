import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import VirtualPest from './VirtualPest/VirtualPest';
import classes from './Layout.module.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Layout = (props) => {


  return (
    <div>
    <AppBar position="static">
      <Toolbar>

      <div>
      </div>
      <Typography variant="h6" className={classes.title}>
      Optimus Prime the Crazy Penguin
          </Typography>
                 
      <Button color="inherit" href="https://ishinbrot.github.io/website/?fbclid=IwAR1yU_toMqN_PyEK7JAfTh_dpEDWTGSqVBVttLzxJW--Tr3rliYSKRfYd5g#/">Return to website</Button>
      </Toolbar>
    </AppBar>
    <VirtualPest />
    </div>
  )
}

export default Layout;
