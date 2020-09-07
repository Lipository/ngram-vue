export default function KeyObject() {
  this.key = '';
  this.keyValue = 0;
  this.absolute = 0;
  this.relative = 0.0;
  this.calc = 0.0;

  this.calculate = function(triGramObj, rel) {
    if (triGramObj.key.indexOf(this.key) > -1) {
      this.calc = this.relative * rel * 3;
    } else {
      this.calc = this.relative * rel;
    }
    console.log(this.calc);
  };

  this.setKeyValue = function(value) {
    if (typeof value !== 'number') { return false; }

    this.keyValue = -value;
    if (this.keyValue < 0) {
      this.keyValue = -this.keyValue;
    }
    return true;
  }

};
