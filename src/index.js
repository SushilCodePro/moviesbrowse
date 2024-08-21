import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Profiler id="App" onRender={(id, phase, actualDuration) => {
      console.log(`Profiling ID: ${id}`);
      console.log(`Phase: ${phase}`); // "mount" or "update"
      console.log(`Actual Duration: ${actualDuration}ms`); // Time spent rendering
    }}>
      <App />
    </React.Profiler>
  </React.StrictMode>
);
