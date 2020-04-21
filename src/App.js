import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer"

import Header from "./components/Header/Header"
import GlobalStats from "./components/GlobalStats/GlobalStats"
import StatsByCountry from "./components/StatsByCountry/StatsByCountry"

function App() {
  return (
    <div className="App">
      <Header />
     <GlobalStats />
     <StatsByCountry />
     <Footer />
    </div>
  );
}

export default App;
