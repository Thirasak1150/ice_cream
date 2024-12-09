const express = require('express');

const router = express.Router();
const { Addorder, ReadItem, ReadItemPrice } = require("../controllers/order")


router.get("/ReadItem/:ItemID", ReadItem)
router.get("/ReadItemPrice/:ItemID", ReadItemPrice)
router.post("/Addorder", Addorder)

module.exports = router;