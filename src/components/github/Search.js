import React from 'react';
import {Button,TextField ,Grid} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    margin: '8px 0px',
    color:'#fff',
    border: '1px solid #fff'
  },
  input: {
    color: '#fff',
  },
});
var list = JSON.parse(localStorage.getItem('searched'))
const Search = ({handleChange,
    handleSearch, value, classes}) => {

    return (
      <div className="search-section">
      <Grid container spacing={24}>
       <Grid item xs={12} sm={6}>
       <TextField
        type="text"
        fullWidth
        placeholder="Search"
        onChange={handleChange}
        value={value}
        />
        <Button variant="outlined"
        className={classes.button}
        onClick={handleSearch}>
         Search
        </Button>
       </Grid>
       <Grid item xs={12} sm={6}>
        <div className="recent-search">
          <h3>Recent Search</h3>
          <ul>{list?list.slice(0,3).map((item,i)=>
            <li key={i.toString()}>{item}</li>
          ):''}
          </ul>
        </div>
       </Grid>
       </Grid>
     </div>
    );
};

export default withStyles(styles)(Search);
