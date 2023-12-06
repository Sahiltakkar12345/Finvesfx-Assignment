import React from 'react'
import { Container} from "reactstrap";
import { Link } from 'react-router-dom';

 const Home = () => {
  return (

    <div>
          <Container className='text-center bg-success'>
            <h3> The deepest principle in human nature is the craving to be appreciated !!</h3>
            <p>
            Food quality is a concept based on sensory, nutritional and safety criteria of food products. 
            It also involves factors such as origin, labeling, traceability and environmental impact.
            </p>
            <Container>
            <Link to="/foodstuffs" className='btn btn-info mb-1' Outline> Order Now</Link>
            </Container>
           </Container>
    </div>
  );
};

export default Home;
