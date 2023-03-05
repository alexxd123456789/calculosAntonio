import {evaluate} from 'mathjs';

export const resultado = (operacion = '') => {
    let result = '' 
    let err = false;
    let num = 0;
    
    do{
        try {
            result = evaluate(operacion.slice(0, operacion.length - num));
            err = false;
            num = 0;
        } catch (error) {
            if(error instanceof SyntaxError){
                if(operacion.length > 0){
                    err = true;
                    num++;
                }
            } else {
                console.error(error);
            }
        }
    } while(err)

    return result || '';


}