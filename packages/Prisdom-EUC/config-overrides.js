/* eslint-disable react-hooks/rules-of-hooks */
const path = require('path');

const {
  override,
  babelInclude,
  addDecoratorsLegacy
} = require('customize-cra');

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      addDecoratorsLegacy(),
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve('src'),
        path.resolve('../component-ui'),
        path.resolve('../theme'),
        path.resolve('../services')
      ])
    )(config, env)
  );
};
