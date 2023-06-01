// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 213, y: 12 };

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string;
}

const thomas: Person = {
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  id: 21312,
  sayHi: () => {
    return 'Hello';
  },
};

thomas.first = 'kasd';
// thomas.id = 12312;

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes.applyDiscount(0.4);
