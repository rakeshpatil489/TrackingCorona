import React from 'react';
import Header from './components/headerComponent';
import Content from './components/contentComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Content />
      </div>
    </div>
  );
}

export default App;
