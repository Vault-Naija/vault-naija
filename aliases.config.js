const path = require('path')

const aliasesToPathsMap = {
  '@scopes': 'scopes',
  '@commons': 'commons',
  '@counter': 'commons/Counter', // Remove after test
  '@assets': 'assets',
  '@providers': 'providers',
  '@utils': 'utils',
  '@routes': 'routes',
  '@hoc': 'hoc',
  '@hooks': 'hooks',
  '@styles': 'styles',
}
const getPathAliases = (pathMaps, configName, rootPath = 'src') => {
  const aliases = {}
  Object.entries(pathMaps).forEach(([alias, directory]) => {
    const configResolver = {
      jest: () =>
        (aliases[`${alias}/(.*)`] = `<rootDir>/${rootPath}/${directory}/$1`),
      webpack: () =>
        (aliases[`${alias}`] = path.resolve(
          __dirname,
          `${rootPath}/${directory}`
        )),
    }
    configResolver[configName]()
  })
  return aliases
}

module.exports = {
  webpackAliases: getPathAliases(aliasesToPathsMap, 'webpack'),
  jestAliases: getPathAliases(aliasesToPathsMap, 'jest'),
}
