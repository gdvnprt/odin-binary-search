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
/* harmony export */   "default": () => (/* binding */ mergeSort)
/* harmony export */ });
//need to find a way to remove duplicates

function mergeSort(array) {
    //if the array is one number, return that number
    if (array.length <= 1) {
        return array;
    } else {
        //take the current array and split it in half
        let halfLength = Math.ceil(array.length / 2);

        //recursively sort each half
        let leftSide = mergeSort(array.slice(0, halfLength));
        let rightSide = mergeSort(array.slice(halfLength, array.length));

        //return the sorted array
        return merge(leftSide, rightSide);
    };
};


//merge helper
const merge = (left, right) => {
    let newArray = [];
    while (left.length && right.length) {
        //compare the first place of each array and place the lowest number first
        if (left[0] <= right[0]) {
            newArray.push(left[0]);
            left.shift();
        } else {
            newArray.push(right[0]);
            right.shift();
        };
    };
return [...newArray, ...left, ...right];
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LmQ3ZWEyMDBhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSzs7QUFFbkI7QUFDZjtBQUNBLHdCQUF3QixvREFBUzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOzs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0s7QUFDSztBQUNHOztBQUUxQztBQUNBLGlCQUFpQix5REFBUztBQUMxQjtBQUNBLHVCQUF1QiwwREFBVzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL2J1aWxkVHJlZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvc29ydC5qcyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvdmlzdWFsaXplci5qcyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vbm9kZS5qcyc7XG5pbXBvcnQgbWVyZ2VTb3J0IGZyb20gJy4vc29ydC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnIpIHtcbiAgICAvL3NvcnQgdGhlIGFycmF5XG4gICAgY29uc3Qgc29ydGVkQXJyYXkgPSBtZXJnZVNvcnQoYXJyKTtcblxuICAgIHJldHVybiBzb3J0ZWRUb0JTVChzb3J0ZWRBcnJheSk7XG59O1xuXG4vL3JlY3Vyc2lvbiBoZWxwZXJcbmNvbnN0IHNvcnRlZFRvQlNUID0gKGFyciwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIC8vYmFzZSBjYXNlXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvL2ZpbmQgdGhlIG1pZGRsZSBlbGVtZW50IGFuZCBtYWtlIGl0IHRoZSByb290XG4gICAgbGV0IG1pZCA9IHBhcnNlSW50KChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGFyclttaWRdKTtcblxuICAgIC8vcmVjdXJzaXZlbHkgY29uc3RydWN0IGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWVzXG4gICAgbm9kZS5sZWZ0ID0gc29ydGVkVG9CU1QoYXJyLCBzdGFydCwgbWlkIC0gMSk7XG4gICAgbm9kZS5yaWdodCA9IHNvcnRlZFRvQlNUKGFyciwgbWlkICsgMSwgZW5kKTtcblxuICAgIHJldHVybiBub2RlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IE5vZGUgPSAoZGF0KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBkYXQgfCBudWxsO1xuICAgIGxldCBsZWZ0ID0gbnVsbDtcbiAgICBsZXQgcmlnaHQgPSBudWxsO1xuICAgIHJldHVybiB7ZGF0YSwgbGVmdCwgcmlnaHR9O1xufTsiLCIvL25lZWQgdG8gZmluZCBhIHdheSB0byByZW1vdmUgZHVwbGljYXRlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXkpIHtcbiAgICAvL2lmIHRoZSBhcnJheSBpcyBvbmUgbnVtYmVyLCByZXR1cm4gdGhhdCBudW1iZXJcbiAgICBpZiAoYXJyYXkubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vdGFrZSB0aGUgY3VycmVudCBhcnJheSBhbmQgc3BsaXQgaXQgaW4gaGFsZlxuICAgICAgICBsZXQgaGFsZkxlbmd0aCA9IE1hdGguY2VpbChhcnJheS5sZW5ndGggLyAyKTtcblxuICAgICAgICAvL3JlY3Vyc2l2ZWx5IHNvcnQgZWFjaCBoYWxmXG4gICAgICAgIGxldCBsZWZ0U2lkZSA9IG1lcmdlU29ydChhcnJheS5zbGljZSgwLCBoYWxmTGVuZ3RoKSk7XG4gICAgICAgIGxldCByaWdodFNpZGUgPSBtZXJnZVNvcnQoYXJyYXkuc2xpY2UoaGFsZkxlbmd0aCwgYXJyYXkubGVuZ3RoKSk7XG5cbiAgICAgICAgLy9yZXR1cm4gdGhlIHNvcnRlZCBhcnJheVxuICAgICAgICByZXR1cm4gbWVyZ2UobGVmdFNpZGUsIHJpZ2h0U2lkZSk7XG4gICAgfTtcbn07XG5cblxuLy9tZXJnZSBoZWxwZXJcbmNvbnN0IG1lcmdlID0gKGxlZnQsIHJpZ2h0KSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgd2hpbGUgKGxlZnQubGVuZ3RoICYmIHJpZ2h0Lmxlbmd0aCkge1xuICAgICAgICAvL2NvbXBhcmUgdGhlIGZpcnN0IHBsYWNlIG9mIGVhY2ggYXJyYXkgYW5kIHBsYWNlIHRoZSBsb3dlc3QgbnVtYmVyIGZpcnN0XG4gICAgICAgIGlmIChsZWZ0WzBdIDw9IHJpZ2h0WzBdKSB7XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKGxlZnRbMF0pO1xuICAgICAgICAgICAgbGVmdC5zaGlmdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChyaWdodFswXSk7XG4gICAgICAgICAgICByaWdodC5zaGlmdCgpO1xuICAgICAgICB9O1xuICAgIH07XG5yZXR1cm4gWy4uLm5ld0FycmF5LCAuLi5sZWZ0LCAuLi5yaWdodF07XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXR0eVByaW50KG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE5vZGUgZnJvbSAnLi9ub2RlLmpzJztcbmltcG9ydCBtZXJnZVNvcnQgZnJvbSAnLi9zb3J0LmpzJztcbmltcG9ydCBidWlsZFRyZWUgZnJvbSAnLi9idWlsZFRyZWUuanMnO1xuaW1wb3J0IHByZXR0eVByaW50IGZyb20gJy4vdmlzdWFsaXplci5qcyc7XG5cbmNvbnN0IFRyZWUgPSAoYXJyKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGJ1aWxkVHJlZShhcnIpO1xuICAgIFxuICAgIGNvbnN0IHZpc3VhbGl6ZXIgPSBwcmV0dHlQcmludChyb290KTtcblxuICAgIGNvbnN0IGluc2VydCA9ICh2YWwpID0+IHtcbiAgICAgICAgLy9pbnNlcnRzIGEgdmFsdWUgaW50byB0aGUgdHJlZVxuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKHZhbCkgPT4ge1xuICAgICAgICAvL2RlbGV0ZXMgYSB2YWx1ZSBmcm9tIHRoZSB0cmVlXG4gICAgICAgIC8vbmVlZCB0byBkZWFsIHdpdGggbXVsdGlwbGUgY2FzZXMgLSBpZiBub2RlIGhhcyBjaGlsZHJlbiBvciBub3RcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZCA9ICh2YWwpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIHRoZSBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlXG4gICAgfTtcblxuICAgIGNvbnN0IGluT3JkZXIgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgLy9zaG91bGQgdHJhdmVyc2UgdGhlIHRyZWUgaW4gZGVwdGgtZmlyc3Qgb3JkZXIgYW5kIHlpZWxkIGVhY2ggbm9kZSB0byB0aGUgcHJvdmlkZWQgY2FsbGJhY2tcbiAgICAgICAgLy9yZXR1cm5zIGFuIGFycmF5IG9mIHZhbHVlcyBpZiBubyBjYWxsYmFjayBpcyBnaXZlbiBhcyBhcmd1bWVudFxuICAgIH07XG5cbiAgICBjb25zdCBwcmVPcmRlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAvL3Nob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiBkZXB0aC1maXJzdCBvcmRlciBhbmQgeWllbGQgZWFjaCBub2RlIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgICAvL3JldHVybnMgYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFyZ3VtZW50XG4gICAgfTtcblxuICAgIGNvbnN0IHBvc3RPcmRlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAvL3Nob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiBkZXB0aC1maXJzdCBvcmRlciBhbmQgeWllbGQgZWFjaCBub2RlIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgICAvL3JldHVybnMgYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFyZ3VtZW50XG4gICAgfTtcblxuICAgIGNvbnN0IGhlaWdodCA9IChub2RlKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyBnaXZlbiBub2RlJ3MgaGVpZ2h0XG4gICAgICAgIC8vaGVpZ2h0ID0gbnVtYmVyIG9mIGVkZ2VzIGluIGxvbmdlc3QgcGF0aCBmcm9tIGEgZ2l2ZW4gbm9kZSB0byBhIGxlYWYgbm9kZVxuICAgIH07XG5cbiAgICBjb25zdCBkZXB0aCA9IChub2RlKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyBnaXZlbiBub2RlJ3MgZGVwdGhcbiAgICAgICAgLy9oZWlnaHQgPSBudW1iZXIgb2YgZWRnZXMgaW4gbG9uZ2VzdCBwYXRoIGZyb20gYSBnaXZlbiBub2RlIHRvIHRoZSB0cmVlJ3Mgcm9vdCBub2RlXG4gICAgfTtcblxuICAgIGNvbnN0IGlzQmFsYW5jZWQgPSAoKSA9PiB7XG4gICAgICAgIC8vY2hlY2tzIGlmIHRoZSB0cmVlIGlzIGJhbGFuY2VkXG4gICAgICAgIC8vYmFsYW5jZWQgdHJlZSA9IGRpZmZlcmVuY2UgYmV0d2VlbiBoZWlnaHRzIG9mIGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWUgb2YgZXZlcnkgbm9kZSBpcyBub3QgbW9yZSB0aGFuIDFcbiAgICB9O1xuXG4gICAgY29uc3QgcmViYWxhbmNlID0gKCkgPT4ge1xuICAgICAgICAvL3JlYmFsYW5jZXMgYW4gdW5iYWxuY2VkIHRyZWVcbiAgICAgICAgLy90cmF2ZXJzZXMgdHJlZSBhbmQgZ2VuZXJhdGVzIGFuIGFycmF5XG4gICAgICAgIC8vZmVlZHMgdGhhdCBhcnJheSBpbnRvIGJ1aWxkVHJlZVxuICAgIH07XG5cbiAgICByZXR1cm4ge3Jvb3QsIHZpc3VhbGl6ZXIsIGluc2VydCwgZGVsZXRlSXRlbSwgZmluZCwgaW5PcmRlciwgcHJlT3JkZXIsIHBvc3RPcmRlciwgaGVpZ2h0LCBkZXB0aCwgaXNCYWxhbmNlZCwgcmViYWxhbmNlfTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9