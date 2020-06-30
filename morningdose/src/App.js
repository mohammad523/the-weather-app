import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather/Weather';
import News from './Components/News/News';



function App() {
  return (
    <div className="App">
      <h1>MORNING DOSE</h1>
      <Weather />
      <News />
    </div>
  );
}

export default App;
