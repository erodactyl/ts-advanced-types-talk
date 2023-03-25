/**
 * `Record<Keys, Type>`
 *
 * Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 */
type _Record<K extends string | number | symbol, T> = any;

/**
 * `Parial<Type>`
 *
 * Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
 */
type _Partial<T> = any;

/**
 * Required<Type>
 *
 * Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
 */
type _Required<T> = any;

/**
 * `Readonly<Type>`
 *
 * Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
 */
type _Readonly<T> = any;

/**
 * `Pick<Type, Keys>`
 *
 * Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
 */
type _Pick<T extends _Record<any, any>, K extends keyof T> = any;

/**
 * `Omit<Type, Keys>`
 *
 * Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
 */
type _Omit<
  T extends _Record<any, any>,
  K extends string | number | symbol
> = any;

/**
 * `Exclude<UnionType, ExcludedMembers>`
 *
 * Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
 */
type _Excluded<U, E> = any;

/**
 * `Extract<Type, Union>`
 *
 * Constructs a type by extracting from Type all union members that are assignable to Union.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
 */
type _Extract<T, U> = any;

/**
 * `NonNullable<Type>`
 *
 * Constructs a type by excluding null and undefined from Type.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
 */
type _NonNullable<T> = any;

/**
 *  `Parameters<Type>`
 *
 *  Constructs a tuple type from the types used in the parameters of a function type Type.
 *
 *  https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
 */
type _Parameters<Fn extends (...args: any[]) => any> = any;

/**
 * `ReturnType<Type>`
 *
 * Constructs a type consisting of the return type of function Type.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
 */
type _ReturnType<Fn extends (...args: any[]) => any> = any;

/**
 * `Awaited<Type>`
 *
 * This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype
 */
type _Awaited<T> = any;
