import { useState } from 'react';
import './App.css'
import { SimpleContext } from './context/SimpleContext';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <div className='App'>
        <Page></Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App
