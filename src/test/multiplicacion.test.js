import { multiplicacion } from "../js/multiplicacion";

test('multiplicar 10 por 5 igual a 50', ()=>{
    expect(multiplicacion(10,5)).toBe(50);
})