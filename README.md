# Differences between interfaces and types in TypeScript.

In TypeScript, both Type Alias(type) and Type Interface(interface) are used to define the data format, but they have certain advantages over each other. When declaring Type Alias, we use type keyword, type-name with equality sign (=) and when declaring Type Interface we only need to use the interface keyword and the interface-name with curly braces ({}). So, interface gives us a more cleaner and simpler format.  But for complex. But for Unions or complex data type (e.g, tuple) Type Alias is the best choice.


## Type Alias:
- **<code>type</code> can be used for <code>Primitive</code>, <code>Non-primitive</code>, and <code>Tuple</code> types.**
- **<code>type</code> is preferable when we want to merge multiple <code>type</code> into a single <code>type</code> using Union(|).**
## Example:
```bash
type FrontendDeveloper = "UX Developer" | "React Developer"
type BackendDeveloper = "Express Developer" | "Node Developer"
type FullStackDeveloper = FrontendDeveloper | BackendDeveloper 

const newDeveloper: FullStackDeveloper = "Node Developer" or "UX Developer" or "Express Developer" or "React Developer" (Any one of these options can be used here)
```


## Type Interface:
- **<code>interface</code> can only be used for <code>Object</code> data type.**
- **<code>interface</code> is simpler for adding a new data type to the existing <code>interface</code>.**
## Example:
```bash
interface Product {
    name: string;
    price: number;
}
interface DigitalProduct extends Product {
    model: string;
}

const newProduct: DigitalProduct = {
    name: Nano Bit,
    price: 259,
    model: xxl
}
```



# Union and Intersection types in TypeScript.


Union(|) and Intersection (&) in TypeScript are used for types. In JavaScript, we used something similar to Ternary Operator. But  Union(|) and Intersection are type operators, and Ternary Operators are logical conditions.

- **Union(|): We use Union, it means that the value can be several types.**
- **Intersection(&&): We use Intersection, to combine multiple "types" or to add an extra type.**

## Union Example:
```bash
type FrontendDeveloper = "UX Developer" | "React Developer"

const newDeveloper: FrontendDeveloper = "UX Developer" or "React Developer" (Any one of these options can be used here)
```

