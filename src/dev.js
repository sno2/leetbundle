module.exports = async function dev() {
  const { watch } = require("rollup");
  const { inputOptions, outputOptions } = require("./rollup-options");

  const watcher = watch({ ...inputOptions, output: outputOptions });

  watcher.on("event", ({ result }) => {
    if (result) {
      result.close();
    }
  });
};
