import './App.css';
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Hero from './components/Hero'
import PlayingArea from './components/PlayingArea';

function App() {

  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
      
    </div>
  );
}

export default App;
