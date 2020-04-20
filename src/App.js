import React from 'react';
import './App.css';

import GlobalStats from "./components/GlobalStats/GlobalStats"
import StatsByCountry from "./components/StatsByCountry/StatsByCountry"

function App() {
  return (
    <div className="App">
     <GlobalStats />
     <StatsByCountry />
    </div>
  );
}

export default App;
