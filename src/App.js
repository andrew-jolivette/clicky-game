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
    feedback: 'Click An Image To Play',
    cards
  }
  
  pointCheck = () => {
    const currentScore = this.state.score;
    this.setState({ score: currentScore + 1 })
    // console.log("Hit!")
  }

  renderBoard = () => {
    const cardDeck = [...this.state.cards];
    cardDeck.sort(() => Math.random() - 0.5);

    console.log(cardDeck)
    return (
        cardDeck.map(card => {
          return (
            <Col xs={3} key={card.id}>
              <Card
                id={card.id}
                name={card.name}
                image={card.image}
                handleClick={this.pointCheck}
              />
            </Col>
          )
        })
    )
  }

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          highScore={this.state.highScore}
          feedback={this.state.feedback} />
        <Instructions />
        <Container>
          <Row className="justify-content-sm-center">
            <Col xs={10}>
              <Row noGutters={true}>
                {this.renderBoard()}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
