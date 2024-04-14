import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { db} from '../../firebase';
import { doc,setDoc } from 'firebase/firestore';
const Character = ({ conversationNumber }) => {
  const handleSubmit =async (e) => {
    const documentId = `Conversation${conversationNumber}`;
    e.preventDefault();
   const conversation ={character1,character2};

   const docRef = doc(db, "ChitharalCharacter", documentId);
   
   await setDoc(docRef, conversation);
   setCharacter1('');
   setCharacter2('');
 

  };
  const [character1,setCharacter1]=useState('')
  const [character2,setCharacter2]=useState('')

  return (
    <Card  style={{ marginLeft: '20px',width:'300px', marginTop: "40px", border: 'none', borderRadius: '12px' }}>
      <Card.Body>
        <Card.Title>Conversation {conversationNumber}</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId={`formTextField${conversationNumber}1`}>
            <Form.Label>Character 1</Form.Label>
            <Form.Control type="text" placeholder="Enter text" value={character1} onChange={(e)=>setCharacter1(e.target.value)} />
          </Form.Group>
          <Form.Group controlId={`formTextField${conversationNumber}2`}>
            <Form.Label>Character 2</Form.Label>
            <Form.Control type="text" placeholder="Enter text" value={character2} onChange={(e)=>setCharacter2(e.target.value)} />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button style={{ marginTop: '10px' }} variant="primary" type="submit" >
              Add
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Character;