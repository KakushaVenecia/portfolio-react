import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Ticker from './components/Ticker';

function App() {
  return (
    <div className="app">
      <Ticker />
      <Header />
      <MainContent />
      
      <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Venecia Kakusha. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

