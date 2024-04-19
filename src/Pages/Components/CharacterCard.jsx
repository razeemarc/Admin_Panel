import React, { useState } from 'react';
import Character from './Character';
import '../Styles/Dashboard.css';
import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { db } from '../../firebase';
import { collection, getDocs, query } from 'firebase/firestore';

function CharacterCard({ collectionName }) {
  const renderCharacterComponents = () => {
    const characterComponents = [];
    for (let i = 1; i <= 3; i++) {
      characterComponents.push(<Character key={i} conversationNumber={i} collectionName={collectionName} />);
    }
    return characterComponents;
  };

  const [students, setStudents] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const getStudents = async () => {
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    let students = [];
    querySnapshot.forEach((doc) => {
      students.push({ ...doc.data(), id: doc.id });
    });
    setStudents(students);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleUpdateButtonClick = () => {
    setIsContentVisible(true);
  };
  const handleUpdateButtonClickfalse = () => {
    setIsContentVisible(false);
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="character-container ">
      <div className='pagestyle' style={{ marginLeft: '50px' }}>
        {!isContentVisible && (
          <div>
            <h2 style={{ paddingLeft: '351px' }}>Conversation Between the characters</h2>
            <Card className="conversation-display-card">
              <Card.Body>
                <table>
                  <thead>
                    <tr>
                      <th>Character 1</th>
                      <th>Character 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <React.Fragment key={student.id}>
                        <tr>
                          <td>{student.character1}</td>
                          <td>{student.character2}</td>
                        </tr>
                        {index !== students.length - 1 && <tr><td colSpan="2"><hr /></td></tr>}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
            <div >
              <Button style={{ marginTop: '30px', width: "20%" ,marginLeft:'510px'}} variant="primary" onClick={handleUpdateButtonClick}>
                Update
              </Button>
            </div>
            <br />
          </div>
        )}
        {isContentVisible && (
          <div>
            <h3 style={{  marginTop: '30px' ,marginLeft:'421px'}}>Update the Conversations Here</h3>
            <div className='character-bg horizontal-scroll' >
              {renderCharacterComponents()}
            </div>
            <div >
              <Button style={{ marginTop: '10px', width: "20%" ,marginLeft:'510px'}} variant="primary" onClick={handleUpdateButtonClickfalse}>
                View Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterCard;
