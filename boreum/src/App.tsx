import React from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { DarkmodeProvider } from './context/DarkmodeContext';

function App() {
  return (
    <DarkmodeProvider>
      <Main />
    </DarkmodeProvider>
  );
}

export default App;
