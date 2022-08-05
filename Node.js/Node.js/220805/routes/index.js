const express = require("express");
const router = express.Router();
const visitor = require("../controller/VisitorController");

router.get("/", visitor.get_visitors);
router.post("/write", visitor.post_comment);

module.exports = router;