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
};
