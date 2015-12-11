(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var portable = require('../../../portable/');

var f = function f(x) {
  return x++;
};

alert(f(12));
alert(portable.validateId('foo'));

},{"../../../portable/":2}],2:[function(require,module,exports){
"use strict";

module.exports = {
    validateId: validateId
};

var ID_PREFIX = "__ID_";

function validateId() {
    return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL3d3dy9NT0RFTE8vY2xpZW50LXNlcnZlci9jbGllbnQvYXBwL3NjcmlwdHMvbWFpbi5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvd3d3L01PREVMTy9jbGllbnQtc2VydmVyL3BvcnRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxDQUFDLEdBQUcsU0FBSixDQUFDLENBQUksQ0FBQztTQUFJLENBQUMsRUFBRTtDQUFBLENBQUM7O0FBRWxCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNiLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztBQ05sQyxZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNiLGNBQVUsRUFBVixVQUFVO0NBQ2IsQ0FBQzs7QUFFRixJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7O0FBRTFCLFNBQVMsVUFBVSxHQUFJO0FBQ25CLFdBQU8sT0FBTyxFQUFFLElBQUksUUFBUSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQy9EIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxudmFyIHBvcnRhYmxlID0gcmVxdWlyZSgnLi4vLi4vLi4vcG9ydGFibGUvJyk7XG5cbnZhciBmID0gKHgpPT4geCsrO1xuXG5hbGVydChmKDEyKSk7XG5hbGVydChwb3J0YWJsZS52YWxpZGF0ZUlkKCdmb28nKSk7XG5cblxuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdmFsaWRhdGVJZFxufTtcblxuY29uc3QgSURfUFJFRklYID0gXCJfX0lEX1wiO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUlkICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlkID09ICdzdHJpbmcnICYmIGlkLmluZGV4T2YoSURfUFJFRklYKSA9PT0gMDtcbn0iXX0=
