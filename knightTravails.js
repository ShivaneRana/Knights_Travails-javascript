function knightMoves(origin,target){

    if(str(origin) === str(target)){
        throw new Error("Origin and target are the same");
    }

    if(!Array.isArray(origin) || !Array.isArray(target)){
        throw new Error("Only arrays are allowed");
    }


    if(origin.length !== 2 || target.length !== 2){
        throw new Error("Array length is not optimal");
    }

    const queue = [origin];             //store all moves address
    const visited = new Set();          //keep track of all the visited node
    let steps = 0;                      //keep track of number of steps taken
    const path = {};
    path[str(origin)] = null;           //origin node has no parent
    while(queue.length > 0){
    const size = queue.length;
        for(let i = 0;i < size;i++){
            const node = queue.shift();
            visited.add(str(node));

            const validMoves = findValidMoves(node);
            
            for(let move of validMoves){
                if(str(move) === str(target)){
                    steps++;
                    path[str(move)] = str(node);
                    let current = str(move);
                    const temp = [];
                    while(current !== null){
                        temp.push(current);
                        current = path[current];
                    }
                    console.log(temp.reverse());
                    console.log(`${target} found in ${steps} steps`);
                    return;
                }
                
                if(!visited.has(str(move))){
                    queue.push(move);
                    visited.add(str(move));
                    path[str(move)] = str(node);
                }
            }
        }
        steps++;
    }
}

// all the valid moves that a knight can move
//  you can either + or - the points
//  + leads to right for column 
//  - leads to left for column
//  can only perform one at a time
//  + leads to down for row
//  - leads to up for row
//  the sequence of these moves also matters
function findValidMoves(arr1){
    const moves = [
        //[row, column]
        [1,-2],
        [1,2],
        [2,-1],
        [2,1],
        [-1,-2],
        [-1,2],
        [-2,1],
        [-2,-1],
    ];

    let posx = arr1[0]; //row
    let posy = arr1[1]; //column
    const result = [];  //array containing all the valid moves

    for(let move of moves){
        const [x,y] = move; //assign x and y various moves
        const newX = posx + x;
        const newY = posy + y;

        if(newX >= 0 && newX < 8 && newY < 8 && newY >= 0){
            result.push([newX,newY]);
        }
    }

    return result;
}

function str(value){
    return `${value[0]},${value[1]}`;
}

knightMoves([0,0],[7,5]);
