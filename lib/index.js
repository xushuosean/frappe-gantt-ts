(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Gantt = factory());
})(this, (function () { 'use strict';

  // src/main.js
  // import answer from 'the-answer';
  class Gantt {
      constructor(wrapper, tasks, options) {
          this.setup_wrapper(wrapper);
      }
      setup_wrapper(element) {
      }
  }

  return Gantt;

}));
