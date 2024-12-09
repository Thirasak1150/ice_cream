const express = require('express');

const router = express.Router();
const { AddPayment } = require("../controllers/payment")

router.post("/AddPayment", AddPayment)

module.exports = router;