import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchRepo } from '../actions/githubAction';
import AllItem from './github/repositories/AllItem';
import Loader from './common/Loader';
import Search from './github/Search';

class App extends Component {
    state={
      search:'',
      visible:4,
      status: false
    }
    componentDidMount(){
      this.props.searchRepo(localStorage.getItem('search'))
    }
    handleSearch=()=>{
      const {search} = this.state;
      localStorage.setItem('search', search)
      const list = JSON.parse(localStorage.getItem('searched'))
      list.unshift(search);
      localStorage.setItem("searched", JSON.stringify(list));
      this.props.searchRepo(search)
      this.setState({status:true, search:''})
    }
    handleMore=()=>{
      this.setState((prevState) => {
        return {visible: prevState.visible + 4};
      });
    }
    onChange=(e)=>{
      this.setState({search:e.target.value})
    }
    render() {
        let renderCards;
        const repo_list=this.props.lists;
        if(this.state.status && repo_list.length<1){
          renderCards = <Loader />
        }else{
          renderCards = 
          <div> 
          <AllItem repos={repo_list.slice(0, this.state.visible)}/>
          <div className="loadmore-root"> 
          {repo_list.length>this.state.visible?
          <button 
           className="loadmore"
           onClick={this.handleMore}>
           Show More
           </button>:''}
         </div>
         </div>
        }
        
        return (
         <div className="root">
         <Search 
           handleChange={this.onChange}
           value={this.state.search}
           handleSearch={this.handleSearch}/>
          {renderCards}
         </div>   
        );
    }
}
App.propTypes = {
    searchRepo: PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
    lists:state.github.repos
})
export default connect(mapStateToProps,
     {searchRepo})(App);
