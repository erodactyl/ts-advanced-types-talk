type Iterate<T extends number, A extends number[] = []> = A["length"] extends T
  ? A
  : Iterate<T, [...A, A["length"]]>;

type StrictlyLonger<A extends any[], B extends any[]> = A extends [
  any,
  ...infer ATail
]
  ? B extends [any, ...infer BTail]
    ? StrictlyLonger<ATail, BTail>
    : true
  : false;

type Gt<A extends number, B extends number> = StrictlyLonger<
  Iterate<A>,
  Iterate<B>
>;

type Insert<
  Right extends number[],
  N extends number,
  Left extends number[] = []
> = Right extends [infer Head extends number, ...infer Tail extends number[]]
  ? Gt<Head, N> extends true
    ? [...Left, N, ...Right]
    : Insert<Tail, N, [...Left, Head]>
  : [...Left, N];

type Sort<Arr extends number[], Sorted extends number[] = []> = Arr extends [
  infer Head extends number,
  ...infer Tail extends number[]
]
  ? Sort<Tail, Insert<Sorted, Head>>
  : Sorted;
