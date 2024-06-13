import Node from './node.js';
import sortArr from './sort.js';
import buildTree from './buildTree.js';
import prettyPrint from './visualizer.js';

const Tree = (arr) => {
    const root = buildTree(arr);
    
    const visualizer = prettyPrint(root);

    const insert = (val) => {
        //inserts a value into the tree
    };

    const deleteItem = (val) => {
        //deletes a value from the tree
        //need to deal with multiple cases - if node has children or not
    };

    const find = (val) => {
        //returns the node with the given value
    };

    const inOrder = (callback) => {
        //should traverse the tree in depth-first order and yield each node to the provided callback
        //returns an array of values if no callback is given as argument
    };

    const preOrder = (callback) => {
        //should traverse the tree in depth-first order and yield each node to the provided callback
        //returns an array of values if no callback is given as argument
    };

    const postOrder = (callback) => {
        //should traverse the tree in depth-first order and yield each node to the provided callback
        //returns an array of values if no callback is given as argument
    };

    const height = (node) => {
        //returns given node's height
        //height = number of edges in longest path from a given node to a leaf node
    };

    const depth = (node) => {
        //returns given node's depth
        //height = number of edges in longest path from a given node to the tree's root node
    };

    const isBalanced = () => {
        //checks if the tree is balanced
        //balanced tree = difference between heights of left and right subtree of every node is not more than 1
    };

    const rebalance = () => {
        //rebalances an unbalnced tree
        //traverses tree and generates an array
        //feeds that array into buildTree
    };

    return {root, visualizer, insert, deleteItem, find, inOrder, preOrder, postOrder, height, depth, isBalanced, rebalance};
};