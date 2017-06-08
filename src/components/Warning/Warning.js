import React, {Component} from 'react';
import './Warning.css';

const Warning = ({message, visible}) => {
  return (
    <div className="Warning-wrapper">
      <div className={"Warning " + (visible ? "active" : "")}>
        {message}
      </div>
    </div>
  );
};

export default Warning;