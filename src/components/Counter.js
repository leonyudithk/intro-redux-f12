import React from 'react';
import { Button } from 'react-bootstrap';

const Counter = () => {
    return (
        <div>
           <h1>Counter: </h1>
            <Button > +1 </Button>
            <Button > -1 </Button>
            <Button > Reset </Button>
       
        </div>
    );
};

export default Counter;