import React, { Component } from 'react';
import Header from '../../Header';
import { connect } from 'react-redux';
import { searchedList, deleteItem } from 
      '../../../actions/githubAction';
      import EditItem from '../EditItem'      
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
;

const CustomTableCell = withStyles(theme => ({
head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 17
},
body: {
    fontSize: 14,
},
}))(TableCell);

const styles = theme => ({
root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
},
table: {
    minWidth: 700,
},
row: {
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
    },
    headerTxt:{
     fontSize: 17
    }
},
delete: {
    fontSize: 25,
    color: 'red',
    marginLeft: 15,
    cursor: 'pointer'
},
});

class SearchList extends Component {
 componentDidMount(){
    this.props.searchedList();
 }
 handleDelete=(row)=>{
    this.props.deleteItem(row);
 }
 render() {
    const { classes } = this.props;
    const lists = this.props.list
        
return (
    <div>
    <Header /> 
    <div style={{marginTop:60, margin: '90px 120px'}}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>#</CustomTableCell>
            <CustomTableCell>Search List</CustomTableCell>
            <CustomTableCell>Action</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((row,i) => (
            <TableRow className={classes.row} key={i.toString()}>
              <CustomTableCell component="th" scope="row">{i}</CustomTableCell>
              <CustomTableCell >{row}</CustomTableCell>
              <CustomTableCell >
              <ion-icon name="create"></ion-icon>
              <div style={{display:'flex'}}>
              <EditItem passed={row}/>
              <div className={classes.delete} onClick={this.handleDelete.bind(this, row)}>
               <i className="ion-md-trash"></i></div>
               </div>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
    </div>   
        );
    }
}
const mapStateToProps=(state)=>({
  list: state.github.searched
})
export default connect(mapStateToProps,
    { searchedList, 
     deleteItem 
    })(withStyles(styles)(SearchList));