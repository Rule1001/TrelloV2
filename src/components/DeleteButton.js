import React from 'react'
import PropTypes from 'prop-types';

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  render() {
    return (

      <div className="component-DeleteButton">
        <button className="button is-danger is-outlined" onClick={this.handleDelete}>
          <span>Delete</span>
          <span className="icon is-small">
            <i className="fa fa-times"></i>
          </span>
        </button>
      </div>
    );
  }
  handleDelete(listId) {
    this.props.deleteList(this.props.listId)
  }
}

DeleteButton.PropTypes = {
  lists: PropTypes.object.isRequired,
  deleteList: PropTypes.func.isRequired
};

export default DeleteButton
