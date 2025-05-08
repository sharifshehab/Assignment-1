# Differences between interfaces and types in TypeScript.

In TypeScript, both Type Alias(type) and Type Interface(interface) are used to define the data format, but they have certain advantages over each other. 

## Type Alias:
- **<code>type</code> can be used for <code>Primitive</code>, <code>Non-primitive</code>, and <code>Tuple</code> types.**
- **<code>type</code> is preferable when we want to merge multiple <code>type</code> into a single <code>type</code> using Union(|).**
- **Firebase**
- **Tanstack Query**
- **Axios**


## Example:
-type FrontendDeveloper = "UX Developer" | "React Developer"
-type BackendDeveloper = "Express Developer" | "Node Developer"

-type FullStackDeveloper = FrontendDeveloper | BackendDeveloper 

-const newDeveloper: FullStackDeveloper = "Node Developer" or "UX Developer" or "Express Developer" or "UX Developer" (Any one of these options can be used here)
