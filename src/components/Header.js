import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { createStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const github="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  appBar:{
   backgroundColor:'#51a3b9'
  },
  grow: {
    flexGrow: 1,
  },
  anchor: {
   color: '#fff',
   fontSize:16,
   marginRight:10
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


function ButtonAppBar(props) {
  const { classes } = props;
  return (
     
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} 
          color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" 
          className={classes.grow}>
           <NavLink to="/" className={classes.anchor}>
           Search</NavLink>
           <NavLink to="/search-list" className={classes.anchor}>
           Search List</NavLink>
          </Typography>
          <IconButton>
            <img src={github} alt="github"
            style={{height:29}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
  
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar);