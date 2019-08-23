import React from 'react';

export default class Story extends React.Component {

    render(){
      return (
        <div className="story">{this.props.id}</div>
      );
    }
}
