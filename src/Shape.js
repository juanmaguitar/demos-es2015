class Shape {
	constructor ( id, x, y ) {
	  this.id = id;
	  this.x = x;
	  this.y = y;
	}
	toString() {
		return "Shape(" + this.id + ")";
	}
	static multiplyBy2(x) {
      return x*2;
  }
}

export default Shape;