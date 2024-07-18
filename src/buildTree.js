import Node from './node.js';
import sortArr from './sort.js';

export default function buildTree(arr) {
    //sort the array
    const sortedArray = sortArr(arr);

    return sortedToBST(sortedArray);
};

//recursion helper
const sortedToBST = (arr, start, end) => {
    //base case
    if (start > end) {
        return null;
    }
    //find the middle element and make it the root
    let mid = parseInt((start + end) / 2);
    let node = new Node(arr[mid]);

    //recursively construct left and right subtrees
    node.left = sortedToBST(arr, arr[0], arr[mid - 1]);
    node.right = sortedToBST(arr, arr[mid + 1], arr[arr.length - 1]);

    return node;
};
