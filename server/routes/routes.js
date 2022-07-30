const express = require("express");
const router = express.Router({ caseSensitive: true });

router.use(
  "/user",
  require("./user.route")
);

module.exports = router;
