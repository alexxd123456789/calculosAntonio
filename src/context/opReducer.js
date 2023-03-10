import { types } from "./types";

export const opReducer = (operacion = '', action) => {
    switch (action.type) {
        case types.reset:
            return '';
        
        case types.append:
            return (operacion + action.payload).trimStart('0');
        
        case types.erase:
            return operacion.slice(0, -1);
    
        case types.set:
            return action.payload.toString();
    
        default:
            return operacion;
    }
}
