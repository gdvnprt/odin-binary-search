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
    for(let i = 0; i < sorted.length - 1; i++) {
        if(sorted[i] === sorted[i + 1]) {
            sorted = sorted.splice(i, 1)
            i--;
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LmYxMmQyMmY0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRzs7QUFFakI7QUFDZjtBQUNBLHdCQUF3QixvREFBTzs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDTGM7QUFDZjtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNYZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOzs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0c7QUFDTztBQUNHOztBQUUxQztBQUNBLGlCQUFpQix5REFBUztBQUMxQjtBQUNBLHVCQUF1QiwwREFBVzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL2J1aWxkVHJlZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvc29ydC5qcyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvdmlzdWFsaXplci5qcyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJpbmFyeS1zZWFyY2gvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vbm9kZS5qcyc7XG5pbXBvcnQgc29ydEFyciBmcm9tICcuL3NvcnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFRyZWUoYXJyKSB7XG4gICAgLy9zb3J0IHRoZSBhcnJheVxuICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gc29ydEFycihhcnIpO1xuXG4gICAgcmV0dXJuIHNvcnRlZFRvQlNUKHNvcnRlZEFycmF5KTtcbn07XG5cbi8vcmVjdXJzaW9uIGhlbHBlclxuY29uc3Qgc29ydGVkVG9CU1QgPSAoYXJyLCBzdGFydCwgZW5kKSA9PiB7XG4gICAgLy9iYXNlIGNhc2VcbiAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vZmluZCB0aGUgbWlkZGxlIGVsZW1lbnQgYW5kIG1ha2UgaXQgdGhlIHJvb3RcbiAgICBsZXQgbWlkID0gcGFyc2VJbnQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUoYXJyW21pZF0pO1xuXG4gICAgLy9yZWN1cnNpdmVseSBjb25zdHJ1Y3QgbGVmdCBhbmQgcmlnaHQgc3VidHJlZXNcbiAgICBub2RlLmxlZnQgPSBzb3J0ZWRUb0JTVChhcnIsIHN0YXJ0LCBtaWQgLSAxKTtcbiAgICBub2RlLnJpZ2h0ID0gc29ydGVkVG9CU1QoYXJyLCBtaWQgKyAxLCBlbmQpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgTm9kZSA9IChkYXQpID0+IHtcbiAgICBsZXQgZGF0YSA9IGRhdCB8IG51bGw7XG4gICAgbGV0IGxlZnQgPSBudWxsO1xuICAgIGxldCByaWdodCA9IG51bGw7XG4gICAgcmV0dXJuIHtkYXRhLCBsZWZ0LCByaWdodH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRBcnIoYXJyYXkpIHtcbiAgICAvL3NvcnQgYXJyYXlcbiAgICBsZXQgc29ydGVkID0gYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKXtyZXR1cm4gYSAtIGJ9KTtcbiAgICAvL3JlbW92ZSBkdXBsaWNhdGVzXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgaWYoc29ydGVkW2ldID09PSBzb3J0ZWRbaSArIDFdKSB7XG4gICAgICAgICAgICBzb3J0ZWQgPSBzb3J0ZWQuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gc29ydGVkO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV0dHlQcmludChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gICAgfVxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBOb2RlIGZyb20gJy4vbm9kZS5qcyc7XG5pbXBvcnQgc29ydEFyciBmcm9tICcuL3NvcnQuanMnO1xuaW1wb3J0IGJ1aWxkVHJlZSBmcm9tICcuL2J1aWxkVHJlZS5qcyc7XG5pbXBvcnQgcHJldHR5UHJpbnQgZnJvbSAnLi92aXN1YWxpemVyLmpzJztcblxuY29uc3QgVHJlZSA9IChhcnIpID0+IHtcbiAgICBjb25zdCByb290ID0gYnVpbGRUcmVlKGFycik7XG4gICAgXG4gICAgY29uc3QgdmlzdWFsaXplciA9IHByZXR0eVByaW50KHJvb3QpO1xuXG4gICAgY29uc3QgaW5zZXJ0ID0gKHZhbCkgPT4ge1xuICAgICAgICAvL2luc2VydHMgYSB2YWx1ZSBpbnRvIHRoZSB0cmVlXG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAodmFsKSA9PiB7XG4gICAgICAgIC8vZGVsZXRlcyBhIHZhbHVlIGZyb20gdGhlIHRyZWVcbiAgICAgICAgLy9uZWVkIHRvIGRlYWwgd2l0aCBtdWx0aXBsZSBjYXNlcyAtIGlmIG5vZGUgaGFzIGNoaWxkcmVuIG9yIG5vdFxuICAgIH07XG5cbiAgICBjb25zdCBmaW5kID0gKHZhbCkgPT4ge1xuICAgICAgICAvL3JldHVybnMgdGhlIG5vZGUgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVcbiAgICB9O1xuXG4gICAgY29uc3QgaW5PcmRlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAvL3Nob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiBkZXB0aC1maXJzdCBvcmRlciBhbmQgeWllbGQgZWFjaCBub2RlIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgICAvL3JldHVybnMgYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFyZ3VtZW50XG4gICAgfTtcblxuICAgIGNvbnN0IHByZU9yZGVyID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIC8vc2hvdWxkIHRyYXZlcnNlIHRoZSB0cmVlIGluIGRlcHRoLWZpcnN0IG9yZGVyIGFuZCB5aWVsZCBlYWNoIG5vZGUgdG8gdGhlIHByb3ZpZGVkIGNhbGxiYWNrXG4gICAgICAgIC8vcmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgaWYgbm8gY2FsbGJhY2sgaXMgZ2l2ZW4gYXMgYXJndW1lbnRcbiAgICB9O1xuXG4gICAgY29uc3QgcG9zdE9yZGVyID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIC8vc2hvdWxkIHRyYXZlcnNlIHRoZSB0cmVlIGluIGRlcHRoLWZpcnN0IG9yZGVyIGFuZCB5aWVsZCBlYWNoIG5vZGUgdG8gdGhlIHByb3ZpZGVkIGNhbGxiYWNrXG4gICAgICAgIC8vcmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgaWYgbm8gY2FsbGJhY2sgaXMgZ2l2ZW4gYXMgYXJndW1lbnRcbiAgICB9O1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gKG5vZGUpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIGdpdmVuIG5vZGUncyBoZWlnaHRcbiAgICAgICAgLy9oZWlnaHQgPSBudW1iZXIgb2YgZWRnZXMgaW4gbG9uZ2VzdCBwYXRoIGZyb20gYSBnaXZlbiBub2RlIHRvIGEgbGVhZiBub2RlXG4gICAgfTtcblxuICAgIGNvbnN0IGRlcHRoID0gKG5vZGUpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIGdpdmVuIG5vZGUncyBkZXB0aFxuICAgICAgICAvL2hlaWdodCA9IG51bWJlciBvZiBlZGdlcyBpbiBsb25nZXN0IHBhdGggZnJvbSBhIGdpdmVuIG5vZGUgdG8gdGhlIHRyZWUncyByb290IG5vZGVcbiAgICB9O1xuXG4gICAgY29uc3QgaXNCYWxhbmNlZCA9ICgpID0+IHtcbiAgICAgICAgLy9jaGVja3MgaWYgdGhlIHRyZWUgaXMgYmFsYW5jZWRcbiAgICAgICAgLy9iYWxhbmNlZCB0cmVlID0gZGlmZmVyZW5jZSBiZXR3ZWVuIGhlaWdodHMgb2YgbGVmdCBhbmQgcmlnaHQgc3VidHJlZSBvZiBldmVyeSBub2RlIGlzIG5vdCBtb3JlIHRoYW4gMVxuICAgIH07XG5cbiAgICBjb25zdCByZWJhbGFuY2UgPSAoKSA9PiB7XG4gICAgICAgIC8vcmViYWxhbmNlcyBhbiB1bmJhbG5jZWQgdHJlZVxuICAgICAgICAvL3RyYXZlcnNlcyB0cmVlIGFuZCBnZW5lcmF0ZXMgYW4gYXJyYXlcbiAgICAgICAgLy9mZWVkcyB0aGF0IGFycmF5IGludG8gYnVpbGRUcmVlXG4gICAgfTtcblxuICAgIHJldHVybiB7cm9vdCwgdmlzdWFsaXplciwgaW5zZXJ0LCBkZWxldGVJdGVtLCBmaW5kLCBpbk9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyLCBoZWlnaHQsIGRlcHRoLCBpc0JhbGFuY2VkLCByZWJhbGFuY2V9O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=