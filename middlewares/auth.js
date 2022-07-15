const { User } = require("../models/user");
const { resAuthError } = require("../utils/responses");
const { extractBearerToken } = require("../utils/tokens");
module.exports.isAuthorized = function (req, res, next) {};
