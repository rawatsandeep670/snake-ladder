import { LADDER_POSITION, SNAKE_POSITION } from "../constants/commonConstant";

export function checkStackIsExist(index) {
    const findIndex = SNAKE_POSITION.findIndex(val => {
        const from = val[0];

        return index === from;
    })

    return findIndex !== -1 ? SNAKE_POSITION[findIndex][1] : findIndex;
}

export function checkLadderIsExist(index) {
    const findIndex = LADDER_POSITION.findIndex(val => {
        const from = val[0];

        return index === from;
    })

    return findIndex !== -1 ? LADDER_POSITION[findIndex][1] : findIndex;
}

/**
 * Contructor function.
 * 
 * @param {*} id 
 * @param {*} color 
 * @param {*} position 
 * @param {*} top 
 * @param {*} left 
 */
function Player (id, color, position = 0, top = 0, left = 0) {
    this.id = id;
    this.color = color;
    this.position = position;
    this.top = top;
    this.left = left;

    this.updatePositionBy = function(count) {
        const newPosition = this.position + count;

        if (newPosition <= 100) {
            const snakeIndex = checkStackIsExist(newPosition);
            const ladderIndex = checkLadderIsExist(newPosition);

            if (snakeIndex !== -1) {
                this.position = snakeIndex;
            }
            
            if (ladderIndex !== -1) {
                this.position = ladderIndex;
            }
            
            if (ladderIndex === -1 && snakeIndex === -1) {
                this.position = newPosition;
            }
        }
    }

    this.getPosition = function() {
        return this.position;
    }
    this.updateTop = function(top) {
        this.top = top;
    }
    this.updateLeft = function(left) {
        this.left = left;
    }
}

var playerList = [];
export function generatePlayers(noOfPlayer) {
    for (var count = 0; count < noOfPlayer; count++) {
        playerList.push(new Player(count, "green", 0, count * 40, 0))
    }
};

export function getPlayerList() {
    if (playerList.length === 0) {
        throw new Error("Player list not generated yet!");
    }

    return playerList;
}

