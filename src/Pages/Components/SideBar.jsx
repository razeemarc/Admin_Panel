import React from 'react';
import '../Styles/Dashboard.css';

const SideBar = ({ onSidebarItemClick, selectedOption }) => {
  return (
    <div className="sidebar">
      {/* Your sidebar content goes here */}
      <ul>
        <li className={selectedOption === 'Characters' ? 'selected' : ''} onClick={() => onSidebarItemClick('Characters')}>Characters</li>
        <li className={selectedOption === 'Images' ? 'selected' : ''} onClick={() => onSidebarItemClick('Images')}>Images</li>
        <li className={selectedOption === 'Historical Content' ? 'selected' : ''} onClick={() => onSidebarItemClick('Historical Content')}>Historical Content</li>
        <li className={selectedOption === 'Feedback' ? 'selected' : ''} onClick={() => onSidebarItemClick('Feedback')}>Feedback</li>
      </ul>
    </div>
  );
}

export default SideBar;
