# JSTypes

This setup demos the least amount of Typescript possible in a purely functional and primitive system.

If your goal is:

> Just tell me what fields exist and warn me if I typo something.

Then this current system is the correct, stable, minimal solution.

Your `.d.ts` types become nothing more than **annotated documentation objects**.

* **Plain JavaScript**
* **`.d.ts` files with simple `interface` definitions**
* **all fields optional**
* **minimal unions (`string | null` where needed)**
* **no generics**
* **no mapped types**
* **no conditional types**
* **no type-level transformations**

This gives you:

* documentation
* autocomplete
* field-existence warnings
* full editor help
* zero strictness
* zero type algebra
* zero compiler involvement
* zero TS weirdness
* zero overhead

What you get is exactly what you wanted:

- ✔ plain JS
- ✔ low-friction
- ✔ readable
- ✔ predictable
- ✔ docs in the editor
- ✔ warnings only when accessing wrong fields
- ✔ no complexity explosion
- ✔ no TS “smartness” getting in the way
- ✔ no config
- ✔ no advanced typing bullshit

Created by [Tekki AS](https://tekki.no)
