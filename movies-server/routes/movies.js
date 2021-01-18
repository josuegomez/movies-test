const express = require("express");
const router = express.Router();
const { list, show, create, update, destroy }  = require('../controllers/movieController')
const { movieValidator } = require('../validators/movieValidator');

router.get("/", list);
router.post("/", movieValidator, create);
router.get("/:id", show);
router.put("/:id", movieValidator, update);
router.delete("/:id", destroy);

module.exports = router;
