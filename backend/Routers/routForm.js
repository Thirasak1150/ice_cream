const express = require('express');

const router = express.Router();
const { FoemAddCustomer } = require("../controllers/form")

router.post("/FoemAddCustomer", FoemAddCustomer)

module.exports = router;