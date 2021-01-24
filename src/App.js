import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './components/Hero'
import PlayingArea from './components/PlayingArea';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route 
            path="/" exact
            render={(props) => (
              <Hero />
            )}
          />
          <Route 
            path="/play"
            render={(props) => (
              <PlayingArea
              />
            )}
          />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
