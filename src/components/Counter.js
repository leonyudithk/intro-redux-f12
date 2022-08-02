import React from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { actionDecrement, actionIncrement, actionReset } from '../redux/actions/actionsCounter';

const Counter = () => {

    // lo que esta dentro de {es el estado del reducer}
    //lo que voy a llamar dentro de (es el estado de la store)

      const {count}= useSelector(store => store.countStore)
           const dispacth =useDispatch()

    
    return (
        <div>
           <h1>Counter: {count} </h1>
            <Button onClick={()=> dispacth(actionIncrement(2))}> +1 </Button>
            <Button onClick={()=> dispacth(actionDecrement(1))}> -1 </Button>
            <Button onClick={()=> dispacth(actionReset())} > Reset </Button>
       
        </div>
    );
};

export default Counter;