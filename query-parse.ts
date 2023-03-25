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

type test = ParseQueryString<"k1=v1&k2=v2&k2=v3&k3">;
