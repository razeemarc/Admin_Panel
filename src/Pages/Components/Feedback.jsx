import React, { useState, useEffect } from 'react';
import '../Styles/Dashboard.css';
import { Card, Button, Modal } from 'react-bootstrap';
import { db } from '../../firebase';
import { collection, getDocs, query, deleteDoc, doc } from 'firebase/firestore';

function Feedback({collectionName}) {
  const [students, setStudents] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleDeleteFeedback = async (id) => {
    try {
      await deleteDoc(doc(db, "Feedback", id));
      setStudents(students.filter(student => student.id !== id));
      // You may add a success message here if needed
    } catch (error) {
      console.error("Error deleting feedback:", error);
      // You may add an error message here if needed
    }
    setShowConfirmation(false); // Close the confirmation dialog after deletion
  };

  const handleCardClose = (id) => {
    setSelectedFeedback(id);
    setShowConfirmation(true); // Show the confirmation dialog
  };

  return (
    <div className="character-container">
      <div className='pagestyle' style={{ marginLeft: '50px' }}>
        {!isContentVisible && (
          <div>
           
            <Card className="conversation-display-card">
              <Card.Body>
                <Card.Title style={{ display: "flex", justifyContent: "center" }}><strong>Feedback</strong></Card.Title>
                {students.map((student, index) => (
                  <React.Fragment key={student.id}>
                    <Card>
                      <Button className="close-button" size="sm" variant='danger' onClick={() => handleCardClose(student.id)} style={{ position: 'absolute', top: 0, right: 0 }}>X</Button>
                      <Card.Body>
                        <Card.Text><strong>User Name:</strong> {student.username}</Card.Text>
                        <Card.Text><strong>Place:</strong> {student.place}</Card.Text>
                        <Card.Text><strong>Rate:</strong> {student.rate}</Card.Text>
                        <Card.Text><strong>Comment:</strong> {student.comment}</Card.Text>
                      </Card.Body>
                    </Card>
                    {index !== students.length - 1 && <p />}
                  </React.Fragment>
                ))}
              </Card.Body>
            </Card>
            <br />
          </div>
        )}
        <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this feedback?</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => handleDeleteFeedback(selectedFeedback)}>Yes</Button>
            <Button variant="primary" onClick={() => setShowConfirmation(false)}>No</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Feedback;
