import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import '../Styles/Dashboard.css'

const Character = ({ conversationNumber ,collectionName}) => {
  const [character1, setCharacter1] = useState('');
  const [character2, setCharacter2] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const documentId = `Conversation${conversationNumber}`;
    const conversation = { character1, character2 };
    const docRef = doc(db, collectionName, documentId);
    await setDoc(docRef, conversation);
    setIsUpdated(true); // Set isUpdated to true when conversation is updated
  };

  const handleAlertClose = () => {
    setIsUpdated(false); // Close the alert box
  };

  return (
    <>
      <div >
        <Card style={{ marginLeft: '25px', width: '300px', marginTop: "20px", border: 'none', borderRadius: '12px' }}>
          <Card.Body>
            <Card.Title>Conversation {conversationNumber}</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId={`formTextField${conversationNumber}1`}>
                <Form.Label>Character 1</Form.Label>
                <Form.Control type="text" placeholder="Enter text" value={character1} onChange={(e) => setCharacter1(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId={`formTextField${conversationNumber}2`}>
                <Form.Label>Character 2</Form.Label>
                <Form.Control type="text" placeholder="Enter text" value={character2} onChange={(e) => setCharacter2(e.target.value)} required />
              </Form.Group>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ marginTop: '10px', width: "100%" }} variant="primary" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <br />
      </div>

      {/* Custom alert box */}
      {isUpdated && (
        <div className="alert-container">
          <div className="alert-box">
            <p>Conversation {conversationNumber} is updated!</p>
            <Button  variant="primary" onClick={handleAlertClose}>OK</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Character;
