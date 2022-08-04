module.exports = {
  validateNewAccount(accountInfo) {
    if (
      accountInfo.hasOwnProperty("first_name") &&
      accountInfo.hasOwnProperty("last_name") &&
      accountInfo.hasOwnProperty("email") &&
      accountInfo.hasOwnProperty("password") &&
      accountInfo.hasOwnProperty("pincode") &&
      accountInfo.hasOwnProperty("image")
    ) {
      return true;
    } else {
      return false;
    }
  },

  validateCredentials(loginInfo) {
    if (
      loginInfo.hasOwnProperty("email") &&
      loginInfo.hasOwnProperty("password")
    ) {
      return true;
    } else {
      return false;
    }
  },
  
  validateCredentials(recipeInfo) {
    if (recipeInfo.hasOwnProperty("email")) {
      return true;
    } else {
      return false;
    }
  },
};
