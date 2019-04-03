import React from 'react';
import { connect } from 'react-redux';
import { editItem } from '../../actions/githubAction'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
const edit={
    fontSize: 25,
    color: '#28a745', 
    cursor: 'pointer'
}
class EditItem extends React.Component{
    state = {
        open: false,
        val: this.props.passed
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
         this.props.editItem(this.state.val ,
             this.props.passed)
         this.setState({ open: false });
      };
    
      render() {
        return (
          <div>
            <span style={edit} onClick={this.handleClickOpen}>
            <i className="ion-md-create"></i>
            </span>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Edit your item</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Enter your value"
                  type="text"
                  fullWidth
                  value={this.state.val}
                  onChange={(val)=>this.setState({val:val.target.value})}/>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="secondary">
                  Update
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
    }

export default connect(null, {
    editItem
})(EditItem);