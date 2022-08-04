const familyModel = require("../model/family");
const validator = require("./validation");

module.exports = {
  async createFamily(req, res) {
    const familyInfo = await req.body;
    if (validator.validateNewFamily(familyInfo)) {
      await familyModel.createFamily(familyInfo);
      res.status(201).send("FAMILY ADDED");
    } else {
      res.status(406).send("BAD DATA. TRY AGAIN");
    }
  },
}