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
          id: '1'
        },
        '2': {
          title: 'Doing',
          id: '2'
        },
        '3': {
          title: 'Done',
          id: '3'
        }
      },
      listItems: {
        '1': {
          title: 'task 1',
          body: 'shopping',
          listId: '1'
        },
        '2': {
          title: 'task 2',
          body: 'eating',
          listId: '1'
        },
        '3': {
          title: 'task 3',
          body: 'cleaning',
          listId: '1'
        }
      }
    };

  }

  render() {
    const listCards = function (listItems) {

      const result = {};
      for (let key in listItems) {
        let listId = listItems[key].listId
        if (result[listId]) {
          result[listId].push(listItems[key])
        }
        else {
          result[listId] = []
          result[listId].push(listItems[key])
        }
      }
      return result
    }
    const result = listCards(this.state.listItems)

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
            console.log(result)
            return <List
              listTitle={this.state.lists[elem].title}
              listId={this.state.lists[elem].id}
              listItems={ result[elem] ? result[elem] : [] }
              lists={this.state.lists}
            />;





          })}


        </div>

      </div>

    )
  }
}



export default App;

