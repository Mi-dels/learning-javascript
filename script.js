// function coding challenge

// calculate the average scores for dolphins and koalas and pick the winner.
//first criteria, average score must be * 2 of the other persons score
//        data 1 average scores for dolphins and koalas
const calcAverage = function (a, b, c) {
  return (a + b + c) / 3;
};
const calcResult1 = calcAverage(44, 23, 71);
console.log(calcResult1);

const calcAverage2 = function (a, b, c) {
  return (a + b + c) / 3;
};
const calcResult2 = calcAverage2(65, 54, 49);
console.log(calcResult2);

// winner of data1

const winner = function (a, b) {
  let win;
  if (calcResult1 >= calcResult2 * 2) {
    win = "Dolphins is the winner";
  } else if (calcResult1 < calcResult2 * 2) {
    win = "no one is the winner";
  } else if (calcResult2 < calcResult1 * 2) {
    win = " no one is the winner";
  } else {
    win = "Kaolas is the winner";
  }

  return win;
};
const winner1 = winner(calcResult1, calcResult2);
console.log(winner1);

//   Array coding challenge
