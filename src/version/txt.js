const objectPath = require("object-path");

const BaseVersioning = require("./base");
const bumpVersion = require("../helpers/bumpVersion");

module.exports = new (class Txt extends BaseVersioning {
  /**
   * Bumps the version in the package.json
   *
   * @param {!string} releaseType - The type of release
   * @return {*}
   */
  bump = (releaseType) => {
    // Read the file
    const fileContent = this.read();
    const oldVersion = objectPath.get(fileContent, this.versionPath, null);

    // Get the new version
    this.newVersion = bumpVersion(releaseType, oldVersion);

    // Update the file
    this.update(fileContent);
  };
})();
