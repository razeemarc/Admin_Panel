import React, { useState, useEffect } from 'react';
import '../Styles/Dashboard.css';
import { Card, Button } from 'react-bootstrap';
import { db } from '../../firebase';
import { collection, getDocs ,query} from 'firebase/firestore';
import HistoryCard from './HistoryCard';

function History({collectionName}) {
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

  const handleUpdateButtonClickFalse = () => {
    setIsContentVisible(false);
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="character-container ">
      <div className='pagestyle' style={{ marginLeft: '50px' }}>
        {!isContentVisible && (
          <div>
            <h2 style={{ paddingLeft: '485px' }}>Historical Content</h2>
            <Card className="history-display-card">
              <Card.Body>
                {students.map((student, index) => (
                  <React.Fragment key={index}>
                    <div>
                      <p>{student.history}</p>
                    </div>
                    {index !== students.length - 1 && <hr />}
                  </React.Fragment>
                ))}
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
            <h3 style={{ display: 'flex', justifyContent: 'center', marginTop: '30px',marginLeft:'400px' }}>Update the History Here</h3>
            <div className='character-bg horizontal-scroll'>
              <HistoryCard collectionName={collectionName} />
            </div>
            <div >
              <Button style={{ marginTop: '10px', width: "20%",marginLeft:'510px' }} variant="primary" onClick={handleUpdateButtonClickFalse}>
                View Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
