import React from 'react';
import './story-view.css';

export default class StoryView extends React.Component {
  
  state = {
    storyId: 0,
    title: "",
    comments: [],
    url:"",
    score: "",
  }

  componentDidMount() {
    this.getStoryIdFromUrl();
  }

  getStoryIdFromUrl() {
    this.setState({storyId: this.props.location.pathname.split("/").pop()}, this.fetchStory);
    
  }

  fetchStory() {
    if (this.state.storyId) {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${this.state.storyId}.json`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          title: res.title,
          comments: res.kids,
          url: res.url,
          score: res.score,
        })
      })
    }    
  }

  render(){
    return (
      <div className="container story-view-wrapper">
        <div className="title"><a href={this.state.url}>{this.state.title}</a></div>
      </div>
    );
  }
}
