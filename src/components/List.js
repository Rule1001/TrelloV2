import React from 'react';
import ListItem from './ListItem'


class List extends React.Component {
  render(props) {
    return (
      <div>

        <div className="column is-10">
          <nav className="panel">
            <p className="panel-heading">
              {this.props.listTitle}
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
               {/*{Object.keys(this.props.listItems).map((ListItem) => {
          return <ListItem
            listItemBody={this.props.listItems.body}
            listId={this.props.listId}
          />
        })}*/}
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

