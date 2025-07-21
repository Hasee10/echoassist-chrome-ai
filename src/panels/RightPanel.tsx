import React from 'react';

const RightPanel: React.FC = () => (
  <div style={{ width: 320, padding: 16, background: '#f9fbe7', height: '100vh', borderLeft: '1px solid #ddd' }}>
    <h2>Smart Script Suggestions</h2>
    <ul>
      <li>• Try a de-escalation script...</li>
      <li>• Ask a clarifying question...</li>
      <li>• Consider escalation guidance...</li>
    </ul>
  </div>
);

export default RightPanel; 