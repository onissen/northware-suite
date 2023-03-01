import React, { useState } from 'react';

export function NewTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [panels, setPanels] = useState([]);

  function handleAddTab(e) {
    const newTab = e.target.name;
    const newPanel = e.target.component;
    setTabs([...tabs, newTab]);
    setPanels([...panels, newPanel]);
    setActiveTab(tabs.length); // Jump to the new tab
  }

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} className={activeTab === index ? 'active' : ''}>{tab}</li>
        ))}
      </ul>
      {panels.map((panel, index) => {
        if (panel == index)
          return (
            <div key={panel.props.label} className={design.TabPanel}>
                {panel.props.children}
            </div>
          )
      })}
      <button class="btn btn-success" onClick={handleAddTab} label="test" component="Test">Add Tab</button>
    </div>
  );
}

export function Test () {
    return('Test');
}