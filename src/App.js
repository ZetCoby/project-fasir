import React, { Component } from 'react'
import Story from './components/story/story';
import './App.css';


class App extends Component {

  state = {
    storyList: []
  }
  
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => res.json())
    .then(data => {
      const storyList = data.map(id => {
        return <Story id={id}></Story>
      })
      this.setState({storyList});
    })
    .catch(console.log)
  }

  render() {
    return (
        <div className="app">
          {this.state.storyList}
        </div>
      );
    }
  }

export default App;
