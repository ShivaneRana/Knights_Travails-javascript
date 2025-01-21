const graph = new Map();


function addVertex(node){
    if(!graph.get(node)){
        graph.set(node,[]);
    }
}

function addEdge(node,target){
    if(graph.get(node) && graph.get(target)){
        if(!graph.get(node).includes(target)){
            graph.get(node).push(target);
        }
        
        if(!graph.get(target).includes(node)){
            graph.get(target).push(node);   
        }   
    }
}

function removeEdge(node,target){
    if(graph.has(node)){
        graph.set(node, graph.get(node).filter(v => v !== target));
    }
    
    if(graph.has(target)){
        graph.set(target, graph.get(target).filter(v => v !== node));
    }
}

function print(){
    for(let [key,value] of graph){
        console.log(`${key} -> ${value}`);
    }
}

function removeVertex(node){
    for(let [key,value] of graph){
        graph.set(key,value.filter(v => v !== node));
    }
    graph.delete(node);
}

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

airports.forEach(item => {
    addVertex(item);
    addEdge(item,)
})


airports.forEach(addVertex);
routes.forEach(route => addEdge(...route))



function bfs(root){
    const queue = [root];
    const visited = new Set();

    while(queue.length > 0){

        let airport = queue.shift();
        visited.add(airport);
        const destinations = graph.get(airport);

        for(let destination of destinations){
            
        }

    }
}

console.log(graph);
//bfs("PHX");