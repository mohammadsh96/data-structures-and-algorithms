class Graph {
  constructor() {
      this.vertices = [];
      this.adjacent = {};
      this.edges = 0;
  }

  addVertex(v) {
      this.vertices.push(v);
      this.adjacent[v] = [];
  }

  addEdge(v, w) {
      this.adjacent[v].push(w);
      this.adjacent[w].push(v);
      this.edges++;
  }
  bfs(goal, root = this.vertices[0]) {
    let adj = this.adjacent;

    const queue = [];
    queue.push(root);

    const discovered = [];
    discovered[root] = true;

    while(queue.length) {
        let v = queue.shift();
        console.log(v);

        if (v === goal) {
            return true;
        }

        for (let i = 0; i < adj[v].length; i++) {
            if (!discovered[adj[v][i]]) {
                discovered[adj[v][i]] = true;
                queue.push(adj[v][i]);
            }
        }
    }

    return false;
}
}
// class Graph {
//   constructor() {
//       this.adjacencyList = new Map();
//   }

//   addVertex(vertex) {
//       this.adjacencyList.set(vertex, []);
//   }
//   addDirectedEdge(start, end, weight) {
//       if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
//           console.log('VERTEX DOES NOT EXIST');
//           return;
//       }
//       else {
//           const adjacentVertex = this.adjacencyList.get(start);
//           adjacentVertex.push(new Edge(end, weight));

//           // let edge = new Edge(end, weight);
//           // adjacentVertex.push(edge);
//       }

//   }

// }
const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("B","C");
g.addEdge("B","D");
g.addEdge("C","D");
g.addEdge("C","E");
g.addEdge("D","F");
g.addEdge("F","G");

// console.log(g);
// for (const [k, v] of myGraph.adjacencyList.entries()) {
//   console.log('k = ', k, 'v = ', v);;

g.bfs()
