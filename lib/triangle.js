'use strict';

function Triangle(side1, side2, side3){
  this.highest = 0;
  var that = this;
  [side1, side2, side3].forEach(function(side){
    if (side <= 0){ throw new TriangleError }
    else if (side1+side2 <= side3){ throw new TriangleError }
    else if (side1+side3 <= side2){ throw new TriangleError }
    else if (side2+side3 <= side1){ throw new TriangleError }
    else if (side >= that.highest){ that.highest = side }
  });
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
};

Triangle.prototype.kind = function () {
  var array = [this.side1, this.side2, this.side3],
      count = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] === this.highest){ count++ }
  };
  if (count == 3){return "equilateral"}
  else if(count == 2){return "isosceles"}
  else {return "scalene"}
};

function TriangleError(message) {
  this.name = 'TriangleError';
  this.message = message || 'Default Message';
}
TriangleError.prototype = Object.create(Error.prototype);
TriangleError.prototype.constructor = TriangleError;
