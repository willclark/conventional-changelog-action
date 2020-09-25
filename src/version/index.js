const Json = require('./json')
const Git = require('./git')
const Yaml = require('./yaml')
const Txt = require('./txt')
const Toml = require('./toml')

module.exports = (fileExtension) => {
  switch (fileExtension.toLowerCase()) {
    case 'json':
      return Json

    case 'yaml':
    case 'yml':
      return Yaml

    case 'toml':
      return Toml

    case 'git':
      return Git

    case 'txt':
      return Txt

    default:
      return null
  }
}
