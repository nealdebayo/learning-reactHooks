import React, { Component} from 'react';
import './App.scss'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Cloud, Search, ViewModule, Refresh, MoreVert } from '@material-ui/icons'
// import Icon from '@material-ui/core/Icon'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import IntroPage from './apps'
import Formm from './apps/form/form'
import TodoList from './apps/todolist/todolist'
import TodoListStored from './apps/todoliststored/todoliststored'
import FormRef from './apps/formref/formref'

// import your apps here and route them as well
class App extends Component {
  render() {
    return (
      <Router>
      <>
       <div> 
          <nav>
          <div className="nav-wrapper blue darken-3">
            <Link to="/"><font className="brand-logo b-nav left"><Cloud className="b-space-right"/>Baba<b>Hooks</b></font></Link>
            <ul className="right hide-on-med-and-down b-space-top padded-list">
              <li><Search /></li>
              <li> <ViewModule /></li>
              <li><Refresh /></li>
              <li><MoreVert /></li>
            </ul>
            <ul className="right show-on-med-and-down hide-on-med-and-up b-space-top">
              <li><MoreVert /></li>
            </ul>
          </div>
        </nav>
        </div>
        <div className="App">
          <Switch>
            <Route exact path="/"><IntroPage /></Route>
            <Route path="/form"><Formm /></Route>
            <Route path="/todolist"><TodoList /></Route>
            <Route path="/todoliststored"><TodoListStored /></Route>
            <Route path="/formref"><FormRef /></Route>
          </Switch>
        </div>
      </>
      </Router>
    );
  }
}

export default App;
