import React from 'react';


class ListItem extends React.Component {
  render(props) {
    return (
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              {this.props.listItemsTitle}
            </p>

            <span className="icon">
              <i className="fa fa-angle-down"></i>
            </span>

          </header>
          <div className="card-content">
            <div className="content">
              {this.props.listItemBody}

            </div>
          </div>

        </div>


      </div>

    )
  }
}

export default ListItem;

