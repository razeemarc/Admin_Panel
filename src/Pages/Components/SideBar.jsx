// SideBar.js

import React from 'react';
import '../Styles/Dashboard.css';

const SideBar = ({ onSidebarItemClick }) => {
  return (
    <div className="sidebar">
      {/* Your sidebar content goes here */}
      <ul>
        <li onClick={() => onSidebarItemClick('Characters')}>Characters</li>
        <li onClick={() => onSidebarItemClick('Images')}>Images</li>
        <li onClick={() => onSidebarItemClick('Historical Content')}>Historical Content</li>
        <li onClick={() => onSidebarItemClick('Feedback')}>Feedback</li>
      </ul>
    </div>
  );
}

export default SideBar;
