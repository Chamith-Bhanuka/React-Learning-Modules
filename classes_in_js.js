class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width
        this.height = _height
        this.color = _color
        console.log('A new Rectangle Created')
    }

    getArea() {
        return this.width * this.height;
    }

    aboutMe() {
        return `I am a Rectangle and 
        my width is ${this.width}
        my height is ${this.height}
        my color is ${this.color}`
    }
}

const rectangle1 = new Rectangle(10, 8, 'red');
console.log(rectangle1.getArea());
console.log(rectangle1.aboutMe());


class Square{
    constructor(_width) {
        this.width = _width
        this.height = _width
    }

    getArea() {
        console.log(this.width, this.height)
        return this.width * this.height;
    }

    get area() {
        return this.width * this.height;
    }

    set area(newArea) {
        this.width = Math.sqrt(newArea);
        this.height = Math.sqrt(newArea);
    }
}

const square1 = new Square(5,);
console.log(square1.getArea());
console.log(square1.area)

square1.area = 49;

console.log(square1.getArea());

// static methods

console.log('\n\n👍 static methods ')

class Square2 {
    constructor(_width) {
        this.width = _width
        this.height = _width
    }

    getArea() {
        return this.width * this.height;
    }

    static calArea(a,b) {
        return a * b;
    }
}

const square2 = new Square2(10);
console.log(square2.getArea());
console.log(Square2.calArea(10,100));

// Inherited Classes
console.log('Inheritance 😎')

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        console.log('A new Person Created');
    }
}

class Programmer extends Person {
    constructor(_name, _age, _language) {
        super(_name, _age);
        this.name = _name;
        this.age = _age;
        this.language = _language;
    }

    code() {
        return `${this.name} is a programmer & 
        knows ${this.language}`;
    }

}

const john = new Person('John', 32);
const dob = new Programmer('Dob', 50, 'JavaScripts');
console.log(dob.code());

// Polymorphism
console.log(' Polymorphism 🤝')

class Animal {
    constructor() {
        console.log('An animal is created');
    }

    makeSound() {
        console.log("Animals generally made sound")
    }
}

class Dog extends Animal {
    constructor() {
        super();
        console.log("A dog is created");
     }

     makeSound() {
         console.log('Dags normally barks')
     }
}

class Cat extends Animal {
    constructor() {
        super();
        console.log("A cat is created");
    }

    makeSound() {
        console.log('Cats normally meow')
    }
}

const tommy = new Dog();
tommy.makeSound();

const tom = new Cat();
tom.makeSound();