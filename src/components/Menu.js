import React from 'react'
import { Link } from 'react-router-dom';
import { Container, ListGroup} from 'reactstrap';

export const Menu = () => {
  return (
    <div >
    <ListGroup className=' fornt-weight-bold'>
        <Link tag="a" to="/" action>Home</Link>
        <Link tag="a" to="/foodstuffs" action>FoodStuffs</Link>
        <Link tag="a" to="/about-com" action>About</Link>
        <Link tag="a" to="/contact" action>Contact Us</Link>
    </ListGroup>
    </div>
    
   
  );
};

export default Menu;