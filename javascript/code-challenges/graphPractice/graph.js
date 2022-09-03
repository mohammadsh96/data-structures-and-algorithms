// 1.  nodes list + edge list
const nodes = ["A", "B", "C", "D", "E", "F"];
const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "E"],
  ["B", "F"],
  ["C", "D"],
  ["D", "E"],
  ["D", "F"],
];
//time to fined adjacent nodes : O(e)
//time to check if two nodes are connected : O(e)
//space : O(n+e)

//operations :
//1.find adjacent node :
//2.isConnected :
const findAdjacentNode = function (node) {
  //loop through edges array
  // is my node in the connection >?
  // if true : push the other node in the pair into adjacent node array
  // if false : keep looping
  const adjacentNodes = [];
  for (let edge of edges) {
    // edge = ['A,'B']
    // we should find its index

    const nodeIndex = edge.indexOf(node); // if its there >> 0 or 1  , if not there >> -1
    if (nodeIndex > -1) {
      let adjacentNode = nodeIndex === 0 ? edge[1] : edge[0];
      adjacentNodes.push(adjacentNode);
    }
  }
  return adjacentNodes;
};

const isConnected = function (node1, node2) {
  // we will use javascript 'some' method because it wil stop we find a truthy

  return edges.some((edge) => {
    return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
  });
};

console.log(findAdjacentNode('A'));

console.log(isConnected("A", "F"));



// 2.  Adjacency Matrix    

// time to find adjacent nodes O(n) 
// time to check if two nodes are connected  : O(1)
//space : O(n^2) because it's growth exponentially 

//we will  use the same nodes array in the previous graph
// and new array called adjacencyMatrix contains the connections

const adjacencyMatrix = [
[0,1,1,0,0,0],
[1,0,0,0,1,1],
[1,0,0,1,0,0],
[0,0,1,0,1,1],
[0,1,0,1,0,0],
[0,1,0,1,0,0],
];

//we will need to assign index value for each node to make it easy to loop
const nodesIndex ={
'A':0,
'B':1,
'C':2,
'D':3,
'E':4,
'F':5,
}

// find adjacency nodes 
const findAdjacencies =function (node){

const AdjacencyNodes =[]
//get the row in the matrix 
//loop through that row to find where is number 1  : that mean a connection.
// if there is a 1 , push that node 
for(let i=0; i<nodes.length; i++){
let nodeVertex  = nodesIndex[node]  // that shoud give us the number or row that we should use 
if (adjacencyMatrix[nodeVertex][i]===1){ 
  
  AdjacencyNodes.push(nodes[i])  //this to push the exact node from the nodes array to the empty array 
} // that should give us the exact row that we need 


}


return AdjacencyNodes ;

}

const isConnecteD = function (node1 ,node2){

const nodeindex1 = nodesIndex[node1];
const nodeindex2 =nodesIndex[node2];

return !! adjacencyMatrix[nodeindex1][nodeindex2] // this should return 1 or 0  and by using !! : 1 will be ture and  0 will be false 

}
console.log(findAdjacencies('F'));
console.log(isConnecteD('C', 'D'));





// 3 : Adjacency List  : 
// time to find adjacent nodes : O(1) because its stored in one array no need to loop 
//time to check if two node are connected: O(log n) if each adjacent row is sorted
//space : O(e) 



class Node {
  constructor(value){

    this.value=value
    this.edgesList=[];
  
  }

connect(node){

  this.edgesList.push(node);
  node.edgesList.push(this)
}

getAdjacentNode(){

  return this.edgesList.map(node => node.value)
}

isConnected(node){
 return this.edgesList.map(edge=>edge.value).indexOf(node.value) > -1
}
}
class Graph{

  constructor(nodes){
    this.nodes=[...nodes]
   }

   addtwoGraph(nodes){
this.nodes.push([...nodes])

   }
}

const nodeA =new Node('A')
const nodeB =new Node('B')
const nodeC =new Node('C')
const nodeD =new Node('D')
const nodeE =new Node('E')
const nodeF =new Node('F')
const graph =new Graph([nodeA,nodeB,nodeC,nodeD,nodeE,nodeF])

nodeA.connect(nodeB)
nodeA.connect(nodeC)
nodeB.connect(nodeF)
nodeB.connect(nodeE)
nodeC.connect(nodeD)
nodeF.connect(nodeD)
nodeE.connect(nodeD)

// console.log(graph);
// console.log(nodeA);

for(let node of graph.nodes){
  console.log(`node ${node.value}`)
  for(let connectedNode of node.edgesList){
    console.log(`node ${node.value} connected to ${connectedNode.value}`);
  }
}


console.log(nodeA.getAdjacentNode())
console.log(nodeB.getAdjacentNode())
console.log(nodeC.getAdjacentNode())
console.log(nodeD.getAdjacentNode())
console.log(nodeE.getAdjacentNode())
console.log(nodeF.getAdjacentNode())
console.log(nodeA.isConnected(nodeD))
