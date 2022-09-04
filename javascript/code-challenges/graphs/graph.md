# challenge :  Graph Traversal(BFS)

## challenge summary :

- With Breadth-First Search, we search all of the edges connected to a vertex before moving on to search the edges of the connected vertices.

## code :
 [go to code](./graph.js)
```js

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
```

## approach and efficiency :

- big O :
- time complexity : O(V) where v is the number of vertices
- space complexity : O(V) where v is the number of vertices

