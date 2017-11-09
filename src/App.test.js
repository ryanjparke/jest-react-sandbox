const fns = require ('./utils/functions.js');
const cars = require('./../server/carData.json');
//This is where we are testing the api call and display data

test('Get cars returns data', () =>{
    expect.assertions(1);
    const url = 'http://localhost:3001/api/cars'
    return fns.getCars(url).then( res => {
        expect(res[0].color).toEqual('Yellow');
    })
})

test('filterById returns correct car' ,() => {
    let carToCheck = fns.filterById(cars, 5);
    expect(carToCheck[0].id).toEqual(5);
})

test('randomNum returns a random number greater than 0 and less than 11' ,() => {
    // const num = fns.randomNum();
    expect(fns.randomNum()).toBeGreaterThan(0);
    expect(fns.randomNum()).toBeLessThanOrEqual(10.0);
})

// test('filterByColor should return by color of car' ,() => {
//     let carColor = fns.filterByColor(cars, 'Orange')
//     const num = fns.randomNum();
    
// })

test('battle should return the correct winner by battle stats input', () => {
    let winner = fns.battle(20, 1, 50, 20);
    expect(winner).toBe('Orc')


})

