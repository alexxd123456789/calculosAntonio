import { types } from "./types";

export const calcReducer = (state = [{}], action) => {
    switch (action.type) {
        case types.addCalc:
            return [...state, action.payload];

        case types.delCalc:
            return state.filter((calculadora) => calculadora.id != action.payload);
    
        default:
            return state;
    }




}
