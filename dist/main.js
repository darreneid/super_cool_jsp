/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n// JS Entry File\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const cnv = document.querySelector('#game-canvas');\n  const ctx = cnv.getContext('2d');\n  const game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 3);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFa0M7QUFFbENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRCxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUNsRCxNQUFNQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUNoQyxNQUFNQyxJQUFJLEdBQUcsSUFBSVAscURBQUksQ0FBQ0ssR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWpzcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEpTIEVudHJ5IEZpbGVcblxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNudiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWNhbnZhcycpO1xuICBjb25zdCBjdHggPSBjbnYuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgMyk7XG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY252IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ball; }\n/* harmony export */ });\nclass Ball {\n  constructor(ctx, spd) {\n    console.log('initializing ball...');\n    this.ctx = ctx;\n    this.spd = spd;\n    this.pos = [200 + Math.floor(Math.random() * 200), 75 + Math.floor(Math.random() * 150)];\n    const ang = Math.floor(Math.random() * 2 * Math.PI);\n    this.vel = [spd * Math.cos(ang), spd * Math.sin(ang)];\n  }\n  animate() {\n    this.draw();\n    this.update();\n  }\n  draw() {\n    const [x, y] = this.pos;\n    this.ctx.beginPath();\n    this.ctx.arc(x, y, 5, 0, 2 * Math.PI);\n    this.ctx.stroke();\n  }\n  update() {\n    const [x, y] = this.pos;\n    const [dx, dy] = this.vel;\n    this.pos = [x + dx, y + dy];\n    this.collide();\n  }\n  collide() {\n    const [x, y] = this.pos;\n    const [dx, dy] = this.vel;\n    if (x < 0 || x > 800) {\n      this.vel = [-dx, dy];\n    }\n    if (y < 0 || y > 500) {\n      this.vel = [dx, -dy];\n    }\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDeEJDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ25DLElBQUksQ0FBQ0gsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNHLEdBQUcsR0FBRyxDQUNULEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDLEVBQ25DLEVBQUUsR0FBR0YsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQ25DO0lBQ0QsTUFBTUMsR0FBRyxHQUFHSCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUNGLElBQUksQ0FBQ0ksRUFBRSxDQUFDO0lBQy9DLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQ1RULEdBQUcsR0FBQ0ksSUFBSSxDQUFDTSxHQUFHLENBQUNILEdBQUcsQ0FBQyxFQUNqQlAsR0FBRyxHQUFDSSxJQUFJLENBQUNPLEdBQUcsQ0FBQ0osR0FBRyxDQUFDLENBQ2xCO0VBQ0g7RUFFQUssT0FBTyxHQUFHO0lBQ1IsSUFBSSxDQUFDQyxJQUFJLEVBQUU7SUFDWCxJQUFJLENBQUNDLE1BQU0sRUFBRTtFQUNmO0VBRUFELElBQUksR0FBRztJQUNMLE1BQU0sQ0FBQ0UsQ0FBQyxFQUFFQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNiLEdBQUc7SUFDdkIsSUFBSSxDQUFDSixHQUFHLENBQUNrQixTQUFTLEVBQUU7SUFDcEIsSUFBSSxDQUFDbEIsR0FBRyxDQUFDbUIsR0FBRyxDQUFDSCxDQUFDLEVBQUVDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBR1osSUFBSSxDQUFDSSxFQUFFLENBQUM7SUFDckMsSUFBSSxDQUFDVCxHQUFHLENBQUNvQixNQUFNLEVBQUU7RUFDbkI7RUFFQUwsTUFBTSxHQUFHO0lBQ1AsTUFBTSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2IsR0FBRztJQUN2QixNQUFNLENBQUNpQixFQUFFLEVBQUVDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQ1osR0FBRztJQUN6QixJQUFJLENBQUNOLEdBQUcsR0FBRyxDQUFDWSxDQUFDLEdBQUdLLEVBQUUsRUFBRUosQ0FBQyxHQUFHSyxFQUFFLENBQUM7SUFDM0IsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDaEI7RUFFQUEsT0FBTyxHQUFHO0lBQ1IsTUFBTSxDQUFDUCxDQUFDLEVBQUVDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ2IsR0FBRztJQUN2QixNQUFNLENBQUNpQixFQUFFLEVBQUVDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQ1osR0FBRztJQUN6QixJQUFJTSxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQ3BCLElBQUksQ0FBQ04sR0FBRyxHQUFHLENBQUMsQ0FBQ1csRUFBRSxFQUFFQyxFQUFFLENBQUM7SUFDdEI7SUFDQSxJQUFJTCxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsR0FBRyxFQUFFO01BQ3BCLElBQUksQ0FBQ1AsR0FBRyxHQUFHLENBQUNXLEVBQUUsRUFBRSxDQUFDQyxFQUFFLENBQUM7SUFDdEI7RUFDRjtBQUNGO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWpzcC8uL3NyYy9zY3JpcHRzL2JhbGwuanM/YTk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIHtcbiAgY29uc3RydWN0b3IoY3R4LCBzcGQpIHtcbiAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIGJhbGwuLi4nKTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnNwZCA9IHNwZDtcbiAgICB0aGlzLnBvcyA9IFtcbiAgICAgIDIwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMDApLFxuICAgICAgNzUgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTUwKVxuICAgIF07XG4gICAgY29uc3QgYW5nID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIqTWF0aC5QSSk7XG4gICAgdGhpcy52ZWwgPSBbXG4gICAgICBzcGQqTWF0aC5jb3MoYW5nKSxcbiAgICAgIHNwZCpNYXRoLnNpbihhbmcpXG4gICAgXTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3M7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguYXJjKHgsIHksIDUsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvcztcbiAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMudmVsO1xuICAgIHRoaXMucG9zID0gW3ggKyBkeCwgeSArIGR5XTtcbiAgICB0aGlzLmNvbGxpZGUoKTtcbiAgfVxuXG4gIGNvbGxpZGUoKSB7XG4gICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3M7XG4gICAgY29uc3QgW2R4LCBkeV0gPSB0aGlzLnZlbDtcbiAgICBpZiAoeCA8IDAgfHwgeCA+IDgwMCkge1xuICAgICAgdGhpcy52ZWwgPSBbLWR4LCBkeV07XG4gICAgfVxuICAgIGlmICh5IDwgMCB8fCB5ID4gNTAwKSB7XG4gICAgICB0aGlzLnZlbCA9IFtkeCwgLWR5XTtcbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbIkJhbGwiLCJjb25zdHJ1Y3RvciIsImN0eCIsInNwZCIsImNvbnNvbGUiLCJsb2ciLCJwb3MiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbmciLCJQSSIsInZlbCIsImNvcyIsInNpbiIsImFuaW1hdGUiLCJkcmF3IiwidXBkYXRlIiwieCIsInkiLCJiZWdpblBhdGgiLCJhcmMiLCJzdHJva2UiLCJkeCIsImR5IiwiY29sbGlkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ \"./src/scripts/paddle.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./src/scripts/ball.js\");\n\n\nclass Game {\n  constructor(ctx, spd) {\n    console.log('initializing game...');\n    this.ctx = ctx;\n    this.spd = spd;\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, spd);\n    this.leftPaddle = new _paddle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 'left');\n    this.rightPaddle = new _paddle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 'right');\n    this.animate();\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, 800, 500);\n    this.ball.animate();\n    window.requestAnimationFrame(this.animate.bind(this));\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QjtBQUNKO0FBRVgsTUFBTUUsSUFBSSxDQUFDO0VBQ3hCQyxXQUFXLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUNuQyxJQUFJLENBQUNILEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDRyxJQUFJLEdBQUcsSUFBSVAsNkNBQUksQ0FBQ0csR0FBRyxFQUFDQyxHQUFHLENBQUM7SUFDN0IsSUFBSSxDQUFDSSxVQUFVLEdBQUcsSUFBSVQsK0NBQU0sQ0FBQ0ksR0FBRyxFQUFFLE1BQU0sQ0FBQztJQUN6QyxJQUFJLENBQUNNLFdBQVcsR0FBRyxJQUFJViwrQ0FBTSxDQUFDSSxHQUFHLEVBQUUsT0FBTyxDQUFDO0lBQzNDLElBQUksQ0FBQ08sT0FBTyxFQUFFO0VBQ2hCO0VBRUFBLE9BQU8sR0FBRztJQUNSLElBQUksQ0FBQ1AsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO0lBQy9CLElBQUksQ0FBQ0osSUFBSSxDQUFDRyxPQUFPLEVBQUU7SUFDbkJFLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN2RDtBQUNGO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWpzcC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFkZGxlIGZyb20gXCIuL3BhZGRsZVwiO1xuaW1wb3J0IEJhbGwgZnJvbSBcIi4vYmFsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4LCBzcGQpIHtcbiAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIGdhbWUuLi4nKTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnNwZCA9IHNwZDtcbiAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbChjdHgsc3BkKTtcbiAgICB0aGlzLmxlZnRQYWRkbGUgPSBuZXcgUGFkZGxlKGN0eCwgJ2xlZnQnKTtcbiAgICB0aGlzLnJpZ2h0UGFkZGxlID0gbmV3IFBhZGRsZShjdHgsICdyaWdodCcpO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwwLDgwMCw1MDApO1xuICAgIHRoaXMuYmFsbC5hbmltYXRlKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gIH1cbn07Il0sIm5hbWVzIjpbIlBhZGRsZSIsIkJhbGwiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJzcGQiLCJjb25zb2xlIiwibG9nIiwiYmFsbCIsImxlZnRQYWRkbGUiLCJyaWdodFBhZGRsZSIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/paddle.js":
/*!*******************************!*\
  !*** ./src/scripts/paddle.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Paddle; }\n/* harmony export */ });\nclass Paddle {\n  constructor(ctx, pos) {\n    console.log('initializing paddle...');\n    this.ctx = ctx;\n    switch (pos) {\n      case 'left':\n        //\n        break;\n      case 'right':\n        //\n        break;\n      default:\n      //\n    }\n  }\n}\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWRkbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU0sQ0FBQztFQUMxQkMsV0FBVyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7SUFDckMsSUFBSSxDQUFDSCxHQUFHLEdBQUdBLEdBQUc7SUFFZCxRQUFPQyxHQUFHO01BQ1IsS0FBSyxNQUFNO1FBQ1Q7UUFDQTtNQUNGLEtBQUssT0FBTztRQUNWO1FBQ0E7TUFDRjtNQUNFO0lBQUE7RUFFTjtBQUNGOztBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlqc3AvLi9zcmMvc2NyaXB0cy9wYWRkbGUuanM/MzJkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWRkbGUge1xuICBjb25zdHJ1Y3RvcihjdHgsIHBvcykge1xuICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgcGFkZGxlLi4uJyk7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICBzd2l0Y2gocG9zKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgLy9cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIC8vXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy9cbiAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbIlBhZGRsZSIsImNvbnN0cnVjdG9yIiwiY3R4IiwicG9zIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/paddle.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWpzcC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;