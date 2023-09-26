export default class Validator {
  static validateUsername(username) {
    const usernameRegexp = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z]$/;
    if (username.match(usernameRegexp) && !username.match(/\d{4,}/)) {
      return true;
    }
    return false;
  }
}
