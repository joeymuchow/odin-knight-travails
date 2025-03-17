// The chess board is a graph that goes from 0,0 to 7,7
// Which means coordinates x,y cannot be less than 0 or greater than 7

// The knight can only move two spaces on x axis and one space on y axis
// or move one spaces on x axis and two spaces on y axis
// It cannot go outside the chess board, so at 0,0, you cannot go to the left on the x axis or down on the y axis

// knightMoves
// takes two parameters
// starting space - [x,y] - array representing the space on the board the knight starts at
// ending space - [i,j] - array representing the space on the board the knight travels to
// The function will print out how many moves it takes to get to the ending space, this will be the shortest path or tied for shortest
// It will also print the starting space, each space the knight lands on, and finally the ending space


const knightMoves = (start, end) => {
    const moves = calculatePath(start, end);

    console.log(`You made it in ${moves.length -1} moves! Here is your path:`);
    for (const move of moves) {
        console.log(move);
    }
}

const validMoves = (start) => {
    const validMoves = [];
    const possibleMoves = [
        [1,2],
        [2,1],
        [1,-2],
        [2,-1],
        [-1,-2],
        [-2,-1],
        [-1,2],
        [-2,1]
    ]
    
    for (const move of possibleMoves) {
        const x = start[0] + move[0];
        const y = start[1] + move[1];
        const validX = x >= 0 && x <= 7;
        const validY = y >= 0 && y <= 7;
        if (validX && validY) {
            validMoves.push([x,y]);
        }
    }

    return validMoves;
}

// search function that calculates path to ending space
const calculatePath = (start, end) => {
    let shortestPath;
    const queue = [];

    queue.push({
        move: start,
        path: []
    });

    while (queue.length) {
        const move = queue.shift();
        
        if (move.move[0] === end[0] && move.move[1] === end[1]) {
            shortestPath = [...move.path, move.move];
            break;
        }

        const nextMoves = validMoves(move.move);
        for (const nextMove of nextMoves) {
            queue.push({
                move: nextMove,
                path: [...move.path, move.move]
            });
        }
    }
    
    return shortestPath;
}

knightMoves([7,7],[3,3]);
knightMoves([0,7],[6,2]);