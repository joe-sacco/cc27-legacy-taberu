module.exports = {
  validateNewAccount(accountInfo) {
    if (
      accountInfo.hasOwnProperty("first_name") &&
      accountInfo.hasOwnProperty("last_name") &&
      accountInfo.hasOwnProperty("email") &&
      accountInfo.hasOwnProperty("password") &&
      accountInfo.hasOwnProperty("pincode")
      // accountInfo.hasOwnProperty("image")
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

  validateNewRecipe(recipeInfo) {
    if (recipeInfo.hasOwnProperty("name")) {
      return true;
    } else {
      return false;
    }
  },

  validateNewFamily(faimlyInfo) {
    if (
      faimlyInfo.hasOwnProperty("account_id") &&
      faimlyInfo.hasOwnProperty("first_name") &&
      faimlyInfo.hasOwnProperty("last_name")
    ) {
      return true;
    } else {
      return false;
    }
  },
  validateFamilyAccountId(accountId) {
    if (typeof accountId === "number") {
      return true;
    } else {
      return false;
    }
  },

  validateRecipePlan(recipePlanInfo) {
    if (
      recipePlanInfo.hasOwnProperty("account_id") &&
      recipePlanInfo.hasOwnProperty("recipe_id") &&
      recipePlanInfo.hasOwnProperty("review_request") &&
      recipePlanInfo.hasOwnProperty("date")
    ) {
      return true;
    } else {
      return false;
    }
  },
};
