import React from 'react';
import GameBoard from '../containers/GameboardContainer'
import '../index.css'

const App = ({ location })=> {
    return (
      <div className="App">
        <GameBoard location={location} />
      </div>
    );
}

export default App;
