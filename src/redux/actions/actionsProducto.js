import { typesproduct } from "../types/types"

export const actionAddproductAsync = (formValue) => {
    return 
}

export const actionAddproducts = (formValue) => {
    return {
        type: typesproduct.add,
        payload: formValue

    }
}