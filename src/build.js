module.exports = async function build() {
  const { rollup } = require("rollup");
  const { inputOptions, outputOptions } = require("./rollup-options");

  const bundle = await rollup(inputOptions);

  await Promise.allSettled(outputOptions.map((opts) => bundle.write(opts)));

  await bundle.close();
};
