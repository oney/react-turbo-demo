
const {
  useBabelRc,
  override,
} = require("customize-cra");

console.log('sdfasf');
module.exports = override(
  useBabelRc(),
);