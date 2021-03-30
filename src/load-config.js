const { readFileSync } = require("fs");
const {
  name,
  main,
  source,
  unpkg,
  typings,
  types = typings,
  exports: mexports,
  module: moduleLocation,
} = JSON.parse(readFileSync("./package.json"));

if (types.endsWith("index.d.ts") === false) {
  console.error(
    "The TypeScript declaration file's location must end with `index.d.ts`.\n\nAutomatically generating a file named `index.d.ts`."
  );
}

module.exports = {
  name,
  main,
  source,
  unpkg,
  typesDir: types.split("/").slice(0, -1).join("/"),
  mexports,
  moduleLocation,
};
