module.exports = function () {
  //map
  Array.prototype.myMap = function (callback) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError("Array.prototype.myMap was called on wrong type");
    }

    if (typeof callback !== "function") {
      throw new TypeError(`Array.prototype.myMap ${callback} is not a function`);
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };

  //some
  Array.prototype.mySome = function (callback) {
    if (!this) {
      throw new TypeError("Array.prototype.mySome called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(`Array.prototype.mySome ${callback} is not a function`);
    }
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };

  //every
  Array.prototype.myEvery = function (callback) {
    if (!this) {
      throw new TypeError("Array.prototype.myEvery called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(`Array.prototype.mySome ${callback} is not a function`);
    }

    let isEveryElementPassed = true;
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        isEveryElementPassed = false;
        break;
      }
    }
    return isEveryElementPassed;
  };
  //reverse
  Array.prototype.myReverse = function () {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError("Array.prototype.myReverse was called on wrong type");
    }
    if (!this) {
      throw new TypeError("Arra.prototype.myReverse called on null or undefined");
    }
    let result = [];
    for (let i = this.length - 1; i >= 0; i--) {
      result.push(this[i]);
    }
    return result;
  };
  //reduce
  Array.prototype.myReduce = function (callback, initValue) {
    if (!(this instanceof Array || this instanceof String)) {
      throw new TypeError("Array.prototype.myReduce was called on wrong type");
    }
    if (typeof callback !== "function") {
      throw new TypeError(`Array.prototype.myReduce ${callback} is not a function`);
    }
    let acc = arguments.length >= 2 ? initValue : this[0];
    let iStart = arguments.length >= 2 ? 0 : 1;
    for (let i = iStart; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  };
  //flat
  Array.prototype.myFlat = function (depth = 1) {
    if (!Array.isArray(this)) {
      throw new TypeError("Array.prototype.myFlat was called on wrong type");
    }
    if (isNaN(depth) || depth <= 0) {
      return this;
    }

    function flatten(arr, depth) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        let currentElem = arr[i];
        if (Array.isArray(currentElem) && depth > 0) {
          result.push(...flatten(currentElem, depth - 1));
        } else {
          result.push(currentElem);
        }
      }
      return result;
    }
    return flatten(this, depth);
  };
};
