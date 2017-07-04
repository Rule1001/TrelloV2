import React from 'react';
import PropTypes from 'prop-types'

class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="component-NewItemForm">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <p className="control">
              <input className="input" type="text" placeholder="New item text" value={this.state.title} onChange={this.handleChange} />
            </p>
          </div>
          <p className="control">
            <button className="button is-success" type="submit">Add a card...</button>
          </p>
        </form>
      </div>
    );
  }
  handleChange (e) {
    this.setState({
      title: e.target.value
    });
  }
  handleSubmit (e) {
    e.preventDefault();
    if (this.state.title.length === 0) return;
    this.props.addItem(this.state.title, this.props.listId)
    this.setState({title: ''});
  }
}

NewItemForm.propTypes = {
  listId: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired
};

export default NewItemForm;
