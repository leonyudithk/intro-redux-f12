import React from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { actionDecrement, actionIncrement, actionReset } from '../redux/actions/actionsCounter';

const Counter = () => {

    const dispacth =useDispatch()

    return (
        <div>
           <h1>Counter: </h1>
            <Button onClick={()=> dispacth(actionIncrement(2))}> +1 </Button>
            <Button onClick={()=> dispacth(actionDecrement(1))}> -1 </Button>
            <Button onClick={()=> dispacth(actionReset())} > Reset </Button>
       
        </div>
    );
};

export default Counter;