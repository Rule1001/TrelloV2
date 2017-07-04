import React from 'react';

const ListItem = (props) => (
  <div className="card component-ListItem">
    <header className="card-header">
      <p className="card-header-title">
        {props.title}
      </p>
      <span className="icon">
        <i className="fa fa-angle-down"></i>
      </span>
    </header>
    {/*<div className="card-content">
      <div className="content">
        {props.body}
      </div>
    </div>*/}
  </div>
);

export default ListItem;

