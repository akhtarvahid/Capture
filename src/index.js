import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import {store} from './store';
import './App.css'
import App from './components/App'
import SearchList from './components/github/searched-list/SearchList';
import Header from './components/Header';
import GitDetails from './components/github/GitDetails';

ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
	  <Route path="/" exact component={App} />
     <Route path="/:id/:id" exact component={GitDetails} />
     <Route path="/search-list" exact component={SearchList} />
   </Switch>   
   </div> 
	</BrowserRouter>
   </Provider>
	, document.getElementById('root'));
