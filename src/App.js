import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import StoryView from './components/story-view/story-view';
import Home from './components/home/home';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app container-fluid">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/story/:id' component={StoryView} />
          </Switch>
        </div>
      </Router>
      );
    }
  }

export default App;
