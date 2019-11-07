import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Nav from './containers/Navbar';
import Instructions from './components/Instructions';
import Card from './components/Card';

import cards from './cards.json';

class App extends Component {
  state = { 
    score: 0,
    highScore: 0,
    cards
  }
  render() {
    return (
      <div>
        <Nav />
        <Instructions />
        <Container>
          <Row>
        {
          this.state.cards.map(card => {
            return (
              <Col xs={3}>
                <Card 
                  id={card.id}
                  name={card.name}
                  image={card.image}
                />
              </Col>
            )
          })
        }
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
