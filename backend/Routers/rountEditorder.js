const express = require('express');

const router = express.Router();
const { DeleteAll, confirmOrder } = require("../controllers/Editorder")

router.delete("/DeleteAll", DeleteAll)
router.delete("/confirmOrder", confirmOrder)

module.exports = router;