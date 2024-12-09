const db = require("../connectDb/database")


exports.DeleteAll = async(req, res) => {
    let ItemID = req.body.ItemID;

    console.log("ItemID", ItemID)
    try {
        SeleteOrderID =
            await db.query("SELECT `order`.OrderID FROM `order`, item WHERE item.OrderID = `order`.OrderID AND item.ItemID = ?", [ItemID]);
        const OrderID = SeleteOrderID[0][0].OrderID
        console.log('OrderID', OrderID)

        SeletePaymentID =
            await db.query("SELECT `paying`.PaymentID FROM `paying`, `order` WHERE `order`.OrderID = `paying`.OrderID AND order.OrderID = ?", [OrderID]);
        const PaymentID = SeletePaymentID[0][0].PaymentID
        console.log('PaymentID', PaymentID)

        SeleteCustomerID =
            await db.query("SELECT `customer`.CustomerID FROM `customer`, `order` WHERE `order`.CustomerID = `customer`.CustomerID AND order.OrderID = ?", [OrderID]);
        const CustomerID = SeleteCustomerID[0][0].CustomerID
        console.log('customer', CustomerID)



        DeletePayment =
            await db.query("DELETE  FROM `payment` WHERE `payment`.PaymentID =  ?", [PaymentID]);


        DeletePaying =
            await db.query("DELETE  FROM `paying` WHERE `paying`.PaymentID =  ?", [PaymentID]);


        DeleteDelivery =
            await db.query("DELETE  FROM `delivery` WHERE `delivery`.OrderID =  ?", [OrderID]);

        DeleteOrder =
            await db.query("DELETE  FROM `order` WHERE `order`.OrderID =  ?", [OrderID]);

        DeleteItem =
            await db.query("DELETE  FROM `item` WHERE `item`.OrderID =  ?", [OrderID]);

        res.send("cf")
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};

exports.confirmOrder = async(req, res) => {
    let ItemID = req.body.ItemID;

    console.log("ItemID", ItemID)

    try {
        SeleteOrderID =
            await db.query("SELECT `order`.OrderID FROM `order`, item WHERE item.OrderID = `order`.OrderID AND item.ItemID = ?", [ItemID]);
        const OrderID = SeleteOrderID[0][0].OrderID
        console.log('OrderID', OrderID)

        SeletePaymentID =
            await db.query("SELECT `paying`.PaymentID FROM `paying`, `order` WHERE `order`.OrderID = `paying`.OrderID AND order.OrderID = ?", [OrderID]);
        const PaymentID = SeletePaymentID[0][0].PaymentID
        console.log('PaymentID', PaymentID)
        UPDATAEPayment =
            await db.query("UPDATE `payment` SET Payment_Status = ? WHERE PaymentID = ?", ["payed", PaymentID]);




        res.send("cf")
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};