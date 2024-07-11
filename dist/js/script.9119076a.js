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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LjkxMTkwNzZhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRzs7QUFFakI7QUFDZjtBQUNBLHdCQUF3QixvREFBTzs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDTGM7QUFDZjtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNHO0FBQ087QUFDRzs7QUFFMUM7QUFDQSxpQkFBaUIseURBQVM7QUFDMUI7QUFDQSx1QkFBdUIsMERBQVc7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC8uL3NyYy9idWlsZFRyZWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL3Zpc3VhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmluYXJ5LXNlYXJjaC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iaW5hcnktc2VhcmNoLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL25vZGUuanMnO1xuaW1wb3J0IHNvcnRBcnIgZnJvbSAnLi9zb3J0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRUcmVlKGFycikge1xuICAgIC8vc29ydCB0aGUgYXJyYXlcbiAgICBjb25zdCBzb3J0ZWRBcnJheSA9IHNvcnRBcnIoYXJyKTtcblxuICAgIHJldHVybiBzb3J0ZWRUb0JTVChzb3J0ZWRBcnJheSk7XG59O1xuXG4vL3JlY3Vyc2lvbiBoZWxwZXJcbmNvbnN0IHNvcnRlZFRvQlNUID0gKGFyciwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIC8vYmFzZSBjYXNlXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvL2ZpbmQgdGhlIG1pZGRsZSBlbGVtZW50IGFuZCBtYWtlIGl0IHRoZSByb290XG4gICAgbGV0IG1pZCA9IHBhcnNlSW50KChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGFyclttaWRdKTtcblxuICAgIC8vcmVjdXJzaXZlbHkgY29uc3RydWN0IGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWVzXG4gICAgbm9kZS5sZWZ0ID0gc29ydGVkVG9CU1QoYXJyLCBzdGFydCwgbWlkIC0gMSk7XG4gICAgbm9kZS5yaWdodCA9IHNvcnRlZFRvQlNUKGFyciwgbWlkICsgMSwgZW5kKTtcblxuICAgIHJldHVybiBub2RlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IE5vZGUgPSAoZGF0KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBkYXQgfCBudWxsO1xuICAgIGxldCBsZWZ0ID0gbnVsbDtcbiAgICBsZXQgcmlnaHQgPSBudWxsO1xuICAgIHJldHVybiB7ZGF0YSwgbGVmdCwgcmlnaHR9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0QXJyKGFycmF5KSB7XG4gICAgLy9zb3J0IGFycmF5XG4gICAgbGV0IHNvcnRlZCA9IGFycmF5LnNvcnQoZnVuY3Rpb24oYSwgYil7cmV0dXJuIGEgLSBifSk7XG4gICAgLy9yZW1vdmUgZHVwbGljYXRlc1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHNvcnRlZC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmKHNvcnRlZFtpXSA9PT0gc29ydGVkW2kgKyAxXSkge1xuICAgICAgICAgICAgc29ydGVkLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfTtcbiAgICAgICAgaSsrO1xuICAgIH07XG4gICAgcmV0dXJuIHNvcnRlZDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldHR5UHJpbnQobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTm9kZSBmcm9tICcuL25vZGUuanMnO1xuaW1wb3J0IHNvcnRBcnIgZnJvbSAnLi9zb3J0LmpzJztcbmltcG9ydCBidWlsZFRyZWUgZnJvbSAnLi9idWlsZFRyZWUuanMnO1xuaW1wb3J0IHByZXR0eVByaW50IGZyb20gJy4vdmlzdWFsaXplci5qcyc7XG5cbmNvbnN0IFRyZWUgPSAoYXJyKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGJ1aWxkVHJlZShhcnIpO1xuICAgIFxuICAgIGNvbnN0IHZpc3VhbGl6ZXIgPSBwcmV0dHlQcmludChyb290KTtcblxuICAgIGNvbnN0IGluc2VydCA9ICh2YWwpID0+IHtcbiAgICAgICAgLy9pbnNlcnRzIGEgdmFsdWUgaW50byB0aGUgdHJlZVxuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKHZhbCkgPT4ge1xuICAgICAgICAvL2RlbGV0ZXMgYSB2YWx1ZSBmcm9tIHRoZSB0cmVlXG4gICAgICAgIC8vbmVlZCB0byBkZWFsIHdpdGggbXVsdGlwbGUgY2FzZXMgLSBpZiBub2RlIGhhcyBjaGlsZHJlbiBvciBub3RcbiAgICB9O1xuXG4gICAgY29uc3QgZmluZCA9ICh2YWwpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIHRoZSBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlXG4gICAgfTtcblxuICAgIGNvbnN0IGluT3JkZXIgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgLy9zaG91bGQgdHJhdmVyc2UgdGhlIHRyZWUgaW4gZGVwdGgtZmlyc3Qgb3JkZXIgYW5kIHlpZWxkIGVhY2ggbm9kZSB0byB0aGUgcHJvdmlkZWQgY2FsbGJhY2tcbiAgICAgICAgLy9yZXR1cm5zIGFuIGFycmF5IG9mIHZhbHVlcyBpZiBubyBjYWxsYmFjayBpcyBnaXZlbiBhcyBhcmd1bWVudFxuICAgIH07XG5cbiAgICBjb25zdCBwcmVPcmRlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAvL3Nob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiBkZXB0aC1maXJzdCBvcmRlciBhbmQgeWllbGQgZWFjaCBub2RlIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgICAvL3JldHVybnMgYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFyZ3VtZW50XG4gICAgfTtcblxuICAgIGNvbnN0IHBvc3RPcmRlciA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICAvL3Nob3VsZCB0cmF2ZXJzZSB0aGUgdHJlZSBpbiBkZXB0aC1maXJzdCBvcmRlciBhbmQgeWllbGQgZWFjaCBub2RlIHRvIHRoZSBwcm92aWRlZCBjYWxsYmFja1xuICAgICAgICAvL3JldHVybnMgYW4gYXJyYXkgb2YgdmFsdWVzIGlmIG5vIGNhbGxiYWNrIGlzIGdpdmVuIGFzIGFyZ3VtZW50XG4gICAgfTtcblxuICAgIGNvbnN0IGhlaWdodCA9IChub2RlKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyBnaXZlbiBub2RlJ3MgaGVpZ2h0XG4gICAgICAgIC8vaGVpZ2h0ID0gbnVtYmVyIG9mIGVkZ2VzIGluIGxvbmdlc3QgcGF0aCBmcm9tIGEgZ2l2ZW4gbm9kZSB0byBhIGxlYWYgbm9kZVxuICAgIH07XG5cbiAgICBjb25zdCBkZXB0aCA9IChub2RlKSA9PiB7XG4gICAgICAgIC8vcmV0dXJucyBnaXZlbiBub2RlJ3MgZGVwdGhcbiAgICAgICAgLy9oZWlnaHQgPSBudW1iZXIgb2YgZWRnZXMgaW4gbG9uZ2VzdCBwYXRoIGZyb20gYSBnaXZlbiBub2RlIHRvIHRoZSB0cmVlJ3Mgcm9vdCBub2RlXG4gICAgfTtcblxuICAgIGNvbnN0IGlzQmFsYW5jZWQgPSAoKSA9PiB7XG4gICAgICAgIC8vY2hlY2tzIGlmIHRoZSB0cmVlIGlzIGJhbGFuY2VkXG4gICAgICAgIC8vYmFsYW5jZWQgdHJlZSA9IGRpZmZlcmVuY2UgYmV0d2VlbiBoZWlnaHRzIG9mIGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWUgb2YgZXZlcnkgbm9kZSBpcyBub3QgbW9yZSB0aGFuIDFcbiAgICB9O1xuXG4gICAgY29uc3QgcmViYWxhbmNlID0gKCkgPT4ge1xuICAgICAgICAvL3JlYmFsYW5jZXMgYW4gdW5iYWxuY2VkIHRyZWVcbiAgICAgICAgLy90cmF2ZXJzZXMgdHJlZSBhbmQgZ2VuZXJhdGVzIGFuIGFycmF5XG4gICAgICAgIC8vZmVlZHMgdGhhdCBhcnJheSBpbnRvIGJ1aWxkVHJlZVxuICAgIH07XG5cbiAgICByZXR1cm4ge3Jvb3QsIHZpc3VhbGl6ZXIsIGluc2VydCwgZGVsZXRlSXRlbSwgZmluZCwgaW5PcmRlciwgcHJlT3JkZXIsIHBvc3RPcmRlciwgaGVpZ2h0LCBkZXB0aCwgaXNCYWxhbmNlZCwgcmViYWxhbmNlfTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9