import React from 'react';
import {v4} from 'uuid';
import BoardButtons from './BoardButtons';
import '../style/App.css';
import initialState from '../data/initialState';
import List from './List';

import NavBar from './NavBar';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = initialState;
    this.addItem = this.addItem.bind(this);
  }
  render () {
    return (
      <div className="component-App">
        <NavBar />
        <BoardButtons />
        <div className="columns">
          {Object.values(this.state.lists).map((list) => {
            return (
              <List
                key={list.id}
                title={list.title}
                listId={list.id}
                items={filterCardsByListId(this.state.items, list.id)}
                addItem={this.addItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
  addItem (title, listId) {
    const newItemId = v4();
    const newItems = Object.assign({}, this.state.items, {
      [newItemId]: {
        id: newItemId,
        listId,
        title,
        body: ''
      }
    })
    this.setState({items: newItems});
  }
}

function filterCardsByListId (items, listId) {
  return Object.values(items).filter(item => {
    return item.listId === listId;
  });
}

export default App;
