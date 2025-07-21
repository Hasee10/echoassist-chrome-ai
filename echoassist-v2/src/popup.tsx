import React from 'react';
import { createRoot } from 'react-dom/client';

const Popup = () => {
  return (
    <div style={{ width: '250px', padding: '1rem', textAlign: 'center' }}>
      <h2>EchoAssist</h2>
      <p>The extension is now running correctly.</p>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
); 