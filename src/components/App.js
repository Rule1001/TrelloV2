import React from 'react';
import BoardButtons from './BoardButtons'
import '../style/App.css'
import List from './List'

import NavBar from './NavBar';
class App extends React.Component {
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

          <List />
          <List />
          <List />
          <List />


        </div>

      </div>

    )
  }
}

export default App;