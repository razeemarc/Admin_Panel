import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import place1 from '../images/chitharal.jpeg';
import place2 from '../images/marunthu kottai_1.jpg';
import place3 from '../images/vattakottai.jpg';
import './Styles/Dashboard.css'

function Home() {
  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>PLACES</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <Link to="/chitharal" style={{ textDecoration: 'none' }}>
          <Card className="place-card">
            <Card.Img variant="top" src={place1} height='150px' width='80px' />
            <Card.Body>
              <Card.Title>Chitharal Rock Cut Temple</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/marunthukottai" style={{ textDecoration: 'none' }}>
          <Card className="place-card">
            <Card.Img variant="top" src={place2} height='150px' width='50px' />
            <Card.Body style={{marginLeft:'50px'}}>
              <Card.Title>Marunthu Kootai</Card.Title>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/vattakottai" style={{ textDecoration: 'none' }}>
          <Card className="place-card">
            <Card.Img variant="top" src={place3} height='150px' width='50px' />
            <Card.Body style={{marginLeft:'75px'}}>
              <Card.Title>Vattakottai</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default Home;
