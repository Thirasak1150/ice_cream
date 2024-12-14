const express = require('express');

const router = express.Router();
const { Addorder, ReadItem, ReadItemPrice,cancelOrderDelivery } = require("../controllers/order")


router.get("/ReadItem/:ItemID", ReadItem)
router.get("/ReadItemPrice/:ItemID", ReadItemPrice)
router.post("/Addorder", Addorder)
router.delete("/cancelOrderDelivery", cancelOrderDelivery)

module.exports = router;