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
        <Card style={{ marginLeft: '300px', width: '390px', marginTop: "20px", border: 'none', borderRadius: '22px' }}>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId={`formTextField`}>
  <Form.Control 
    as="textarea" // Set the input type to textarea
    rows={3} // Set the number of rows
    placeholder="Enter text" 
    value={history} 
    onChange={(e) => setHistory(e.target.value)} 
    required 
    style={{ borderRadius: '12px' }} // Apply border radius
  />
</Form.Group>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button className='second-btn-variant1'  style={{ marginTop: '10px', width: "100%" }}  type="submit">
                  Update
                </button>
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
