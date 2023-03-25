# TypeScript Advanced Type System

## Did you know that:

1. TypeScript type system is [turing-complete](https://github.com/microsoft/TypeScript/issues/14833)
2. If you are _really_ clever, you can do complex calculations in TS
3. In this talk we'll try to be really clever
4. I might not be that clever, I am going to look at solutions in this talk when I get stuck

## Types & Generics Intro

```typescript
const map = <T, U>(list: T[], mapper: (item: T) => U) => {
  const result: U[] = [];

  for (let i = 0; i < list.length; i++) {
    result.push(mapper(list[i]));
  }

  return result;
};
```

## Other type helpers

1. keyof

```typescript
type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"
```

2. typeof

```typescript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
```

3. Indexed access types

```typescript
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // number

type Value = Person[keyof Person]; // number | string | boolean
```

4. Conditional types

```typescript
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string; // number
```

5. Mapped types

```typescript
// create an object with the same keys as `Type` where every value type is a boolean
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

6. Mapped type modifiers

```typescript
// Removes 'readonly' attributes from a type's properties (-readonly), and makes it required (-?)
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]-?: Type[Property];
};
```

7. Template literal types

```typescript
type CSSSize = `${number} ${"px" | "rem"}`;
```

## Implementing the base typescript utility types

```typescript
type _Record<K extends string | number | symbol, T> = {
  [P in K]: T;
};
```

## Challenges

1. First of array
2. Concat
3. Zip
4. Printf
5. Sum

## Advanced

1. Sort
2. ParseQueryString

## Resources

### TypeScript handbook [creating types from types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

### Ts-challenges [repo](https://github.com/type-challenges/type-challenges)

### TS utility types [gist](https://gist.github.com/erodactyl/cb445f8e159d50883c81da57d3c6b656)

### Matt Pocock (TS Wizard)

- [Twitter](https://twitter.com/mattpocockuk)
- [Youtube](https://www.youtube.com/@mattpocockuk)

### Michigan Typescript (for type challenge walkthroughs)

- [Youtube](https://www.youtube.com/@MichiganTypeScript)
