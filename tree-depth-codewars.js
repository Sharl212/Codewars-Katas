function recordDepth(tree, depth=0) {
    if(!tree || tree.constructor !== Object) return null;
    tree.depth = depth;
    for(let i in tree)
       recordDepth(tree[i], depth+1);
    return tree;
  }

let tree = { a: 1, b: 2, c: { d: 3, l: 5 }, n: { i: 7, g: 8 } };
console.log(recordDepth(tree)) // { a: 1, b: 2, c: { d: 3, depth: 1 }, depth: 0 };