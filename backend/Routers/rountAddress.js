const express = require('express');

const router = express.Router();
const { AddLocation } = require("../controllers/Addess")

router.put("/AddLocation", AddLocation)

module.exports = router;