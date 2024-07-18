/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildTree.js":
/*!**************************!*\
  !*** ./src/buildTree.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildTree)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./src/node.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort.js */ "./src/sort.js");



function buildTree(arr) {
    //sort the array
    const sortedArray = (0,_sort_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr);

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
    let node = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"](arr[mid]);

    //recursively construct left and right subtrees
    node.left = sortedToBST(arr, arr[0], arr[mid - 1]);
    node.right = sortedToBST(arr, arr[mid + 1], arr[arr.length - 1]);

    return node;
};


/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node = (dat) => {
    let data = dat | null;
    let left = null;
    let right = null;
    return {data, left, right};
});

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortArr)
/* harmony export */ });
function sortArr(array) {
    //sort array
    let sorted = array.sort(function(a, b){return a - b});
    //remove duplicates
    let i = 0;
    while (i < sorted.length - 1) {
        if(sorted[i] === sorted[i + 1]) {
            sorted.splice(i, 1);
            i--;
        };
        i++;
    };
    return sorted;
};

/***/ }),

/***/ "./src/visualizer.js":
/*!***************************!*\
  !*** ./src/visualizer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prettyPrint)
/* harmony export */ });
function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./src/node.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort.js */ "./src/sort.js");
/* harmony import */ var _buildTree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildTree.js */ "./src/buildTree.js");
/* harmony import */ var _visualizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualizer.js */ "./src/visualizer.js");





