import React from 'react';
import ListItem from './ListItem'


class List extends React.Component {
  render() {
    return (
      <div>

        <div className="column is-10">
          <nav className="panel">
            <p className="panel-heading">
              Repositories
  </p>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input className="input is-small" type="text" placeholder="Search" />
                <span className="icon is-small is-left">
                  <i className="fa fa-search"></i>
                </span>
              </p>
            </div>

            <a className="panel-block is-active">
              <span className="panel-icon">
                <i className="fa fa-book"></i>
              </span>
              <div className="colums">
              <ListItem />
              <ListItem />
              <ListItem />
              </div>
              
  </a>
            <div className="panel-block">
              <button className="button is-primary is-outlined is-fullwidth">
                Add a card...
    </button>
            </div>
          </nav>

        </div>
      </div>

    )
  }
}

export default List;

