class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let sum = 0
    for (let i=0; i<this.sides.length; i++) {
      sum += this.sides[i]
    }

    return sum
  }

}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides)
  }

  get isValid(){
    let sides1 = this.sides[0]
    let sides2 =this.sides[1]
    let sides3 =this.sides[2]

    if(this.sides === 3 && sides1+sides2>sides3 && sides2+sides3>sides1 && sides1+sides3>sides2){
    return true
    }
    else return false
    }
}

class Square extends Polygon {
  constructor(sides) {
    super(sides)
  }

  get isValid(){
    let sides1 = this.sides[0]
    let sides2 = this.sides[1]
    let sides3 = this.sides[2]
    let sides4 = this.sides[3]

    if (this.sides === 4 && sides1 ===sides2 && sides2=== sides3 && sides3 === sides4){
    return true
    } else
    return false
    }

    get area() {
      return this.sides[0] ** 2
    }
}
