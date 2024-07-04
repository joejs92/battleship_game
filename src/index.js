//import './style.css';
//import {playerShipsPlacement} from './drag.js';

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
    constructor(size, name){
        this.size = size;
        this.name = name;
        this.shipCoordinates = [];
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
            'submarine':this.submarine,
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
                window.alert("Invalid Ship Placement");
                return false;
            }
            else{
                return true;
            }
        }
        else if(direction == 'down'){
            if(value[1] - length +1 < 1){
                window.alert("Invalid Ship Placement");
                return false;
            }
            else{
                return true;
            } 
        }
        else if(direction == 'right'){
            if(value[0] + length -1 > this.size){
                window.alert("Invalid Ship Placement");
                return false;
            }
            else{
                return true;
            }
        }
        else if(direction == 'left'){
            if(value[0] - length +1 < 1){
                window.alert("Invalid Ship Placement");
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
                        window.alert("Ship Collision");
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'down'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]== this.shipCoordinates[j][0][0] && value[1]-i == this.shipCoordinates[j][0][1]){
                        window.alert("Ship Collision");
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'right'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]+i == this.shipCoordinates[j][0][0] && value[1] == this.shipCoordinates[j][0][1]){
                        window.alert("Ship Collision");
                        collision = true;
                    }
                }
            }
        }
        else if(direction == 'left'){
            for(let i = 0; i < length; i++){
                for(let j = 0; j < this.shipCoordinates.length; j++){
                    if(value[0]-i == this.shipCoordinates[j][0][0] && value[1] == this.shipCoordinates[j][0][1]){
                        window.alert("Ship Collision");
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
            //Should have an event notification to show
            //either hit or miss.
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

class Player{
    constructor(playerName){
        this.playerName = playerName;
        this.playerGameboard = new Gameboard(10,playerName);
    };
    /*For now
    just assume that the opponent is the computer. In the
    future it can be modified for two players.***
    */
    placePlayerShip(shipType,coordinate,direction){
        this.playerGameboard.setCurrentShip(shipType);
        this.playerGameboard.placeShip(coordinate,direction);
    };
}

//const gameboard = new Gameboard(10,"computer");
//gameboard.setCurrentShip("carrier");
//console.log(gameboard.guesses);
//module.exports = gameboard;
/*
Things left to do on the project.

**Disable drag/drop during game loop.**
3. Create the game loop. 
4. Add a JS file to handle the CSS changes made by the
game loop.
5. Make sure everything is hooked up; test.

I'm also having trouble getting the drag code to work in
the dist bundle. All in this 'todo' list applies to the
code in src. I just merged 'drag' and 'index' because
getting the import/export to work was too complicated and
wasn't working no matter what I did. Seems to be working
fine after the merge. Will have to look into this more
later because having everything in one file will be
messy.
*/

let shipsPlacement = [];
let pivotPoint = '';

function dragstartHandler(ev) {
    //Add the target element's ID to the data 
    //transfer object.
    ev.dataTransfer.setData('text',ev.target.id);
    ev.dataTransfer.effectAllowed ="move";
    if(ev.target.id == 'carrier'){
        pivotPoint = '10%';
    }
    else if(ev.target.id == 'battleship'){
        pivotPoint = '12.5%';
    }
    if(ev.target.id == 'destroyer' || ev.target.id == 'submarine'){
        pivotPoint = '16.65%';
    }
    else if(ev.target.id == 'ptBoat'){
        pivotPoint = '25%';
    }
}

function setDirection(direction,ev) {
    const data = ev.dataTransfer.getData('text');
    if(direction == 'up'){
        document.getElementById(data).style.transformOrigin =  `${pivotPoint} center`;
        document.getElementById(data).style.transform = 'rotateZ(-90deg)';             }
    else if(direction == 'down'){
        document.getElementById(data).style.transformOrigin =  `${pivotPoint} center`;
        document.getElementById(data).style.transform = 'rotateZ(90deg)';
    }
    else if(direction == 'left'){
        document.getElementById(data).style.transformOrigin =  `${pivotPoint} center`;
        document.getElementById(data).style.transform = 'rotateY(180deg)';
    }
    else if(direction == 'right'){
        document.getElementById(data).style.transformOrigin =  `${pivotPoint} center`;
        document.getElementById(data).style.transform = 'rotateY(0deg)';
    }
    else {
        window.alert("I said choose either up, down, left, or right. Don't be stupid. Go type one of the options I gave you.");
        return getDirection(ev);
    }
}

function checkDups(shipInfo){
    for(let i = 0; i < shipsPlacement.length; i++) {
        if(shipInfo[0] == shipsPlacement[i][0]) {
            shipsPlacement[i] = shipInfo;
            return true;
        }
    }
    return false;
}

function getCoordinates(targetId) {
    const square = targetId.id;
    const regex = /([0-9])+/g;
    const regexMatch = square.match(regex);
    const coordinates = [Number(regexMatch[0]),Number(regexMatch[1])];
    return coordinates;
}

function getDirection(ev) {
    const direction = prompt("Pick your ship's orientation (up, down, left, right).");
    setDirection(direction,ev);
    return direction;
}

function dragoverHandler(ev) {
    ev.preventDefault();
    //put square highlight here.
    ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    const direction = getDirection(ev);
    const coordinates = getCoordinates(ev.target); 
    shipInfo = [data,coordinates,direction];
    if(checkDups(shipInfo) == false) {
        shipsPlacement.push(shipInfo);
    }
} ;

const player = new Player("player");
const div = document.querySelector('div');
div.addEventListener('click', event => {
    const target = event.target;
    if(target.tagName == 'BUTTON') {
        if(target.innerText == 'START'){
            for(let i = 0; i < shipsPlacement.length; i++) {
                player.placePlayerShip(shipsPlacement[i][0],shipsPlacement[i][1],shipsPlacement[i][2]);
            }  
        };
        console.log(player.playerGameboard.shipCoordinates);
    };
});
