const withTM = require("next-transpile-modules")([
  "@gratitude-net/ui",
  "@gratitude-net/stacks-utils",
]);

module.exports = withTM({
  reactStrictMode: true,
});
