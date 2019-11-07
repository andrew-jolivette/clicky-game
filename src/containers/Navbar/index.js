import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


function Nav(props) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Clicky Game</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-light"><h4>{props.feedback}</h4></Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Score: {props.score} | High Score: {props.highScore}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav;