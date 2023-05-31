// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, 4, true, 'asda', {}];

// 아래 두 개는 다름.
// 첫번쨰는 숫자와 문자가 들어가는 배열이 가능, 두번째는 숫자 배열이거나 문자 배열이어야 함

// const stuff: (number | string)[] = [1, 2, 3, 'das'];
// const stuff: number[] | string[] = [1, 2, 3, 'das'];

const coordss: (Point1 | Loc)[] = [];
coordss.push({ lat: 321.213, long: 23.334 });
coordss.push({ x: 213, y: 43 });
