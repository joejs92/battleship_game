const gameboard = require('./index');
/*
describe('Testing Validity', ()=> {

    it('Off the board; Both are over', () => {
        expect(gameboard.checkValidity([11,13],5,'up')).toBe("Unable to place");
    });

    it('Off the board; One is over', () => {
        expect(gameboard.checkValidity([10,13],5,'up')).toBe("Unable to place");
    });
    it('Off the board; Both are within', () => {
        expect(gameboard.checkValidity([6,5],5,'up')).toBe("Fine");
    });
    it('up,on', () => {
        expect(gameboard.checkValidity([4,4],5,'up')).toBe("Fine");
    });
    it('up,off', () => {
        expect(gameboard.checkValidity([4,7],5,'up')).toBe("Unable to place");
    });
    it('down,on', () => {
        expect(gameboard.checkValidity([4,8],5,'down')).toBe("Fine");
    });
    it('down,off', () => {
        expect(gameboard.checkValidity([4,3],5,'down')).toBe("Unable to place");
    });
    it('right,on', () => {
        expect(gameboard.checkValidity([4,4],5,'right')).toBe("Fine");
    });
    it('right,off', () => {
        expect(gameboard.checkValidity([8,4],5,'right')).toBe("Unable to place");
    });
    it('left,on', () => {
        expect(gameboard.checkValidity([8,4],5,'left')).toBe("Fine");
    });
    it('left,off', () => {
        expect(gameboard.checkValidity([4,4],5,'left')).toBe("Unable to place");
    });
});
describe('Testing Validity', ()=> {
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
});*/