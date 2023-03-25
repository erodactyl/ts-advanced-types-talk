type _Record<K extends string | number | symbol, T> = {
  [P in K]: T;
};

type _Partial<T> = T extends _Record<any, any>
  ? {
      [K in keyof T]?: T[K];
    }
  : T;

type _Required<T> = T extends _Record<any, any>
  ? {
      [K in keyof T]-?: T[K];
    }
  : T;

type _Readonly<T> = T extends _Record<any, any>
  ? {
      readonly [K in keyof T]: T[K];
    }
  : T;

type _Pick<T extends _Record<any, any>, K extends keyof T> = {
  [P in K]: T[P];
};

type _Excluded<U, E> = U extends E ? never : U;

type _Omit<T, K extends string | number | symbol> = Pick<
  T,
  Exclude<keyof T, K>
>;

type _Extract<T, U> = T extends U ? T : never;

type _NonNullable<T> = T extends undefined ? never : T extends null ? never : T;

type _Parameters<Fn extends (...args: any[]) => any> = Fn extends (
  ...args: infer P
) => any
  ? P
  : never;

type _ReturnType<Fn extends (...args: any[]) => any> = Fn extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type _Awaited<T> = T extends {
  then: (onfullfilled: (arg: infer R) => any) => any;
}
  ? _Awaited<R>
  : T;
