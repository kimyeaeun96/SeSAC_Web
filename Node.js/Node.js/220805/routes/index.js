const express = require("express");
const router = express.Router();
const visitor = require("../controller/VisitorController");

router.get("/", visitor.get_visitors);
router.post("/write", visitor.post_comment);
router.get("/get", visitor.get_visitor);
router.patch("/edit", visitor.patch_comment);
router.delete("/delete", visitor.delete_comment);

module.exports = router;
