import './App.css';
import React, {useState} from 'react';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Hero from './components/Hero'
import PlayingArea from './components/PlayingArea';

function App() {
  const [game,resetGame] = useState(false)

  return (
    <div>
      <HashRouter basename="/battleship">
        <Switch>
          <Route 
            path="/" exact
            render={(props) => (
              <Hero />
            )}
          />
          <Route 
            path="/start" exact
            render={(props) => (
              <Hero />
            )}
          />
          <Route 
            path="/play"
            render={(props) => (
              <PlayingArea
                game={game}
                resetGame={resetGame}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
