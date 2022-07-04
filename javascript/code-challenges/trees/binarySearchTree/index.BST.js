'use strict"';

const BST =require("./binary-search-tree")

let BB =new BST();

 BB.Add(2);
 BB.Add(4);
 BB.Add(11);
 BB.Add(53);
 BB.Add(1);
 BB.Add(4);
 BB.Add(2);
 BB.Add(18);
BB.Add(4);


console.log(BB.Contains(4));
console.log(BB.Contains(56));
console.log(BB.Contains(18))


