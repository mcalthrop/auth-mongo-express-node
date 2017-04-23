// Duplicate a JS object.
// See: http://stackoverflow.com/a/5344074
function duplicateObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

class Utils {
  static get duplicateObject() {
    return duplicateObject;
  }
}

module.exports = Utils;
