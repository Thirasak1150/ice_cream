const express = require('express');

const router = express.Router();
const { FoemAddCustomer,DeleteCustomer } = require("../controllers/form")

router.post("/FoemAddCustomer", FoemAddCustomer)
router.delete("/DeleteCustomer", DeleteCustomer)

module.exports = router;