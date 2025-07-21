import React from 'react';

const LeftPanel: React.FC = () => (
  <div style={{ width: 320, padding: 16, background: '#f5f7fa', height: '100vh', borderRight: '1px solid #ddd' }}>
    <h2>Live Call Summary</h2>
    <ul>
      <li>• Key customer concern...</li>
      <li>• Action item...</li>
      <li>• Emotional tone...</li>
    </ul>
    <div style={{ marginTop: 24 }}>
      <span role="img" aria-label="burnout" title="Burnout Risk" style={{ fontSize: 24 }}>
        🚩
      </span>
      <span style={{ marginLeft: 8, color: '#e57373' }}>Burnout risk detected</span>
    </div>
  </div>
);

export default LeftPanel; 