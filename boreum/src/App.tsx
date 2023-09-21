import React from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { DarkmodeProvider } from './context/DarkmodeContext';
import { Stamp } from './components/Stamp/Stamp';
import { Note } from './components/Note/Note';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <DarkmodeProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stamp" element={<Stamp />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </DarkmodeProvider>
  );
}

export default App;