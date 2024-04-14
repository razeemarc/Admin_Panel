import React from 'react';
import Character from './Character';
import '../Styles/Dashboard.css';

function CharacterCard() {
  const renderCharacterComponents = () => {
    const characterComponents = [];
    for (let i = 1; i <= 3; i++) {
      characterComponents.push(<Character key={i} conversationNumber={i} />);
    }
    return characterComponents;
  };

  return (
    <div className="character-container">
      
      <div className='pagestyle' style={{marginLeft:'50px'}}>
      <h2 style={{paddingLeft:'290px'}}>Conversation Between the characters</h2>
        <div className='character-bg horizontal-scroll'>
        
          {renderCharacterComponents()}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
