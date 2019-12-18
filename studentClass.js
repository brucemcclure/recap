class Student {
  constructor (name, computer) {
    this.name = name
    this.computer = computer
  }

  tellUsWhatComputerYouHave () {
    console.log(`Im running a ${this.computer}`)
  }

  tellUsWhatYourNameIs () {
    console.log(`My Name is ${this.name}`)
  }
}

let bruce = new Student('Bruce', "13' Macbook")

bruce.tellUsWhatYourNameIs()
bruce.tellUsWhatComputerYouHave()
