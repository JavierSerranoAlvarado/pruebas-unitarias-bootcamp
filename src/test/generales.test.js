describe('Probando Jest', () => {
    test('Prueba de objetos iguales', () => {
        const datos1 = {
            nombre: 'Carlos Eduardo',
            edad: 31
        };
        const datos2 = {
            nombre: 'Carlos Eduardo',
            edad: 31
        };
        expect(datos1).toEqual(datos2);
    })
});