import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore'; // Import doc from firebase/firestore
import '../Styles/Dashboard.css'

const HistoryCard = ({ collectionName}) => { // Correctly pass the props
  const [history, setHistory] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { history }; // Ensure the key matches your Firestore document structure
    const docRef = doc(db, collectionName,"History"); // Use doc instead of documentId
    await setDoc(docRef, data);
    setIsUpdated(true);
  };

  const handleAlertClose = () => {
    setIsUpdated(false);
  };

  return (
    <>
      <div className='character-container'>
        <Card style={{ marginLeft: '300px', width: '390px', marginTop: "20px", border: 'none', borderRadius: '12px' }}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId={`formTextField`}>
                <Form.Control type="text" placeholder="Enter text" value={history} onChange={(e) => setHistory(e.target.value)} required />
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
      {isUpdated && (
        <div className="alert-container">
          <div className="alert-box">
            <p>Updated!</p>
            <Button variant="primary" onClick={handleAlertClose}>OK</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryCard;
