import React, { Component } from 'react'
import Story from './components/story/story';
import './App.css';


class App extends Component {
  state = {
    topStoriesIds: [],
    storyList: [],
  }
  
  getItems() {
    const requests = [];
    for (let i = 0; i <= 20; i++) {
      requests.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${this.state.topStoriesIds[i]}.json`).then(res => res.json()));
    }
    Promise.all(requests)
      .then(data => {
        this.setState({storyList: data})
      }).catch(console.log) 
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => res.json())
    .then(data => {
      this.setState({ topStoriesIds: data});
      this.getItems();
    }).catch(console.log)
  }

  showStories() {
    return this.state.storyList.map((story, i) => {
      return <Story story={story} key={i}></Story>
    });
  }

  render() {
    return (
        <div className="app container-fluid">
          {this.showStories()}
        </div>
      );
    }
  }

export default App;
