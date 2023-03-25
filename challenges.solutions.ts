namespace CSolutions {
  type First<T extends any[]> = T extends [] ? never : T[0];

  type Concat<T extends any[], U extends any[]> = [...T, ...U];

  type Zip<T extends any[], U extends any[]> = T extends [
    infer THead,
    ...infer TTail
  ]
    ? U extends [infer UHead, ...infer UTail]
      ? [[THead, UHead], ...Zip<TTail, UTail>]
      : []
    : [];

  type Printf<T extends string> = T extends `${"%s"}${infer Tail}`
    ? (s: string) => Printf<Tail>
    : T extends `${"%d"}${infer Tail}`
    ? (n: number) => Printf<Tail>
    : T extends `${any}${infer Tail}`
    ? Printf<Tail>
    : string;

  // Sum
  type Iterate<
    T extends number,
    A extends number[] = []
  > = A["length"] extends T ? A : Iterate<T, [...A, A["length"]]>;

  type Add<A extends number, B extends number> = A extends number
    ? B extends number
      ? [...Iterate<A>, ...Iterate<B>]["length"]
      : never
    : never;

  type Sum<Arr extends number[]> = Arr extends [
    infer Head extends number,
    ...infer Tail extends number[]
  ]
    ? Add<Head, Sum<Tail>>
    : 0;

  type TwoSum<
    T extends number[],
    U extends number,
    I extends number = 0
  > = T extends [any]
    ? false
    : T extends [infer Head extends number, ...infer Tail extends number[]]
    ? I extends Tail["length"]
      ? TwoSum<Tail, U, 0>
      : Add<Head, Tail[I]> extends U
      ? true
      : TwoSum<T, U, Add<I, 1>>
    : false;

  // Sort
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

  type test = Sort<[3, 2, 1, 4, 8, 0, 6, 7, 5, 9]>;
}
