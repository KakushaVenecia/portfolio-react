import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      
      <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Venecia Kakusha. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

