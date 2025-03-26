import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Coldplay Concert',
      type: 'Music',
      date: '15 Nov 2023',
      venue: 'Mumbai Arena',
      price: 3000,
      image: 'images/Coldplay.jpg'
    },
    {
      id: 2,
      title: 'Standup Comedy by Zakir Khan',
      type: 'Comedy',
      date: '20 Nov 2023',
      venue: 'Delhi Auditorium',
      price: 1500,
      image: 'images/comedy.jpg'
    },
    {
      id: 3,
      title: 'Tech Conference 2023',
      type: 'Conference',
      date: '25 Nov 2023',
      venue: 'Bangalore Convention Center',
      price: 5000,
      image: 'images/tech.jpg'
    },
    {
      id: 4,
      title: 'Food Festival',
      type: 'Food',
      date: '5 Dec 2023',
      venue: 'Hyderabad Grounds',
      price: 800,
      image: 'images/food.jpg'
    },
  ];

  return (
    <Container fluid className="py-4">
      <h1 className="mb-4">Events</h1>
      <Row xs={1} sm={2} lg={4} className="g-4">
        {events.map(event => (
          <Col key={event.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  <div><strong>Type:</strong> {event.type}</div>
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

export default Events;