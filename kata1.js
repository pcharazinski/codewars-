String.prototype.isUpperCase = function () {
    return this == this.toUpperCase();
  }

///  lub 

String.prototype.isUpperCase = function () {

    var str = this;
    var result = true;

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 91) {
            result = true;
        } else {
            result = false;
              }
    }
    return result;
};
/// lub 

String.prototype.isUpperCase = function() {
    for (let i = 0; i < this.length; i++) {
      if (this[i] >= 'a' && this[i] <= 'z') {
        return false
      } 
    } 
    return true;
  }
