import React from 'react';
import BoardButtons from './BoardButtons'
import '../style/App.css'
import List from './List'

import NavBar from './NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: {
    '1': {
      title: 'To do',
      id: 1
    },
    '2': {
      title: 'Doing',
      id:2
    },
    '3': {
      title: 'Done',
      id:3
    }
  },
  listItems: {
    '1': {
      body: 'task 1 to do',
      listId: 1
    },
     '2': {
      body: 'task 2 to do',
      listId: 1
    },
     '3': {
      body: 'task 3 to do',
      listId: 1
    }
  }
    };

  }

  render() {
    return (
      <div>
        <div className="component-Nav">
          <NavBar />
        </div>
        <div className="component-Buttons">
          <BoardButtons />
        </div>
        <div className="columns">
        {Object.keys(this.state.lists).map((elem) => {
          return <List
            listTitle={this.state.lists[elem].title}
            listItems={this.state.listItems}
            listId={this.state.lists[elem].id}
          />;
        })}


        </div>

      </div>

    )
  }
}

export default App;

