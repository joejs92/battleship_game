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
/* For the gameboard class I should be more attentive with
creating good tests. First, what do we need?
1. To generate a gameboard. Default size is 10 x 10.
Just have the ship's coordinates, the misses, and the
guesses as separate arrays.
2. A function that places ships. Should have one input for
where the bow of the ship will go, and another for which
direction the stern will be pointing. Should also have
which ship is being placed as an input.
3. A function to check if ship placement is valid. It will
make sure that no part of the ship will be off the board
when placed, and that the ship being placed will not
occupy the same spaces as a ship already placed.
Should throw an error message or something if placement 
is invalid.
4. A receiveAttack function that takes a pair of 
coordinates, determines whether the attack hit a ship, 
then sends a hit to the right ship, or records the miss.
Should take the coordinates as an input. First check if
the coordinate has already been guessed. If not, see if
it hits or misses. After that, send the coordinates to 
the guess history array. 
5. A function that reports on if all of the player's 
ships have been sunk.
*/
class Gameboard{
    constructor(size){
        this.size = size;
        this.shipCoordinates = [[5,5]];
        this.misses = [];
        this.guesses = [];
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
    }

    checkValidity(value,length,direction){
        //Checking that coordinates are on the board.
        if(value[0] > this.size || value[1] > this.size){
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
                    if(value[0]== this.shipCoordinates[j][0] && value[1]+i == this.shipCoordinates[j][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'down'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]== this.shipCoordinates[j][0] && value[1]-i == this.shipCoordinates[j][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'right'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]+i == this.shipCoordinates[j][0] && value[1] == this.shipCoordinates[j][1]){
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'left'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]-i == this.shipCoordinates[j][0] && value[1] == this.shipCoordinates[j][1]){
                        collision = true;
                    }
                }
            }
        }
        return collision;
    }

    placeShip(value,length,direction){
        if(this.checkValidity(value,length,direction) == true && this.checkCollision(value,length,direction) == false){
            if(direction == 'up'){
                for(let i = 0; i < length; i++){
                    const coordinate = [value[0],value[1]+i];
                    this.shipCoordinates.push(coordinate);
                }
                //return true;
            }
            else if(direction == 'down'){
                for(let i = 0; i < length; i++){
                    const coordinate = [value[0],value[1]-i];
                    this.shipCoordinates.push(coordinate);
                }
                //return true;
            }
            else if(direction == 'right'){
                for(let i = 0; i < length; i++){
                    const coordinate = [value[0]+i,value[1]];
                    this.shipCoordinates.push(coordinate);
                }
                //return true;
            }
            else if(direction == 'left'){
                for(let i = 0; i < length; i++){
                    const coordinate = [value[0]-i,value[1]];
                    this.shipCoordinates.push(coordinate);
                }
                //return true;
            }
        }
        else{
            return false;
        }
    }
}

const gameboard = new Gameboard(10);
//console.log(gameboard.checkValidity([10,10],5,'up'));
gameboard.placeShip([5,3],5,'up');
console.log(gameboard.shipCoordinates);
module.exports = gameboard;