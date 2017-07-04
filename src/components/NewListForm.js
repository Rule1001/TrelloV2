import React from 'react';
import PropTypes from 'prop-types';

class NewListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div className="component-NewListForm">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <p className="control">
              <input className="input" type="text" placeholder="Add a list..." value={this.state.title} onChange={this.handleChange} />
            </p>
          </div>
          <p className="control">
            <button className="button is-success" type="submit">Add a list...</button>
          </p>
        </form>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addList(this.state.title)
    this.setState({ title: '' });
  }
}

NewListForm.PropTypes = {
  addList: PropTypes.func.isRequired
}




export default NewListForm;