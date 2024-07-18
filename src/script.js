import Node from './node.js';
import sortArr from './sort.js';
import buildTree from './buildTree.js';
import prettyPrint from './visualizer.js';

const Tree = (arr) => {
    const root = buildTree(arr);
    
    const visualizer = prettyPrint(root);

    const insert = (val) => {
        //inserts a value into the tree
        let pointer = root;
        //traverse tree
        while (val > pointer.data && pointer.right) {
            pointer = pointer.right;
        };
        while (val < pointer.left && pointer.left) {
            pointer = pointer.left;
        };
        //make new node in roughly correct spot
        if (val > pointer.data && pointer.right === null) {
            pointer.right = new Node(val);
        };
        if (val < pointer.data && pointer.left === null) {
            pointer.left = new Node(val);
        };

        //check and rebalance tree
        if (!(isBalanced(root))) {
            rebalance(root);
        };
    };


    const deleteItem = (val, callback) => {
        //deletes a value from the tree
        //traverse tree
        let pointer = callback || root;
        while (val > pointer.data && pointer.right) {
            pointer = pointer.right;
        };
        while (val < pointer.left && pointer.left) {
            pointer = pointer.left;
        };
        //remove value
        //need to deal with multiple cases - if node has children or not
        if (pointer === null) {
            return pointer
        };

        if (val === pointer.data){
            if (pointer.left === null && pointer.right === null){
                return null
            }else if (pointer.left === null) {
                return pointer.right;
            }else if (pointer.right === null) {
                return pointer.left;
            }else {
                //node with 2 children
                //find inorder successor
                //smallest in right subtree
                let temp = findSmallestNode(pointer.right);
                pointer.data = temp.data;
                deleteItem(pointer.data, pointer.right);
            };
        };
        
        //check and rebalance tree
        if (!(isBalanced(root))) {
            rebalance(root);
        };
    };

    //helper function to find smallest node
    const findSmallestNode = (node) => {
        while(!node.left === null) {
            node = node.left;
        };
        return node;
    };

    const find = (val) => {
        //returns the node with the given value
        //traverse tree
        let pointer = root;
        while (val > pointer.data && pointer.right) {
            pointer = pointer.right;
        };
        while (val < pointer.left && pointer.left) {
            pointer = pointer.left;
        };
        //return value
        if (val === pointer.data) {
            return pointer;
        } else {
            return null;
        };
    };

    const levelOrder = (callback) => {
        //callback optional
        //traverse the tree in breadth-first level order and provide each node as an argument to the callback
        let start = callback || root;
        let queue = [start];
        let result = [];
        if (callback === null) {
            return
        };
        while (queue[0]) {
            result.push(queue[0].data);
            queue.push(queue[0].left);
            queue.push(queue[0].right);
        };
        return result;
    };

    const inOrder = (callback) => {
        //should traverse the tree in depth-first order and yield each node to the provided callback
        //returns an array of values if no callback is given as argument
        let pointer =  callback || root;
        let inOrderArr = [];
        if (pointer === null) {
            return;
        };
        inOrder(pointer.left);
        inOrderArr.push(pointer.data);
        inOrder(pointer.right)
        return inOrderArr;
    };

    const preOrder = (callback) => {
        //should traverse the tree in depth-first order and yield each node to the provided callback
        //returns an array of values if no callback is given as argument
        let pointer =  callback || root;
        let preOrderArr = [];
        if (pointer === null) {
            return;
        };
        preOrder(pointer.left);
        preOrder(pointer.right)
        preOrderArr.push(pointer.data);
        return preOrderArr;
    };

    const postOrder = (callback) => {
        //should traverse the tree in depth-first order and yield each node to the provided callback
        //returns an array of values if no callback is given as argument
        let pointer =  callback || root;
        let postOrderArr = [];
        if (pointer === null) {
            return;
        };
        postOrderArr.push(pointer.data);
        postOrder(pointer.left);
        postOrder(pointer.right)
        return postOrderArr;
    };

    const height = (node) => {
        //returns given node's height
        //height = number of edges in longest path from a given node to a leaf node
        if (node === null) {
            return 0;
        };
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        if (leftHeight > rightHeight) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1;
        };
    };

    const depth = (node) => {
        //returns given node's depth
        //depth = number of edges in the path from a given node to the tree’s root node
        let dpth = 0;
        let pointer = root;
        while (node.data > pointer.data && pointer.right) {
            pointer = pointer.right;
            dpth++;
        };
        while (node.data < pointer.data && pointer.left) {
            pointer = pointer.left;
            dpth++
        };
        //return depth value when matching node found
        if (pointer.data === node.data) {
            return `Depth = ${dpth}`;
        };
    };

    const isBalanced = () => {
        //checks if the tree is balanced
        //balanced tree = difference between heights of left and right subtree of every node is not more than 1
        const leftHeight = height(root.left);
        const rightHeight = height(root.right);
        const diff = Math.abs(leftHeight - rightHeight);

        if (diff < 2) {
            return true;
        } else {
            return false;
        };
    };

    const rebalance = () => {
        //rebalances an unbalanced tree
        //traverses tree and generates an array
        let newArr = inOrder();
        //feeds that array into buildTree
        root = buildTree(newArr);
    };

    return {root, visualizer, insert, deleteItem, find, levelOrder, inOrder, preOrder, postOrder, height, depth, isBalanced, rebalance};
};

