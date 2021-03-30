const sade = require("sade");

const prog = sade("leetbundle");

prog.version(require("../package.json").version);

prog
  .command("dev")
  .describe("Builds the project on each file save in development.")
  .action((_) => {
    require("./dev")();
  });

prog
  .command("build")
  .describe("Builds the project.")
  .action((_) => {
    require("./build")();
  });

prog.parse(process.argv);
