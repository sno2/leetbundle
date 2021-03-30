# leetbundle

A simple bundler for your TypeScript libraries.

> Leetbundle is inspired greatly by [microbundle](https://github.com/developit/microbundle), but leetbundle has different goals that are much more tailored towards library developers such as proprietary TypeScript support and opinionated architecture to make your projects easy for everyone to understand.

## Why?

We all probably understand the pains that we must go through to be able to just setup a TypeScript package for Node.js. Leetbundle abstracts out that process to a simple CLI and allows you to include the locations to the files of interest within your `package.json` to easily scaffold out your large-scale package.

## Getting Started

First, install leetbundle via the following command:

```
npm install -g leetbundle
```

After that, create a `package.json` in your project with the following content:

```json
{
  "name": "foo",
  "source": "src/index.ts",
  "types": "dist/types/index.d.ts",
  "main": "dist/index.js",
  "exports": "./dist/index.modern.js",
  "module": "dist/index.module.js",
  "unpkg": "dist/index.umd.js",
  "scripts": {
    "build": "leetbundle build",
    "dev": "leetbundle dev"
  }
}
```

Now, you can create a TypeScript file with the same location as the `source` key defined in the json file above and export some content like the following:

```ts
export const foo: string = "asdf";
```

Finally, you can run `npm run build` or `npm run dev` and your TypeScript module will be turned into a UMD, CommonJS, and ESM within milliseconds. You can also check out your type definitions in `dist/types`.

## License

[MIT](./LICENSE)
