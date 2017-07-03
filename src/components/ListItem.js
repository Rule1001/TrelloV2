import React from 'react';


class ListItem extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Component
    </p>
 
              <span className="icon">
                <i className="fa fa-angle-down"></i>
              </span>

          </header>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.

    </div>
            </div>

          </div>


        </div>

        )
  }
}

export default ListItem;

