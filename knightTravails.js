//  algorithm for finding the shortest path in the chessboard~
//  get a starting position and end position
//  create variable for steps taken, queue and visited node
//  insert starting position in the queue
//  run a while loop until queue length is equal to 0 
//      
//      check all the valid positions
//      check if valid position equal to end position and return
//      insert all the valid position into the queue if not already visited
//      increment steps
//      pop the first element in the queue
//  return all the node visited  to reach the end position


function knightMoves(origin,target){
    if(!Array.isArray(origin) || !Array.isArray(target)){
        throw new Error("Only arrays are allowed");
    }

    if(origin.length !== 2 || target.length !== 2){
        throw new Error("Array length is not optimal");
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
            //x,y(row, column)
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
        let posy = arr1[1];  //column
        const result = [];
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
}
