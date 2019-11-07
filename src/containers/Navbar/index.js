import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


function Nav(props) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Clicky Game</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-light"><h4>Click An Image To Play</h4></Navbar.Text>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Score: 0 | High Score: 0</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav;