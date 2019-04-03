import React from 'react';
import { connect } from 'react-redux';
import { getSingleRepo } from 
    '../../actions/githubAction';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
    
    const styles = {
      card: {
        maxWidth: 1000,
        textAlign:'center',
        marginTop:85
      },
      media: {
        objectFit: 'contain',
      },
    }; 

class GitDetails extends React.Component{
    componentDidMount(){
      const id = this.props.match.url
      this.props.getSingleRepo(id);
    }
    render(){
    const {app} = this.props;
    const { owner } = this.props.app
    const { classes } = this.props;
    return (
        <div style={{display:'flex', 
          justifyContent:'center'}}>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="440"
          image={owner?owner.avatar_url:'img'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" 
          component="h2">
            {app.name}
          </Typography>
          <Typography component="p">
            {app.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <i className="ion-md-star"> 
         {app.stargazers_count}</i> 
        </Button>
        <Button size="small" color="primary">
         <i className="ion-md-git-branch"> 
         Fork {app.forks_count}</i>
        </Button>
        <Button size="small" color="primary">
         <i className="ion-md-information-circle"> 
         Open issues {app.open_issues}</i>
        </Button>
        <Button size="small" color="primary">
          Network Count {app.network_count}
        </Button>
        <Button size="small" color="primary">
          Size {app.size}
        </Button>
        <Button size="small" color="primary">
          Watchers {app.watchers}
        </Button>
         
      </CardActions>
    </Card>
        </div>
    );
};
}

const mapStateToProps=state=>({
 app: state.github.single
})

export default connect(mapStateToProps, 
      { getSingleRepo })(withStyles(styles)(GitDetails));