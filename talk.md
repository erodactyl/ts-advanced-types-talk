# TypeScript Advanced Type System

## Did you know that:

1. TypeScript type system is [turing-complete](https://github.com/microsoft/TypeScript/issues/14833)
2. If you are _really_ clever, you can do very clever things in TS
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

## Implementing the base typescript utility types

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

- Generics
- Keyof Type Operator
- Typeof Type Operator
- Indexed Access Types
- Conditional Types
- Mapped Types
- Template Literal Types

### Ts-challenges repo [Github](https://github.com/type-challenges/type-challenges)

### TS utility types [gist](https://gist.github.com/erodactyl/cb445f8e159d50883c81da57d3c6b656)

### Matt Pocock (TS Wizard)

- [Twitter](https://twitter.com/mattpocockuk)
- [Youtube](https://www.youtube.com/@mattpocockuk)

### Michigan Typescript (for type challenge walkthroughs)

- [Youtube](https://www.youtube.com/@MichiganTypeScript)
