// 리터럴 타입

let zero: 0 = 0;
// zero = 2;

let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad';

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

let today: DayOfWeek = 'Tuesday';
