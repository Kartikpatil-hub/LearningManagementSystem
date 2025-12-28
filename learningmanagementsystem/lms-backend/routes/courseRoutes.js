const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { title: "Web Development" },
    { title: "Java Programming" },
    { title: "Database Systems" },
  ]);
});

module.exports = router;
