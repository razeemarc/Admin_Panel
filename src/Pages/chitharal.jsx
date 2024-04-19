// Chitharal.js

import React, { useState } from 'react';
import SideBar from './Components/SideBar';
import './Styles/Dashboard.css';
import CharacterCard from './Components/CharacterCard';
import ImageUploader from './Components/ImageUploader';
import History from './Components/History';
import Feedback from './Components/Feedback';

function Chitharal() {
  const [selectedOption, setSelectedOption] = useState('Characters');

  const handleSidebarItemClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='pagestyle'>
       <SideBar onSidebarItemClick={handleSidebarItemClick} selectedOption={selectedOption} />
      <div >
        <div className='character-bg'>
          {selectedOption === 'Characters' && <CharacterCard />}
          {selectedOption === 'Images' && <ImageUploader />}
          {selectedOption === 'Historical Content' && <History />}
          {selectedOption === 'Feedback' && <Feedback />}

        </div>
      </div>
    </div>
  );
}

export default Chitharal;
