const express = require('express');

const router = express.Router();
const { Addreview, ReaddatareviewAll } = require("../controllers/review")

router.get("/ReaddatareviewAll", ReaddatareviewAll)
router.post("/Addreview", Addreview)

module.exports = router;