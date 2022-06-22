//import Helper from '../utils/helpers';
import e from 'express';
import Helper from '../utils/helpers'

describe('testing util class methods', () => {
    test('checks if the area bound is returned correctly', () => {
        const x = Helper.totalArea(10, 2);
        expect(x).toBe(20);
    })

    test('checks if area bounds exceeds the limit', () => {
        const x = Helper.totalArea(10, 20);
        expect(x).toBe(false || 0);
    })

    test('checks if the wall accept the mount of doors and windows', () => {
        const area = Helper.totalArea(1, 10);
        const acceptable = Helper.isDoorAndWindowAcceptable(area, 1, 1)
        expect(acceptable).toBe(true)
    })

    test('checks if the wall do not exceed the mount of doors and windows', () => {
        const area = Helper.totalArea(1, 4.8);
        const acceptable = Helper.isDoorAndWindowAcceptable(area, 0, 1)
        expect(acceptable).toBe(true)
    })

    test('check if the wall can have a dor', () => {
        const wallHeight = 1.9;
        const acceptable = Helper.isWallTallEnought(2.2);
        expect(acceptable).toBe(true);
    })
    
    test('check if function return the correct cans of ink', () => {
        const arr = [
            { totalArea: 640.5, id: 1, height: 0, width: 0, windows: 0, doors: 0},
            { totalArea: 2, id: 2, height: 0, width: 0, windows: 0, doors: 0},
            { totalArea: 2, id: 2, height: 0, width: 0, windows: 0, doors: 0},
            { totalArea: 2, id: 2, height: 0, width: 0, windows: 0, doors: 0},
        ]
        const cans = Helper.amountOfInk(arr);
        //console.log(cans)
        expect(cans).toEqual([ { size: 18, amount: 7 }, { size: 2.5, amount: 1 }, { size: 0.5, amount: 2 } ]);
    })
})

