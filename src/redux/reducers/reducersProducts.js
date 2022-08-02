import { typesproduct } from "../types/types";

const initialState={
    producto: []
}
export const reducersProducts =(state=initialState, action)=>{
    switch (action.type) {
        case typesproduct.add:
            return {
                producto: [...state.producto, action.payload]
            }
            
          
    
        default:
          return state
    }
}