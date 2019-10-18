import React from 'react';
import './story.css';

export default class Story extends React.Component {

    render(){
      return (
        <div className="story-wrapper">
          <div className="points">
            {this.props.story.score} P
          </div>
          <div className="content">
            <div className="title">
              {this.props.story.title}  
            </div>
            <div className="details">
              {this.props.story.by} | {this.props.story.kids ? this.props.story.kids.length : 0} comments
            </div>
          </div>
          
        </div>
      );
    }
}
