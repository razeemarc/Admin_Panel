import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import place1 from '../images/chitharal.jpeg';
import place2 from '../images/marunthu kottai_1.jpg';
import place3 from '../images/vattakottai.jpg';


function Home() {
  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>PLACES</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <Link to="/chitharal" style={{ textDecoration: 'none' }}>
          <Card style={{ width: '18rem', marginRight: '20px' }}>
            <Card.Img variant="top" src={place1} height='150px' width='80px' />
            <Card.Body>
              <Card.Title style={{ textDecoration: 'none' }}>Chitharal Rock Cut Temple</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/marunthukottai" style={{ textDecoration: 'none' }}>
          <Card style={{ width: '18rem', marginRight: '20px' }}>
            <Card.Img variant="top" src={place2} height='150px' width='50px' />
            <Card.Body>
              <Card.Title style={{ textDecoration: 'none' }}>Marunthu Kootai</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/vattakottai" style={{ textDecoration: 'none' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={place3} height='150px' width='50px' />
            <Card.Body>
              <Card.Title style={{ textDecoration: 'none' }}>Vattakottai</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default Home;
