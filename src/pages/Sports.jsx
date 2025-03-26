import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Sports = () => {
  const sportsEvents = [
    {
      id: 1,
      title: 'IPL 2023 - Mumbai vs Chennai',
      type: 'Cricket',
      date: '10 Nov 2023',
      venue: 'Wankhede Stadium, Mumbai',
      price: 2000,
      image: '/images/ipl.jpg'
    },
    {
      id: 2,
      title: 'ISL Football Match',
      type: 'Football',
      date: '12 Nov 2023',
      venue: 'Salt Lake Stadium, Kolkata',
      price: 800,
      image: '/images/football.jpg'
    },
    {
      id: 3,
      title: 'Pro Kabaddi League',
      type: 'Kabaddi',
      date: '15 Nov 2023',
      venue: 'Thyagaraj Stadium, Delhi',
      price: 500,
      image: '/images/kabaddi.webp'
    },
    {
      id: 4,
      title: 'Badminton Premier League',
      type: 'Badminton',
      date: '18 Nov 2023',
      venue: 'Kanteerava Stadium, Bangalore',
      price: 1200,
      image: '/images/badmint.jpg'
    },
  ];

  return (
    <Container fluid className="py-4">
      <h1 className="mb-4">Sports Events</h1>
      <Row xs={1} sm={2} lg={4} className="g-4">
        {sportsEvents.map(event => (
          <Col key={event.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  <div><strong>Sport:</strong> {event.type}</div>
                  <div><strong>Date:</strong> {event.date}</div>
                  <div><strong>Venue:</strong> {event.venue}</div>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0">₹{event.price}</span>
                <button className="btn btn-primary">Book Now</button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sports;