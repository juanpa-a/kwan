class Dog { 
    constructor(name) {
        this.name = name;
    }
}


const puppy = new Dog("firulais");

console.log(puppy.name)


class Labrador extends Dog {
    super(name)
    constructor(color) {
        this.color = color;
    }
} 