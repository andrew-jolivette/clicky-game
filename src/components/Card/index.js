import React from 'react';
import './style.css';

import Image from 'react-bootstrap/Image';

function Card(props) {
  return(
      <Image 
        alt={props.name} 
        src={props.image} 
        thumbnail 
        className='gameCard'
      />
  )
}

export default Card;