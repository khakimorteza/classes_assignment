class Human {
  constructor(name, age){
   this.name = name;
   this.age = age;

  }
  ageOneYear () {
  return this.age++;
  }

  eating () {
    return "mmm, mmm, mmm, I'm love'n it";
  }
}

let koohyar = new Human("Koohyar", 28);
 console.log(koohyar.age);

koohyar.ageOneYear();
console.log(koohyar.age);
koohyar.eating()
console.log(koohyar.eating());


//2.

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

   plus (obj) {
     return new Vector(this.x + obj.x, this.y + obj.y);

   }

   minus (obj) {
     return new Vector(this.x - obj.x, this.y - obj.y)

   }

   getLength () {
     return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

   }
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)
var v3 = new Vector(3, 4)
console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v3.getLength());
