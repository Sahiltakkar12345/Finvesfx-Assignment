import React from 'react'
import { Card, CardBody} from "reactstrap";

export const Header = () => {
  return (
    <div>
        <Card className='my-2 bg-primary'>
            <CardBody>
            <h1 className='text-center my-3'>
            Welcome to Poppins plazza
        </h1>
            </CardBody>
        </Card>

    </div>
  )
}

export default Header;
