import React from 'react';
import ReactDOM from 'react-dom/client';

const Popup = () => {
  return (
    <div style={{ width: '200px', padding: '1rem' }}>
      <h1>EchoAssist</h1>
      <p>Extension is active.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
); 