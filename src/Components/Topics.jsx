import React from "react";
import {Link} from '@reach/router'
const Topics = props => {
  
  return (
    <div>
      <li className='topic'>
        <Link to={`/topics/${props.topic.slug}/articles`}>
        <h2> {props.topic.slug}</h2>
        </Link>
        <p className='topicDescription'>{props.topic.description}</p>
      </li>
    </div>
  );
};

export default Topics;
