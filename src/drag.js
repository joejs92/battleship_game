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
export {shipsPlacement};