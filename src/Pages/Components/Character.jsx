import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Character = ({ conversationNumber }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Card  style={{ marginLeft: '20px',width:'300px', marginTop: "40px", border: 'none', borderRadius: '12px' }}>
      <Card.Body>
        <Card.Title>Conversation {conversationNumber}</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId={`formTextField${conversationNumber}1`}>
            <Form.Label>Character 1</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group controlId={`formTextField${conversationNumber}2`}>
            <Form.Label>Character 2</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button style={{ marginTop: '10px' }} variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Character;
