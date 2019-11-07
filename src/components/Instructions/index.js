import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Instructions() {
  return (
    <Jumbotron fluid>
      <Container className='text-center'>
        <h1>Instructions</h1>
        <p>
          Try to see how many characters you can click on with out clicking on the same one twice! Every time you click on a character, the order of the images will jumble! Good luck!
        </p>
      </Container>
    </Jumbotron>
  )
}

export default Instructions;