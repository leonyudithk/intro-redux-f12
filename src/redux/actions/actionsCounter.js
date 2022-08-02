//Para acciones sincronícas

import { typesCounter } from "../types/types"

export  const actionReset = ()=>{
    return {
        type: typesCounter.reset,
       
    }
}

export  const actionDecrement = (num)=>{
    return {
        type: typesCounter.decrement,
        payload: num
    }
}

export  const actionIncrement = (num)=>{
    return {
        type: typesCounter.increment,
        payload: num
    }
}