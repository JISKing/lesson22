// class PC {
//   constructor(brand, system, cost) {
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
//   }
// }

function PC(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;

  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case "string":
        return this.brand;
      case "number":
        return this.cost;
      case "default":
        return this.brand + " " + system + " " + cost + " // ";
    }
  };
}

let dell = new PC("DELL", "windows", "800");
let apple = new PC("Apple", "MAC OS", "1700");

console.log(String(dell));
console.log(+apple);
console.log(dell + apple);
