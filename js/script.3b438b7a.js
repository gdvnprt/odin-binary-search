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
    node.left = sortedToBST(arr, start, mid - 1);
    node.right = sortedToBST(arr, mid + 1, end);

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LjNiNDM4YjdhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRzs7QUFFakI7QUFDZjtBQUNBLHdCQUF3QixvREFBTzs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDTGM7QUFDZjtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNHO0FBQ087QUFDRzs7QUFFMUM7QUFDQSxpQkFBaUIseURBQVM7QUFDMUI7QUFDQSx1QkFBdUIsMERBQVc7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBSTtBQUNwQztBQUNBO0FBQ0EsK0JBQStCLGdEQUFJO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvYnVpbGRUcmVlLmpzIiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC8uL3NyYy9zb3J0LmpzIiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC8uL3NyYy92aXN1YWxpemVyLmpzIiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlLmpzJztcbmltcG9ydCBzb3J0QXJyIGZyb20gJy4vc29ydC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIpIHtcbiAgICAvL3NvcnQgdGhlIGFycmF5XG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBzb3J0QXJyKGFycik7XG5cbiAgICByZXR1cm4gc29ydGVkVG9CU1Qoc29ydGVkQXJyYXkpO1xufTtcblxuLy9yZWN1cnNpb24gaGVscGVyXG5jb25zdCBzb3J0ZWRUb0JTVCA9IChhcnIsIHN0YXJ0LCBlbmQpID0+IHtcbiAgICAvL2Jhc2UgY2FzZVxuICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy9maW5kIHRoZSBtaWRkbGUgZWxlbWVudCBhbmQgbWFrZSBpdCB0aGUgcm9vdFxuICAgIGxldCBtaWQgPSBwYXJzZUludCgoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZShhcnJbbWlkXSk7XG5cbiAgICAvL3JlY3Vyc2l2ZWx5IGNvbnN0cnVjdCBsZWZ0IGFuZCByaWdodCBzdWJ0cmVlc1xuICAgIG5vZGUubGVmdCA9IHNvcnRlZFRvQlNUKGFyciwgc3RhcnQsIG1pZCAtIDEpO1xuICAgIG5vZGUucmlnaHQgPSBzb3J0ZWRUb0JTVChhcnIsIG1pZCArIDEsIGVuZCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBOb2RlID0gKGRhdCkgPT4ge1xuICAgIGxldCBkYXRhID0gZGF0IHwgbnVsbDtcbiAgICBsZXQgbGVmdCA9IG51bGw7XG4gICAgbGV0IHJpZ2h0ID0gbnVsbDtcbiAgICByZXR1cm4ge2RhdGEsIGxlZnQsIHJpZ2h0fTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEFycihhcnJheSkge1xuICAgIC8vc29ydCBhcnJheVxuICAgIGxldCBzb3J0ZWQgPSBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpe3JldHVybiBhIC0gYn0pO1xuICAgIC8vcmVtb3ZlIGR1cGxpY2F0ZXNcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzb3J0ZWQubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZihzb3J0ZWRbaV0gPT09IHNvcnRlZFtpICsgMV0pIHtcbiAgICAgICAgICAgIHNvcnRlZC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH07XG4gICAgICAgIGkrKztcbiAgICB9O1xuICAgIHJldHVybiBzb3J0ZWQ7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXR0eVByaW50KG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlLmpzJztcbmltcG9ydCBzb3J0QXJyIGZyb20gJy4vc29ydC5qcyc7XG5pbXBvcnQgYnVpbGRUcmVlIGZyb20gJy4vYnVpbGRUcmVlLmpzJztcbmltcG9ydCBwcmV0dHlQcmludCBmcm9tICcuL3Zpc3VhbGl6ZXIuanMnO1xuXG5jb25zdCBUcmVlID0gKGFycikgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBidWlsZFRyZWUoYXJyKTtcbiAgICBcbiAgICBjb25zdCB2aXN1YWxpemVyID0gcHJldHR5UHJpbnQocm9vdCk7XG5cbiAgICBjb25zdCBpbnNlcnQgPSAodmFsKSA9PiB7XG4gICAgICAgIC8vaW5zZXJ0cyBhIHZhbHVlIGludG8gdGhlIHRyZWVcbiAgICAgICAgbGV0IHBvaW50ZXIgPSByb290O1xuICAgICAgICAvL3RyYXZlcnNlIHRyZWVcbiAgICAgICAgd2hpbGUgKHZhbCA+IHBvaW50ZXIuZGF0YSAmJiBwb2ludGVyLnJpZ2h0KSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5yaWdodDtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHZhbCA8IHBvaW50ZXIubGVmdCAmJiBwb2ludGVyLmxlZnQpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLmxlZnQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vbWFrZSBuZXcgbm9kZSBpbiByb3VnaGx5IGNvcnJlY3Qgc3BvdFxuICAgICAgICBpZiAodmFsID4gcG9pbnRlci5kYXRhICYmIHBvaW50ZXIucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBvaW50ZXIucmlnaHQgPSBuZXcgTm9kZSh2YWwpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodmFsIDwgcG9pbnRlci5kYXRhICYmIHBvaW50ZXIubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcG9pbnRlci5sZWZ0ID0gbmV3IE5vZGUodmFsKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL2NoZWNrIGFuZCByZWJhbGFuY2UgdHJlZVxuICAgICAgICBpZiAoIShpc0JhbGFuY2VkKHJvb3QpKSkge1xuICAgICAgICAgICAgcmViYWxhbmNlKHJvb3QpO1xuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAodmFsKSA9PiB7XG4gICAgICAgIC8vZGVsZXRlcyBhIHZhbHVlIGZyb20gdGhlIHRyZWVcbiAgICAgICAgLy90cmF2ZXJzZSB0cmVlXG4gICAgICAgIGxldCBwb2ludGVyID0gcm9vdDtcbiAgICAgICAgd2hpbGUgKHZhbCA+IHBvaW50ZXIuZGF0YSAmJiBwb2ludGVyLnJpZ2h0KSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5yaWdodDtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHZhbCA8IHBvaW50ZXIubGVmdCAmJiBwb2ludGVyLmxlZnQpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLmxlZnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9yZW1vdmUgdmFsdWVcbiAgICAgICAgLy9uZWVkIHRvIGRlYWwgd2l0aCBtdWx0aXBsZSBjYXNlcyAtIGlmIG5vZGUgaGFzIGNoaWxkcmVuIG9yIG5vdFxuICAgICAgICBpZiAocG9pbnRlci5kYXRhICE9PSB2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb2ludGVyLmxlZnQuZGF0YSA9PT0gdmFsICYmICEocG9pbnRlci5sZWZ0LmxlZnQpICYmICEocG9pbnRlci5sZWZ0LnJpZ2h0KSkge1xuICAgICAgICAgICAgcG9pbnRlci5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBcIkNvbXBsZXRlXCI7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwb2ludGVyLnJpZ2h0LmRhdGEgPT09IHZhbCAmJiAhKHBvaW50ZXIucmlnaHQubGVmdCkgJiYgIShwb2ludGVyLnJpZ2h0LnJpZ2h0KSkge1xuICAgICAgICAgICAgcG9pbnRlci5yaWdodCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocG9pbnRlci5sZWZ0LmRhdGEgPT09IHZhbCAmJiBwb2ludGVyLmxlZnQubGVmdCAmJiAhKHBvaW50ZXIubGVmdC5yaWdodCkpIHtcbiAgICAgICAgICAgIGxldCBuZXdMZWZ0ID0gcG9pbnRlci5sZWZ0LmxlZnQ7XG4gICAgICAgICAgICBwb2ludGVyLmxlZnQgPSBuZXdMZWZ0O1xuICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBvaW50ZXIucmlnaHQuZGF0YSA9PT0gdmFsICYmIHBvaW50ZXIucmlnaHQubGVmdCAmJiAhKHBvaW50ZXIucmlnaHQucmlnaHQpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UmlnaHQgPSBwb2ludGVyLnJpZ2h0LmxlZnQ7XG4gICAgICAgICAgICBwb2ludGVyLmxlZnQgPSBuZXdSaWdodDtcbiAgICAgICAgICAgIHJldHVybiBcIkNvbXBsZXRlXCI7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwb2ludGVyLmxlZnQuZGF0YSA9PT0gdmFsICYmIHBvaW50ZXIubGVmdC5yaWdodCAmJiAhKHBvaW50ZXIubGVmdC5sZWZ0KSkge1xuICAgICAgICAgICAgbGV0IG5ld0xlZnQgPSBwb2ludGVyLmxlZnQucmlnaHQ7XG4gICAgICAgICAgICBwb2ludGVyLmxlZnQgPSBuZXdMZWZ0O1xuICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBvaW50ZXIucmlnaHQuZGF0YSA9PT0gdmFsICYmIHBvaW50ZXIucmlnaHQucmlnaHQgJiYgIShwb2ludGVyLnJpZ2h0LmxlZnQpKSB7XG4gICAgICAgICAgICBsZXQgbmV3UmlnaHQgPSBwb2ludGVyLnJpZ2h0LnJpZ2h0O1xuICAgICAgICAgICAgcG9pbnRlci5sZWZ0ID0gbmV3UmlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gXCJDb21wbGV0ZVwiO1xuICAgICAgICB9O1xuICAgICAgICAgICAgLy9uZWVkIHRvIGZpeFxuICAgICAgICBpZiAocG9pbnRlci5kYXRhID09PSB2YWwgJiYgcG9pbnRlci5sZWZ0ICYmIHBvaW50ZXIucmlnaHQpIHtcbiAgICAgICAgICAgIC8vcmlnaHQgY2hpbGQgdGFrZXMgcGxhY2Ugb2YgZGVsZXRlZCBub2RlXG4gICAgICAgICAgICAvL2xlZnQgY2hpbGRyZW4gYmVjb21lIGxlZnQgY2hpbGRyZW4gb2YgbmV3IG5vZGUgaW4gcGxhY2VcbiAgICAgICAgICAgIC8vd2hhdCB0byBkbyB3aXRoIGN1cnJlbnQgbGVmdCBjaGlsZHJlbj9cbiAgICAgICAgICAgIHBvaW50ZXIgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVcIjtcbiAgICAgICAgfTtcblxuICAgICAgICAvL2NoZWNrIGFuZCByZWJhbGFuY2UgdHJlZVxuICAgICAgICBpZiAoIShpc0JhbGFuY2VkKHJvb3QpKSkge1xuICAgICAgICAgICAgcmViYWxhbmNlKHJvb3QpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBmaW5kID0gKHZhbCkgPT4ge1xuICAgICAgICAvL3JldHVybnMgdGhlIG5vZGUgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVcbiAgICAgICAgLy90cmF2ZXJzZSB0cmVlXG4gICAgICAgIGxldCBwb2ludGVyID0gcm9vdDtcbiAgICAgICAgd2hpbGUgKHZhbCA+IHBvaW50ZXIuZGF0YSAmJiBwb2ludGVyLnJpZ2h0KSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5yaWdodDtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUgKHZhbCA8IHBvaW50ZXIubGVmdCAmJiBwb2ludGVyLmxlZnQpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLmxlZnQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vcmV0dXJuIHZhbHVlXG4gICAgICAgIGlmICh2YWwgPT09IHBvaW50ZXIuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvaW50ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5PcmRlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAvL3Nob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiBkZXB0aC1maXJzdCBvcmRlciBhbmQgeWllbGQgZWFjaCBub2RlIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgICAvL3JldHVybnMgYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFyZ3VtZW50XG4gICAgfTtcblxuICAgIGNvbnN0IHByZU9yZGVyID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIC8vc2hvdWxkIHRyYXZlcnNlIHRoZSB0cmVlIGluIGRlcHRoLWZpcnN0IG9yZGVyIGFuZCB5aWVsZCBlYWNoIG5vZGUgdG8gdGhlIHByb3ZpZGVkIGNhbGxiYWNrXG4gICAgICAgIC8vcmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgaWYgbm8gY2FsbGJhY2sgaXMgZ2l2ZW4gYXMgYXJndW1lbnRcbiAgICB9O1xuXG4gICAgY29uc3QgcG9zdE9yZGVyID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIC8vc2hvdWxkIHRyYXZlcnNlIHRoZSB0cmVlIGluIGRlcHRoLWZpcnN0IG9yZGVyIGFuZCB5aWVsZCBlYWNoIG5vZGUgdG8gdGhlIHByb3ZpZGVkIGNhbGxiYWNrXG4gICAgICAgIC8vcmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgaWYgbm8gY2FsbGJhY2sgaXMgZ2l2ZW4gYXMgYXJndW1lbnRcbiAgICB9O1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gKG5vZGUpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIGdpdmVuIG5vZGUncyBoZWlnaHRcbiAgICAgICAgLy9oZWlnaHQgPSBudW1iZXIgb2YgZWRnZXMgaW4gbG9uZ2VzdCBwYXRoIGZyb20gYSBnaXZlbiBub2RlIHRvIGEgbGVhZiBub2RlXG4gICAgfTtcblxuICAgIGNvbnN0IGRlcHRoID0gKG5vZGUpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIGdpdmVuIG5vZGUncyBkZXB0aFxuICAgICAgICAvL2hlaWdodCA9IG51bWJlciBvZiBlZGdlcyBpbiBsb25nZXN0IHBhdGggZnJvbSBhIGdpdmVuIG5vZGUgdG8gdGhlIHRyZWUncyByb290IG5vZGVcbiAgICB9O1xuXG4gICAgY29uc3QgaXNCYWxhbmNlZCA9ICgpID0+IHtcbiAgICAgICAgLy9jaGVja3MgaWYgdGhlIHRyZWUgaXMgYmFsYW5jZWRcbiAgICAgICAgLy9iYWxhbmNlZCB0cmVlID0gZGlmZmVyZW5jZSBiZXR3ZWVuIGhlaWdodHMgb2YgbGVmdCBhbmQgcmlnaHQgc3VidHJlZSBvZiBldmVyeSBub2RlIGlzIG5vdCBtb3JlIHRoYW4gMVxuICAgIH07XG5cbiAgICBjb25zdCByZWJhbGFuY2UgPSAoKSA9PiB7XG4gICAgICAgIC8vcmViYWxhbmNlcyBhbiB1bmJhbG5jZWQgdHJlZVxuICAgICAgICAvL3RyYXZlcnNlcyB0cmVlIGFuZCBnZW5lcmF0ZXMgYW4gYXJyYXlcbiAgICAgICAgLy9mZWVkcyB0aGF0IGFycmF5IGludG8gYnVpbGRUcmVlXG4gICAgfTtcblxuICAgIHJldHVybiB7cm9vdCwgdmlzdWFsaXplciwgaW5zZXJ0LCBkZWxldGVJdGVtLCBmaW5kLCBpbk9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyLCBoZWlnaHQsIGRlcHRoLCBpc0JhbGFuY2VkLCByZWJhbGFuY2V9O1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9