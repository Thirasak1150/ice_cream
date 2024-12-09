const express = require('express');

const router = express.Router();
const { ReaddataOrderNotDelivery, ReaddataOrderDelivery } = require("../controllers/Employee")

router.get("/ReaddataOrderNotDelivery", ReaddataOrderNotDelivery)
router.get("/ReaddataOrderDelivery", ReaddataOrderDelivery)

module.exports = router;