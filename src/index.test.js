const gameboard = require('./index');
/*
describe('Testing Validity', ()=> {
    //Depends on a board size of 10
    it('Off the board; Both are over', () => {
        expect(gameboard.checkValidity([11,13],5,'up')).toBe(false);
    });
    it('Off the board; Both are under', () => {
        expect(gameboard.checkValidity([-11,-13],5,'up')).toBe(false);
    });
    it('Off the board; One is over', () => {
        expect(gameboard.checkValidity([10,13],5,'up')).toBe(false);
    });
    it('Off the board; Both are within', () => {
        expect(gameboard.checkValidity([6,5],5,'up')).toBe(true);
    });
    it('up,on', () => {
        expect(gameboard.checkValidity([4,4],5,'up')).toBe(true);
    });
    it('up,off', () => {
        expect(gameboard.checkValidity([4,7],5,'up')).toBe(false);
    });
    it('down,on', () => {
        expect(gameboard.checkValidity([4,8],5,'down')).toBe(true);
    });
    it('down,off', () => {
        expect(gameboard.checkValidity([4,3],5,'down')).toBe(false);
    });
    it('right,on', () => {
        expect(gameboard.checkValidity([4,4],5,'right')).toBe(true);
    });
    it('right,off', () => {
        expect(gameboard.checkValidity([8,4],5,'right')).toBe(false);
    });
    it('left,on', () => {
        expect(gameboard.checkValidity([8,4],5,'left')).toBe(true);
    });
    it('left,off', () => {
        expect(gameboard.checkValidity([4,4],5,'left')).toBe(false);
    });
});
describe('Testing Collisions', ()=> {
    //Depends on a given ship coordinate of [5,5].
    it('Collision Up', () => {
        expect(gameboard.checkCollision([5,1],5,'up')).toBe(true);
    });
    it('Collision Down', () => {
        expect(gameboard.checkCollision([5,8],5,'down')).toBe(true);
    });
    it('Collision Right', () => {
        expect(gameboard.checkCollision([3,5],5,'right')).toBe(true);
    });
    it('Collision Left', () => {
        expect(gameboard.checkCollision([8,5],5,'left')).toBe(true);
    });
    it('No Collision', () => {
        expect(gameboard.checkCollision([3,3],5,'up')).toBe(false);
    });
});
describe('Testing Hits', ()=> {
    //Depends on a given ship coordinate of [5,5] and
    //the carrier's length.
    it('Already Guessed', () => {
        expect(gameboard.receiveAttack([3,3])).toBe(false);
    });
    it('Invalid Coordinate', () => {
        expect(gameboard.receiveAttack([11,-3])).toBe(false);
    });
    it('Collision - miss', () => {
        expect(gameboard.receiveAttack([5,3])).toBe(false);
    });
    it('Collision - hit', () => {
        expect(gameboard.receiveAttack([5,5])).toBe(true);
    });
});

describe('Testing Ship Placement', ()=> {
    //Depends on a given ship coordinate of [5,5].
    //Test doesn't work.
    it('Place Ship Up', () => {
        expect(gameboard.placeShip([4,1],5,'up')).toBe(true);
    });
    it('Place Ship Down', () => {
        expect(gameboard.placeShip([4,8],5,'down')).toBe(true);
    });
    it('Place Ship Right', () => {
        expect(gameboard.placeShip([3,4],5,'right')).toBe(true);
    });
    it('Place Ship Left', () => {
        expect(gameboard.placeShip([8,4],5,'left')).toBe(true);
    });
    it('Place Ship Collision', () => {
        expect(gameboard.placeShip([5,3],5,'up')).toBe(false);
    });
});*/