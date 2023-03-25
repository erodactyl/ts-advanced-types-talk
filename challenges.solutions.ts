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
type Iterate<T extends number, A extends number[] = []> = A["length"] extends T
  ? A
  : Iterate<T, [...A, A["length"]]>;

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

// Get Query String

type Includes<T extends readonly any[], U> = T extends [U, ...any]
  ? true
  : T extends [any, ...infer Rest]
  ? Includes<Rest, U>
  : false;

type MergeIntoArray<
  V1 extends string | true | (string | true)[],
  V2 extends string | true
> = V1 extends (string | true)[]
  ? Includes<V1, V2> extends true
    ? V1
    : [...V1, V2]
  : V1 extends V2
  ? V1
  : [V1, V2];

type AddKeyValue<
  R extends Record<string, string | true | (string | true)[]>,
  Key extends string,
  Value extends string | true
> = {
  [K in Key | keyof R]: K extends keyof R
    ? K extends Key
      ? MergeIntoArray<R[K], Value>
      : R[K]
    : Value;
};

type ParseQueryString<
  S extends string,
  CurrentKey extends string = "",
  CurrentValue extends string = "",
  Current extends "key" | "value" = "key",
  Res extends Record<string, string | true | (string | true)[]> = {}
> = S extends `&${infer Tail}`
  ? ParseQueryString<
      Tail,
      "",
      "",
      "key",
      AddKeyValue<
        Res,
        CurrentKey,
        CurrentValue extends "" ? true : CurrentValue
      >
    >
  : S extends `=${infer Tail}`
  ? ParseQueryString<Tail, CurrentKey, "", "value", Res>
  : S extends `${infer Head}${infer Tail}`
  ? ParseQueryString<
      Tail,
      Current extends "key" ? `${CurrentKey}${Head}` : CurrentKey,
      Current extends "value" ? `${CurrentValue}${Head}` : CurrentValue,
      Current,
      Res
    >
  : Current extends "key"
  ? CurrentKey extends ""
    ? Res
    : AddKeyValue<Res, CurrentKey, true>
  : CurrentValue extends ""
  ? Res
  : AddKeyValue<Res, CurrentKey, CurrentValue>;
