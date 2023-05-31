let age: number | string = 21;
age = 23;
age = '24';

type Point1 = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point1 | Loc = {
  x: 1,
  y: 34,
};

coordinates = { lat: 321.123, long: 23.334 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  // 타입 좁히기
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  } else {
    return price * tax;
  }
}