const Tree = (arr) => {
    const root = (0,_buildTree_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr);
    
    const visualizer = (0,_visualizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(root);

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
            pointer.right = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"](val);
        };
        if (val < pointer.data && pointer.left === null) {
            pointer.left = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"](val);
        };

        //check and rebalance tree
        if (!(isBalanced(root))) {
            rebalance(root);
        };
    };


    const deleteItem = (val, parent) => {
        //deletes a value from the tree
        //traverse tree
        let pointer = parent | root;
        let gx = null;
        while (val > pointer.data && pointer.right) {
            gx = pointer;
            pointer = pointer.right;
        };
        while (val < pointer.left && pointer.left) {
            gx = pointer;
            pointer = pointer.left;
        };
        //remove value
        //need to deal with multiple cases - if node has children or not
        //if (pointer === null) {
        //    return null;
        //};

        if (val === pointer.data){
            if (pointer.left === null && pointer.right === null){
                if (gx.left.data = pointer.data) {
                    gx.left = null;
                } else {
                    gx.right = null;
                };
            }else if (pointer.left === null) {
                pointer.data = pointer.right.data;
                pointer.right = null;
            }else if (pointer.right === null) {
                pointer.data = pointer.left.data;
                pointer.left = null;
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
        root = (0,_buildTree_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newArr);
    };

    return {root, visualizer, insert, deleteItem, find, levelOrder, inOrder, preOrder, postOrder, height, depth, isBalanced, rebalance};
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LjJhNjk5ZTRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRzs7QUFFakI7QUFDZjtBQUNBLHdCQUF3QixvREFBTzs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDTGM7QUFDZjtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNHO0FBQ087QUFDRzs7QUFFMUM7QUFDQSxpQkFBaUIseURBQVM7QUFDMUI7QUFDQSx1QkFBdUIsMERBQVc7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBSTtBQUNwQztBQUNBO0FBQ0EsK0JBQStCLGdEQUFJO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUFTO0FBQ3hCOztBQUVBLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC8uL3NyYy9idWlsZFRyZWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL25vZGUuanMnO1xuaW1wb3J0IHNvcnRBcnIgZnJvbSAnLi9zb3J0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRUcmVlKGFycikge1xuICAgIC8vc29ydCB0aGUgYXJyYXlcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IHNvcnRBcnIoYXJyKTtcblxuICAgIHJldHVybiBzb3J0ZWRUb0JTVChzb3J0ZWRBcnJheSk7XG59O1xuXG4vL3JlY3Vyc2lvbiBoZWxwZXJcbmNvbnN0IHNvcnRlZFRvQlNUID0gKGFyciwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIC8vYmFzZSBjYXNlXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvL2ZpbmQgdGhlIG1pZGRsZSBlbGVtZW50IGFuZCBtYWtlIGl0IHRoZSByb290XG4gICAgbGV0IG1pZCA9IHBhcnNlSW50KChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGFyclttaWRdKTtcblxuICAgIC8vcmVjdXJzaXZlbHkgY29uc3RydWN0IGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWVzXG4gICAgbm9kZS5sZWZ0ID0gc29ydGVkVG9CU1QoYXJyLCBhcnJbMF0sIGFyclttaWQgLSAxXSk7XG4gICAgbm9kZS5yaWdodCA9IHNvcnRlZFRvQlNUKGFyciwgYXJyW21pZCArIDFdLCBhcnJbYXJyLmxlbmd0aCAtIDFdKTtcblxuICAgIHJldHVybiBub2RlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IE5vZGUgPSAoZGF0KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBkYXQgfCBudWxsO1xuICAgIGxldCBsZWZ0ID0gbnVsbDtcbiAgICBsZXQgcmlnaHQgPSBudWxsO1xuICAgIHJldHVybiB7ZGF0YSwgbGVmdCwgcmlnaHR9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0QXJyKGFycmF5KSB7XG4gICAgLy9zb3J0IGFycmF5XG4gICAgbGV0IHNvcnRlZCA9IGFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYil7cmV0dXJuIGEgLSBifSk7XG4gICAgLy9yZW1vdmUgZHVwbGljYXRlc1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHNvcnRlZC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmKHNvcnRlZFtpXSA9PT0gc29ydGVkW2kgKyAxXSkge1xuICAgICAgICAgICAgc29ydGVkLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfTtcbiAgICAgICAgaSsrO1xuICAgIH07XG4gICAgcmV0dXJuIHNvcnRlZDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldHR5UHJpbnQobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTm9kZSBmcm9tICcuL25vZGUuanMnO1xuaW1wb3J0IHNvcnRBcnIgZnJvbSAnLi9zb3J0LmpzJztcbmltcG9ydCBidWlsZFRyZWUgZnJvbSAnLi9idWlsZFRyZWUuanMnO1xuaW1wb3J0IHByZXR0eVByaW50IGZyb20gJy4vdmlzdWFsaXplci5qcyc7XG5cbmNvbnN0IFRyZWUgPSAoYXJyKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGJ1aWxkVHJlZShhcnIpO1xuICAgIFxuICAgIGNvbnN0IHZpc3VhbGl6ZXIgPSBwcmV0dHlQcmludChyb290KTtcblxuICAgIGNvbnN0IGluc2VydCA9ICh2YWwpID0+IHtcbiAgICAgICAgLy9pbnNlcnRzIGEgdmFsdWUgaW50byB0aGUgdHJlZVxuICAgICAgICBsZXQgcG9pbnRlciA9IHJvb3Q7XG4gICAgICAgIC8vdHJhdmVyc2UgdHJlZVxuICAgICAgICB3aGlsZSAodmFsID4gcG9pbnRlci5kYXRhICYmIHBvaW50ZXIucmlnaHQpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLnJpZ2h0O1xuICAgICAgICB9O1xuICAgICAgICB3aGlsZSAodmFsIDwgcG9pbnRlci5sZWZ0ICYmIHBvaW50ZXIubGVmdCkge1xuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubGVmdDtcbiAgICAgICAgfTtcbiAgICAgICAgLy9tYWtlIG5ldyBub2RlIGluIHJvdWdobHkgY29ycmVjdCBzcG90XG4gICAgICAgIGlmICh2YWwgPiBwb2ludGVyLmRhdGEgJiYgcG9pbnRlci5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcG9pbnRlci5yaWdodCA9IG5ldyBOb2RlKHZhbCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2YWwgPCBwb2ludGVyLmRhdGEgJiYgcG9pbnRlci5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBwb2ludGVyLmxlZnQgPSBuZXcgTm9kZSh2YWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vY2hlY2sgYW5kIHJlYmFsYW5jZSB0cmVlXG4gICAgICAgIGlmICghKGlzQmFsYW5jZWQocm9vdCkpKSB7XG4gICAgICAgICAgICByZWJhbGFuY2Uocm9vdCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9ICh2YWwsIHBhcmVudCkgPT4ge1xuICAgICAgICAvL2RlbGV0ZXMgYSB2YWx1ZSBmcm9tIHRoZSB0cmVlXG4gICAgICAgIC8vdHJhdmVyc2UgdHJlZVxuICAgICAgICBsZXQgcG9pbnRlciA9IHBhcmVudCB8IHJvb3Q7XG4gICAgICAgIGxldCBneCA9IG51bGw7XG4gICAgICAgIHdoaWxlICh2YWwgPiBwb2ludGVyLmRhdGEgJiYgcG9pbnRlci5yaWdodCkge1xuICAgICAgICAgICAgZ3ggPSBwb2ludGVyO1xuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIucmlnaHQ7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlICh2YWwgPCBwb2ludGVyLmxlZnQgJiYgcG9pbnRlci5sZWZ0KSB7XG4gICAgICAgICAgICBneCA9IHBvaW50ZXI7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5sZWZ0O1xuICAgICAgICB9O1xuICAgICAgICAvL3JlbW92ZSB2YWx1ZVxuICAgICAgICAvL25lZWQgdG8gZGVhbCB3aXRoIG11bHRpcGxlIGNhc2VzIC0gaWYgbm9kZSBoYXMgY2hpbGRyZW4gb3Igbm90XG4gICAgICAgIC8vaWYgKHBvaW50ZXIgPT09IG51bGwpIHtcbiAgICAgICAgLy8gICAgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vfTtcblxuICAgICAgICBpZiAodmFsID09PSBwb2ludGVyLmRhdGEpe1xuICAgICAgICAgICAgaWYgKHBvaW50ZXIubGVmdCA9PT0gbnVsbCAmJiBwb2ludGVyLnJpZ2h0ID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICBpZiAoZ3gubGVmdC5kYXRhID0gcG9pbnRlci5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGd4LmxlZnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGd4LnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfWVsc2UgaWYgKHBvaW50ZXIubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBvaW50ZXIuZGF0YSA9IHBvaW50ZXIucmlnaHQuZGF0YTtcbiAgICAgICAgICAgICAgICBwb2ludGVyLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgIH1lbHNlIGlmIChwb2ludGVyLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci5kYXRhID0gcG9pbnRlci5sZWZ0LmRhdGE7XG4gICAgICAgICAgICAgICAgcG9pbnRlci5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAvL25vZGUgd2l0aCAyIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgLy9maW5kIGlub3JkZXIgc3VjY2Vzc29yXG4gICAgICAgICAgICAgICAgLy9zbWFsbGVzdCBpbiByaWdodCBzdWJ0cmVlXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBmaW5kU21hbGxlc3ROb2RlKHBvaW50ZXIucmlnaHQpO1xuICAgICAgICAgICAgICAgIHBvaW50ZXIuZGF0YSA9IHRlbXAuZGF0YTtcbiAgICAgICAgICAgICAgICBkZWxldGVJdGVtKHBvaW50ZXIuZGF0YSwgcG9pbnRlci5yaWdodCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy9jaGVjayBhbmQgcmViYWxhbmNlIHRyZWVcbiAgICAgICAgaWYgKCEoaXNCYWxhbmNlZChyb290KSkpIHtcbiAgICAgICAgICAgIHJlYmFsYW5jZShyb290KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy9oZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBzbWFsbGVzdCBub2RlXG4gICAgY29uc3QgZmluZFNtYWxsZXN0Tm9kZSA9IChub2RlKSA9PiB7XG4gICAgICAgIHdoaWxlKCFub2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kID0gKHZhbCkgPT4ge1xuICAgICAgICAvL3JldHVybnMgdGhlIG5vZGUgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVcbiAgICAgICAgLy90cmF2ZXJzZSB0cmVlXG4gICAgICAgIGxldCBwb2ludGVyID0gcm9vdDtcbiAgICAgICAgd2hpbGUgKHZhbCA+IHBvaW50ZXIuZGF0YSAmJiBwb2ludGVyLnJpZ2h0KSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5yaWdodDtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHZhbCA8IHBvaW50ZXIubGVmdCAmJiBwb2ludGVyLmxlZnQpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLmxlZnQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vcmV0dXJuIHZhbHVlXG4gICAgICAgIGlmICh2YWwgPT09IHBvaW50ZXIuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvaW50ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGV2ZWxPcmRlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAvL2NhbGxiYWNrIG9wdGlvbmFsXG4gICAgICAgIC8vdHJhdmVyc2UgdGhlIHRyZWUgaW4gYnJlYWR0aC1maXJzdCBsZXZlbCBvcmRlciBhbmQgcHJvdmlkZSBlYWNoIG5vZGUgYXMgYW4gYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICAgIGxldCBzdGFydCA9IGNhbGxiYWNrIHx8IHJvb3Q7XG4gICAgICAgIGxldCBxdWV1ZSA9IFtzdGFydF07XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHF1ZXVlWzBdKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChxdWV1ZVswXS5kYXRhKTtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2gocXVldWVbMF0ubGVmdCk7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHF1ZXVlWzBdLnJpZ2h0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5PcmRlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAvL3Nob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiBkZXB0aC1maXJzdCBvcmRlciBhbmQgeWllbGQgZWFjaCBub2RlIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgICAvL3JldHVybnMgYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFyZ3VtZW50XG4gICAgICAgIGxldCBwb2ludGVyID0gIGNhbGxiYWNrIHx8IHJvb3Q7XG4gICAgICAgIGxldCBpbk9yZGVyQXJyID0gW107XG4gICAgICAgIGlmIChwb2ludGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGluT3JkZXIocG9pbnRlci5sZWZ0KTtcbiAgICAgICAgaW5PcmRlckFyci5wdXNoKHBvaW50ZXIuZGF0YSk7XG4gICAgICAgIGluT3JkZXIocG9pbnRlci5yaWdodClcbiAgICAgICAgcmV0dXJuIGluT3JkZXJBcnI7XG4gICAgfTtcblxuICAgIGNvbnN0IHByZU9yZGVyID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIC8vc2hvdWxkIHRyYXZlcnNlIHRoZSB0cmVlIGluIGRlcHRoLWZpcnN0IG9yZGVyIGFuZCB5aWVsZCBlYWNoIG5vZGUgdG8gdGhlIHByb3ZpZGVkIGNhbGxiYWNrXG4gICAgICAgIC8vcmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgaWYgbm8gY2FsbGJhY2sgaXMgZ2l2ZW4gYXMgYXJndW1lbnRcbiAgICAgICAgbGV0IHBvaW50ZXIgPSAgY2FsbGJhY2sgfHwgcm9vdDtcbiAgICAgICAgbGV0IHByZU9yZGVyQXJyID0gW107XG4gICAgICAgIGlmIChwb2ludGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHByZU9yZGVyKHBvaW50ZXIubGVmdCk7XG4gICAgICAgIHByZU9yZGVyKHBvaW50ZXIucmlnaHQpXG4gICAgICAgIHByZU9yZGVyQXJyLnB1c2gocG9pbnRlci5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHByZU9yZGVyQXJyO1xuICAgIH07XG5cbiAgICBjb25zdCBwb3N0T3JkZXIgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgLy9zaG91bGQgdHJhdmVyc2UgdGhlIHRyZWUgaW4gZGVwdGgtZmlyc3Qgb3JkZXIgYW5kIHlpZWxkIGVhY2ggbm9kZSB0byB0aGUgcHJvdmlkZWQgY2FsbGJhY2tcbiAgICAgICAgLy9yZXR1cm5zIGFuIGFycmF5IG9mIHZhbHVlcyBpZiBubyBjYWxsYmFjayBpcyBnaXZlbiBhcyBhcmd1bWVudFxuICAgICAgICBsZXQgcG9pbnRlciA9ICBjYWxsYmFjayB8fCByb290O1xuICAgICAgICBsZXQgcG9zdE9yZGVyQXJyID0gW107XG4gICAgICAgIGlmIChwb2ludGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIHBvc3RPcmRlckFyci5wdXNoKHBvaW50ZXIuZGF0YSk7XG4gICAgICAgIHBvc3RPcmRlcihwb2ludGVyLmxlZnQpO1xuICAgICAgICBwb3N0T3JkZXIocG9pbnRlci5yaWdodClcbiAgICAgICAgcmV0dXJuIHBvc3RPcmRlckFycjtcbiAgICB9O1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gKG5vZGUpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIGdpdmVuIG5vZGUncyBoZWlnaHRcbiAgICAgICAgLy9oZWlnaHQgPSBudW1iZXIgb2YgZWRnZXMgaW4gbG9uZ2VzdCBwYXRoIGZyb20gYSBnaXZlbiBub2RlIHRvIGEgbGVhZiBub2RlXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGxlZnRIZWlnaHQgPSBoZWlnaHQobm9kZS5sZWZ0KTtcbiAgICAgICAgbGV0IHJpZ2h0SGVpZ2h0ID0gaGVpZ2h0KG5vZGUucmlnaHQpO1xuXG4gICAgICAgIGlmIChsZWZ0SGVpZ2h0ID4gcmlnaHRIZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWZ0SGVpZ2h0ICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByaWdodEhlaWdodCArIDE7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGRlcHRoID0gKG5vZGUpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIGdpdmVuIG5vZGUncyBkZXB0aFxuICAgICAgICAvL2RlcHRoID0gbnVtYmVyIG9mIGVkZ2VzIGluIHRoZSBwYXRoIGZyb20gYSBnaXZlbiBub2RlIHRvIHRoZSB0cmVl4oCZcyByb290IG5vZGVcbiAgICAgICAgbGV0IGRwdGggPSAwO1xuICAgICAgICBsZXQgcG9pbnRlciA9IHJvb3Q7XG4gICAgICAgIHdoaWxlIChub2RlLmRhdGEgPiBwb2ludGVyLmRhdGEgJiYgcG9pbnRlci5yaWdodCkge1xuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIucmlnaHQ7XG4gICAgICAgICAgICBkcHRoKys7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlIChub2RlLmRhdGEgPCBwb2ludGVyLmRhdGEgJiYgcG9pbnRlci5sZWZ0KSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5sZWZ0O1xuICAgICAgICAgICAgZHB0aCsrXG4gICAgICAgIH07XG4gICAgICAgIC8vcmV0dXJuIGRlcHRoIHZhbHVlIHdoZW4gbWF0Y2hpbmcgbm9kZSBmb3VuZFxuICAgICAgICBpZiAocG9pbnRlci5kYXRhID09PSBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBgRGVwdGggPSAke2RwdGh9YDtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNCYWxhbmNlZCA9ICgpID0+IHtcbiAgICAgICAgLy9jaGVja3MgaWYgdGhlIHRyZWUgaXMgYmFsYW5jZWRcbiAgICAgICAgLy9iYWxhbmNlZCB0cmVlID0gZGlmZmVyZW5jZSBiZXR3ZWVuIGhlaWdodHMgb2YgbGVmdCBhbmQgcmlnaHQgc3VidHJlZSBvZiBldmVyeSBub2RlIGlzIG5vdCBtb3JlIHRoYW4gMVxuICAgICAgICBjb25zdCBsZWZ0SGVpZ2h0ID0gaGVpZ2h0KHJvb3QubGVmdCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0SGVpZ2h0ID0gaGVpZ2h0KHJvb3QucmlnaHQpO1xuICAgICAgICBjb25zdCBkaWZmID0gTWF0aC5hYnMobGVmdEhlaWdodCAtIHJpZ2h0SGVpZ2h0KTtcblxuICAgICAgICBpZiAoZGlmZiA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCByZWJhbGFuY2UgPSAoKSA9PiB7XG4gICAgICAgIC8vcmViYWxhbmNlcyBhbiB1bmJhbGFuY2VkIHRyZWVcbiAgICAgICAgLy90cmF2ZXJzZXMgdHJlZSBhbmQgZ2VuZXJhdGVzIGFuIGFycmF5XG4gICAgICAgIGxldCBuZXdBcnIgPSBpbk9yZGVyKCk7XG4gICAgICAgIC8vZmVlZHMgdGhhdCBhcnJheSBpbnRvIGJ1aWxkVHJlZVxuICAgICAgICByb290ID0gYnVpbGRUcmVlKG5ld0Fycik7XG4gICAgfTtcblxuICAgIHJldHVybiB7cm9vdCwgdmlzdWFsaXplciwgaW5zZXJ0LCBkZWxldGVJdGVtLCBmaW5kLCBsZXZlbE9yZGVyLCBpbk9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyLCBoZWlnaHQsIGRlcHRoLCBpc0JhbGFuY2VkLCByZWJhbGFuY2V9O1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9