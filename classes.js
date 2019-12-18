class Shape {
  constructor (height, width) {
    this.height = height
    this.width = width
  }

  area () {
    console.log(this.height * this.width)
  }

  greeting () {
    console.log('Greetings Human')
  }
}

// let square = new Shape(10, 10)

// square.greeting()

class Square extends Shape {
  constructor () {}
}
