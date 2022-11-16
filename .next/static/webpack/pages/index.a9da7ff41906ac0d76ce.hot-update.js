webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'Hailey'
    },
    content: '첫 번째 게시글',
    Images: [{
      src: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788959897094.jpg'
    }, {
      src: 'http://image.yes24.com/goods/77283734/XL'
    }, {
      src: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788959897094.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 개정판이 나왔군요~'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '얼른 사고싶어요~'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: 'Hailey'
  },
  Images: [],
  Comments: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
          postAdded: true
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0Iiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUFDO0FBQ1ZDLE1BQUUsRUFBRSxDQURNO0FBRVZDLFFBQUksRUFBRTtBQUNKRCxRQUFFLEVBQUUsQ0FEQTtBQUVKRSxjQUFRLEVBQUU7QUFGTixLQUZJO0FBTVZDLFdBQU8sRUFBRSxVQU5DO0FBT1ZDLFVBQU0sRUFBRSxDQUFDO0FBQ1BDLFNBQUcsRUFBRTtBQURFLEtBQUQsRUFFTDtBQUNEQSxTQUFHLEVBQUU7QUFESixLQUZLLEVBSUw7QUFDREEsU0FBRyxFQUFFO0FBREosS0FKSyxDQVBFO0FBY1ZDLFlBQVEsRUFBRSxDQUFDO0FBQ1RMLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FERztBQUlUQyxhQUFPLEVBQUU7QUFKQSxLQUFELEVBS1A7QUFDREYsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURMO0FBSURDLGFBQU8sRUFBRTtBQUpSLEtBTE87QUFkQSxHQUFELENBRGU7QUEyQjFCSSxZQUFVLEVBQUUsRUEzQmM7QUE0QjFCQyxXQUFTLEVBQUU7QUE1QmUsQ0FBckI7QUErQlAsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sSUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUVGO0FBRGUsQ0FBaEI7QUFJUCxJQUFNRyxTQUFTLEdBQUc7QUFDaEJaLElBQUUsRUFBRSxDQURZO0FBRWhCRyxTQUFPLEVBQUUsV0FGTztBQUdoQkYsTUFBSSxFQUFFO0FBQ0pELE1BQUUsRUFBRSxDQURBO0FBRUpFLFlBQVEsRUFBRTtBQUZOLEdBSFU7QUFPaEJFLFFBQU0sRUFBRSxFQVBRO0FBUWhCRSxVQUFRLEVBQUU7QUFSTSxDQUFsQjtBQVdlLDJFQUFrQztBQUFBLE1BQWpDTyxLQUFpQyx1RUFBekJmLFlBQXlCO0FBQUEsTUFBWGdCLE1BQVc7O0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ0gsSUFBZjtBQUNFLFNBQUtGLFFBQUw7QUFBZTtBQUNiLCtDQUNLSSxLQURMO0FBRUVkLG1CQUFTLEdBQUdhLFNBQUgsc0dBQWlCQyxLQUFLLENBQUNkLFNBQXZCLEVBRlg7QUFHRVMsbUJBQVMsRUFBRTtBQUhiO0FBS0Q7O0FBQ0Q7QUFBUztBQUNQLGlDQUNLSyxLQURMO0FBR0Q7QUFaSDtBQWNELENBZkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTlkYTdmZjQxOTA2YWMwZDc2Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1haW5Qb3N0czogW3tcbiAgICBpZDogMSxcbiAgICBVc2VyOiB7XG4gICAgICBpZDogMSxcbiAgICAgIG5pY2tuYW1lOiAnSGFpbGV5JyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCcsXG4gICAgSW1hZ2VzOiBbe1xuICAgICAgc3JjOiAnaHR0cHM6Ly9jb250ZW50cy5reW9ib2Jvb2suY28ua3Ivc2loL2ZpdC1pbi80NTh4MC9wZHQvOTc4ODk1OTg5NzA5NC5qcGcnLFxuICAgIH0sIHtcbiAgICAgIHNyYzogJ2h0dHA6Ly9pbWFnZS55ZXMyNC5jb20vZ29vZHMvNzcyODM3MzQvWEwnLFxuICAgIH0sIHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vY29udGVudHMua3lvYm9ib29rLmNvLmtyL3NpaC9maXQtaW4vNDU4eDAvcGR0Lzk3ODg5NTk4OTcwOTQuanBnJyxcbiAgICB9XSxcbiAgICBDb21tZW50czogW3tcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgbmlja25hbWU6ICduZXJvJyxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+JyxcbiAgICB9LCB7XG4gICAgICBVc2VyOiB7XG4gICAgICAgIG5pY2tuYW1lOiAnaGVybycsXG4gICAgICB9LFxuICAgICAgY29udGVudDogJ+yWvOuluCDsgqzqs6Dsi7bslrTsmpR+JyxcbiAgICB9XVxuICB9XSxcbiAgaW1hZ2VQYXRoczogW10sXG4gIHBvc3RBZGRlZDogZmFsc2UsXG59O1xuXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICB0eXBlOiBBRERfUE9TVCxcbn07XG5cbmNvbnN0IGR1bW15UG9zdCA9IHtcbiAgaWQ6IDIsXG4gIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuJyxcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiAnSGFpbGV5JyxcbiAgfSxcbiAgSW1hZ2VzOiBbXSxcbiAgQ29tbWVudHM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9