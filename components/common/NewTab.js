import React, { useState } from 'react';

export function NewTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([]);

  function handleAddTab(e) {
    const newTab = e.target.getAttribute('label');
    setTabs([...tabs, newTab]);
    setActiveTab(tabs.length); // Jump to the new tab
  }

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} className={activeTab === index ? 'active' : ''}>{tab}</li>
        ))}
      </ul>
      
      <button class="btn btn-success" onClick={handleAddTab} label="TesterLabel">Add Tab</button>
    </div>
  );
}