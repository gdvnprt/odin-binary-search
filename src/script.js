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


    const deleteItem = (val) => {
        //deletes a value from the tree
        //traverse tree
        let pointer = root;
        while (val > pointer.data && pointer.right) {
            pointer = pointer.right;
        };
        while (val < pointer.left && pointer.left) {
            pointer = pointer.left;
        };

        //remove value
        //need to deal with multiple cases - if node has children or not
        if (pointer.data !== val) {
            return null;
        }
        if (pointer.left.data === val && !(pointer.left.left) && !(pointer.left.right)) {
            pointer.left = null;
            return "Complete";
        };
        if (pointer.right.data === val && !(pointer.right.left) && !(pointer.right.right)) {
            pointer.right = null;
            return "Complete";
        };
        if (pointer.left.data === val && pointer.left.left && !(pointer.left.right)) {
            let newLeft = pointer.left.left;
            pointer.left = newLeft;
            return "Complete";
        };
        if (pointer.right.data === val && pointer.right.left && !(pointer.right.right)) {
            let newRight = pointer.right.left;
            pointer.left = newRight;
            return "Complete";
        };
        if (pointer.left.data === val && pointer.left.right && !(pointer.left.left)) {
            let newLeft = pointer.left.right;
            pointer.left = newLeft;
            return "Complete";
        };
        if (pointer.right.data === val && pointer.right.right && !(pointer.right.left)) {
            let newRight = pointer.right.right;
            pointer.left = newRight;
            return "Complete";
        };
            //need to fix
        if (pointer.data === val && pointer.left && pointer.right) {
            //right child takes place of deleted node
            //left children become left children of new node in place
            //what to do with current left children?
            pointer = null;
            return "Complete";
        };

        //check and rebalance tree
        if (!(isBalanced(root))) {
            rebalance(root);
        };
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
    };

    const isBalanced = () => {
        //checks if the tree is balanced
        //balanced tree = difference between heights of left and right subtree of every node is not more than 1
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

