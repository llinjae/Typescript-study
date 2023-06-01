// const stuff1: (string | number)[] = ['asd', 'asdfa', 'asdfas', 2];

// const color: number[] = [23, 45, 234, 234];
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];
// goodRes[0] = '200';
goodRes.push(123);

const responses: HTTPResponse[] = [
  [404, 'Not Found'],
  [200, 'OK'],
];
