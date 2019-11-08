import React from 'react';
import { Link } from 'react-router-dom';
import './story.css';

export default function Story({ story }) {
  return (
    <div className="story-wrapper">
      <Link to={`/story/${story.id}`}>
        <div className="points">{story.score} P</div>
        <div className="content">
          <div className="title">{story.title}</div>
          <div className="details">
            {story.by}|{story.kids ? story.kids.length : 0}
            comments
          </div>
        </div>
      </Link>
    </div>
  );
}
