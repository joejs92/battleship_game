class Ship{
    constructor(type,hitNumber){
        this.type = type;
        this.hitNumber = hitNumber;
        this.sunk = false;
        this.currentHits = 0;
    }

    isSunk(){
        if(this.currentHits == this.hitNumber){
            this.sunk = true;
        }
        return this.sunk;
    }

    hit(){
        this.currentHits += 1;
    }
}
//const playerCarrier = new Ship('carrier', 5);
/* Gameboard works fine. Lots of room for refactoring and
improvement. Will be interesting to integrate with the 
DOM. Should be only one point in the function that 
interacts with the outside world.
*/
class Gameboard{
    constructor(size){
        this.size = size;
        this.shipCoordinates = [[[5,5],'Any']];
        this.misses = [];
        this.guesses = [[3,3]];
        this.carrier = new Ship('carrier',5);
        this.battleship = new Ship('battleship',4);
        this.destroyer = new Ship('destroyer',3);
        this.submarine = new Ship('submarine',3);
        this.ptBoat = new Ship('ptBoat',2);
        this.ships = {
            'carrier':this.carrier,
            'battleship':this.battleship,
            'destroyer':this.destroyer,
            'submarine':this.destroyer,
            'ptBoat':this.ptBoat
        }
        this.currentShip = null;
    }

    checkValidity(value,length,direction){
        //Checking that coordinates are on the board.
        if(value[0] > this.size || value[1] > this.size || value[0] < 1 || value[1] < 1){
            return false;
        }
        //Checking that ship doesn't go off the board.
        if(direction == 'up'){
            if(value[1] + length -1 > this.size){
                return false;
            }
            else{
                return true;
            }
        }
        else if(direction == 'down'){
            if(value[1] - length +1 < 1){
                return false;
            }
            else{
                return true;
            } 
        }
        else if(direction == 'right'){
            if(value[0] + length -1 > this.size){
                return false;
            }
            else{
                return true;
            }
        }
        else if(direction == 'left'){
            if(value[0] - length +1 < 1){
                return false;
            }
            else{
                return true;
            } 
        }
    }

    checkCollision(value,length,direction){
        let collision = false;
        if(direction == 'up'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]== this.shipCoordinates[j][0][0] && value[1]+i == this.shipCoordinates[j][0][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'down'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]== this.shipCoordinates[j][0][0] && value[1]-i == this.shipCoordinates[j][0][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'right'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]+i == this.shipCoordinates[j][0][0] && value[1] == this.shipCoordinates[j][0][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'left'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]-i == this.shipCoordinates[j][0][0] && value[1] == this.shipCoordinates[j][0][1]){
                        collision = true;
                    }
                }
            }
        }
        return collision;
    }

    placeShip(value,direction){
        const length = this.currentShip.hitNumber;
        if(this.checkValidity(value,length,direction) == true && this.checkCollision(value,length,direction) == false){
            if(direction == 'up'){
                for(let i = 0; i < length; i++){
                    const coordinate = [[value[0],value[1]+i],this.currentShip.type];
                    this.shipCoordinates.push(coordinate);
                }
            }
            else if(direction == 'down'){
                for(let i = 0; i < length; i++){
                    const coordinate = [[value[0],value[1]-i],this.currentShip.type];
                    this.shipCoordinates.push(coordinate);
                }
            }
            else if(direction == 'right'){
                for(let i = 0; i < length; i++){
                    const coordinate = [[value[0]+i,value[1]],this.currentShip.type];
                    this.shipCoordinates.push(coordinate);
                }
            }
            else if(direction == 'left'){
                for(let i = 0; i < length; i++){
                    const coordinate = [[value[0]-i,value[1]],this.currentShip.type];
                    this.shipCoordinates.push(coordinate);
                }
            }
        }
        else{
            return false;
        }
    }

    receiveAttack(value){
        let attack = true;
        //Checking guesses to see if coordinate has been
        //guessed before.
        for(let i = 0; i < this.guesses.length; i++){
            if(value[0] == this.guesses[i][0] && value[1] == this.guesses[i][1]){
                attack = false;
            }
        }
        //Check if valid coordinate.
        if(this.checkValidity(value,1,'up') == false){
            attack = false;
        }
        //Check for a collision.
        if(this.checkCollision(value,1,'up') == false){
            attack = false;
            this.misses.push(value);
            this.guesses.push(value);
        }
        if(attack == true) {
            //Need a way to get the ship that has been
            //hit and add to the hit counter.
            for(let i = 0; i < this.shipCoordinates.length; i++){
                if(value[0]== this.shipCoordinates[i][0][0] && value[1] == this.shipCoordinates[i][0][1]){
                    this.ships[this.shipCoordinates[i][1]].currentHits += 1;
                }
            };
            this.guesses.push(value);
        }
    }

    setCurrentShip(value){
        this.currentShip = this.ships[value];
    }

    shipsSunk(){
        let allSunk = true;
        const keys = Object.keys(this.ships);
        for(let i = 0; i < keys.length; i++){
            if(this.ships[keys[i]].sunk == false){
                allSunk = false;
            }
        }
       return allSunk;
    }
}



const gameboard = new Gameboard(10);
//gameboard.setCurrentShip("carrier");
//console.log(gameboard.guesses);
module.exports = gameboard;