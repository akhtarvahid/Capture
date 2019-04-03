import React from 'react';
import '../repositories/Item.css'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'contain',
  },
  cards:{
    padding: 10
  }
};

const Item = ({item, classes}) => {
 
    return (
      <div className="card">
        <Card>
      <CardActionArea className={classes.cards}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={item.owner.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.name}
          </Typography>
          <Typography component="p">
          {item.description!==null?
            item.description.substr(0,40)+' ...':
            'No Description'}
          </Typography>
          <Typography>
          {item.created_at}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink to={`/${item.owner.login}/${item.name}`}  
         className="viewprofile">
          VIEW PROJECT
        </NavLink>
      </CardActions>
    </Card>
      </div>  
    );
};
Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
