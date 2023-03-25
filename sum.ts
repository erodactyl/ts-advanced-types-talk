type Iterate<T extends number, A extends number[] = []> = A["length"] extends T
  ? A
  : Iterate<T, [0, ...A]>;

type Add<A extends number, B extends number> = A extends number
  ? B extends number
    ? [...Iterate<A>, ...Iterate<B>]["length"]
    : never
  : never;

type Sum<Arr extends number[], Acc extends number = 0> = Arr extends [
  infer Head extends number,
  ...infer Tail extends number[]
]
  ? Sum<Tail, Add<Acc, Head>>
  : Acc;

type TwoSum<T extends number[], U extends number, I extends number = 0> = any;
