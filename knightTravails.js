const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
    ["PHX","LAX"],
    ["PHX","JFK"],
    ["JFK","OKC"],
    ["JFK","HEL"],
    ["JFK","LOS"],
    ["MEX","LAX"],
    ["MEX","BKK"],
    ["MEX","LIM"],
    ["MEX","EZE"],
    ["LIM","BKK"],
]

const graph = new Map();

//add key to the graph
function addVertext(value){
    graph.set(value,new Set());
}

//add edge to graph
function addEdge(origin,target){
    if(graph.has(origin) && graph.has(target)){
        graph.get(origin).add(target);
        graph.get(target).add(origin);
    }
}

//add all the airport as vertices
airports.forEach(addVertext);

//add all the content in the vertex as edges
routes.forEach(route => addEdge(...route));

// this was quite easy this time around
function bfs(start){
    const queue = [start];
    const visited = new Set();

    while(queue.length > 0){
        const airport = queue.shift();  //dequeu first element in the queue
        visited.add(airport);   //add the visited airport to avoid revisiting them 
        const destinations = graph.get(airport); //this will retrieve the set
        console.log(airport)

        for(let destination of destinations){
            if(destination === "BKK"){
                console.log(`${airport} has connection with BKK`);
            }

            if(!visited.has(destination)){
                queue.push(destination);
                visited.add(destination);
            }
        }
    }
}

//dfs
dfs

console.log(graph);
