To make TypeScript behave **as close to Go as possible**, you combine three things:

1. **Only concrete structs (interfaces or simple object types)**
2. **No type-level programming**
3. **Compiler settings that force Go-like rules**

Here is the exact list.

---

# 1. Rename all `.js` to `.ts`

Nothing else needed at the file level.

---

# 2. Add a minimal `tsconfig.json`

Use this:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "exactOptionalPropertyTypes": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "lib": ["ES2021"],
    "target": "ES2021"
  }
}
```

This combination gives:

* **nominal-like behavior** (no accidental “anything goes”)
* **no silent missing fields**
* **all optional fields explicit**
* **no accidental widening**
* **simple type rules**

---

# 3. Only use **interfaces** (Go structs analog)

Example:

```ts
interface User {
  id: string
  email: string | null
  age: number
}
```

No:

* unions (except `T | null`)
* intersections
* mapped types
* conditional types
* generics

This keeps TS identical to Go’s mental model.

---

# 4. Avoid inheritance, DRY, or “base types”

Do NOT do this:

```ts
interface BaseUser { ... }
interface Admin extends BaseUser { ... }
```

Do this:

```ts
interface User { ... }
interface Admin { ... }
```

Just like Go, every struct stands alone.

---

# 5. Avoid generics

If you absolutely must use generics, keep them single-layer:

```ts
function wrap<T>(v: T): { value: T } {
  return { value: v }
}
```

Avoid nested, constrained, or conditional generics.

---

# 6. Avoid enums, namespaces, decorators, overloads

Go is simple. TS features that mimic complex languages should be dropped entirely.

---

# 7. No type-level logic

No:

* `Partial<T>`
* `Pick<T, K>`
* `Record<K, T>`
* `Flatten<T>`
* `Extract<T>`
* `infer`
* template literal types

All of these are the “type gymnastics” you want to eliminate.

---

# 8. Use concrete runtime checks if needed

In Go, types are real at runtime.
In TS, they are erased, so if validation matters you add explicit JS checks.

---

# Final result

With the rules above:

* TS behaves like Go in terms of clarity.
* Interfaces behave like Go structs.
* The compiler enforces simple, predictable rules.
* No type algebra.
* No structural rabbit holes.
* No inferred monster types.

You’ve essentially recreated **Go-style static typing inside TypeScript**, without any of the complexity that usually makes TS painful.
