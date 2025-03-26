import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaSearch, FaUser, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/navbar.css';

const CustomNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const navigate = useNavigate();


  const searchResults = [
    { id: 1, title: 'Avengers: Endgame', type: 'movie' },
    { id: 2, title: 'Inception', type: 'movie' },
    { id: 3, title: 'Coldplay Concert', type: 'event' },
    { id: 4, title: 'IPL 2023', type: 'sport' },
  ];

  const filteredResults = searchResults.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setShowSearchResults(false);
    }
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          <span className="fs-4">BookMyShow</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll">
          <FaBars />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
            <Nav.Link href="#">Offers</Nav.Link>
            <Nav.Link href="#">Gift Cards</Nav.Link>
          </Nav>
          
          <Form className="d-flex search-container" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search for movies, events, etc."
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(e.target.value.length > 0);
              }}
            />
            <Button variant="outline-primary" type="submit">
              <FaSearch />
            </Button>
            
            {showSearchResults && (
              <div className="search-results">
                {filteredResults.length > 0 ? (
                  filteredResults.map(item => (
                    <div 
                      key={item.id} 
                      className="p-2 border-bottom hover-bg"
                      onClick={() => {
                        navigate(`/${item.type}s`);
                        setShowSearchResults(false);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.title}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-muted">No results found</div>
                )}
              </div>
            )}
          </Form>
          
          <DropdownButton
            align="end"
            title={<><FaUser /> Sign In</>}
            id="dropdown-menu-align-end"
            className="ms-3"
          >
            <Dropdown.Item eventKey="1">Sign In</Dropdown.Item>
            <Dropdown.Item eventKey="2">Register</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Help</Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;