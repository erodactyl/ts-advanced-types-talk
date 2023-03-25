[1, 2, 3].map((el) => el * 2);

// Without Generics
const shitmap = (list: number[], mapper: (num: number) => number): number[] => {
  const result: number[] = [];

  for (let i = 0; i < list.length; i++) {
    result.push(mapper(list[i]));
  }

  return result;
};

const shitres1 = shitmap([1, 2, 3], (num) => num * 2);
// @ts-expect-error
const shitres2 = shitmap(["hi", "bye"], (str) => str.charAt(0));

// works, but we lose static type checks
console.log(shitres1, shitres2);

// With Generics, allowing us to be more descriptive
const goodmap = <T, U>(list: T[], mapper: (item: T) => U): U[] => {
  const result: U[] = [];

  for (let i = 0; i < list.length; i++) {
    result.push(mapper(list[i]));
  }

  return result;
};

const res1 = goodmap([1, 2, 3], (num) => num * 2);
const res2 = goodmap(["hi", "bye"], (str) => str.charAt(0));

console.log(res1, res2);
