const db = require("../connectDb/database")


exports.Addorder = async(req, res) => {
    let customerId = req.body.customerId;
    let icecream = req.body.icecream;
    let Topping = req.body.Topping;
    let sauce = req.body.sauce;
    let servingtype = req.body.servingtype;
    console.log("customerId", customerId)
    console.log("icecream", icecream)
    console.log("Topping", Topping)
    console.log("sauce", sauce)
    console.log("servingtype", servingtype)
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const currentDate = day + "/" + month + "/" + year


    console.log("date", currentDate)
    try {
        // ดึงข้อมูลจากฐานข้อมูล
        const icecreamResult = await db.query("SELECT IceCreamID, Price FROM `icecream` WHERE Flavor = ?", [icecream]);
        const toppingResult = await db.query("SELECT ToppingID, Topping_Price FROM `topping` WHERE Topping_name = ?", [Topping]);
        const sauceResult = await db.query("SELECT SauceID, Sauce_Price FROM `sauce` WHERE Sauce_Name = ?", [sauce]);
        const servingtypeResult = await db.query("SELECT ServingTypeID, Serving_Price FROM `servingtype` WHERE Type = ?", [servingtype]);
        console.log('icecreamResult', icecreamResult)
        console.log('toppingResult', toppingResult)
        console.log('sauceResult', sauceResult)
        console.log('servingtypeResult', servingtypeResult)

        // ตรวจสอบข้อมูลที่ดึงมา


        // เข้าถึงข้อมูลจากผลลัพธ์
        const icecreamID = icecreamResult[0][0].IceCreamID;
        const icecreamPrice = icecreamResult[0][0].Price;
        console.log('icecreamID', icecreamID)
        console.log('icecreamPrice', icecreamPrice)

        const toppingID = toppingResult[0][0].ToppingID;
        const toppingPrice = toppingResult[0][0].Topping_Price;

        const sauceID = sauceResult[0][0].SauceID;
        const saucePrice = sauceResult[0][0].Sauce_Price;

        const servingtypeID = servingtypeResult[0][0].ServingTypeID;
        const servingtypePrice = servingtypeResult[0][0].Serving_Price;
        const sumPrice =
            parseFloat(servingtypePrice) +
            parseFloat(saucePrice) +
            parseFloat(toppingPrice) +
            parseFloat(icecreamPrice);

        console.log('Sum of Prices:', sumPrice);
        // แสดงผลลัพธ์
        console.log('Topping:', toppingID, 'Price:', toppingPrice);
        console.log("Ice Cream:", icecreamID, 'Price:', icecreamPrice);
        console.log('Sauce:', sauceID, 'Price:', saucePrice);
        console.log('Serving Type:', servingtypeID, 'Price:', servingtypePrice);
        if (sumPrice.length != 0) {
            const [rows] =
            await
            db.query("INSERT INTO `order` (Order_Date, Order_Price, CustomerID) VALUES (?, ?, ?)", [currentDate, sumPrice, customerId]);

            const orderID = rows.insertId
            console.log('orderID', orderID)
            if (orderID.length != 0) {
                const [rows] =
                await
                db.query("INSERT INTO `item` (IceCreamID, ToppingID, SauceID, ServingTypeID	, OrderID) VALUES (?, ?, ?, ?, ?)", [icecreamID, toppingID, sauceID, servingtypeID, orderID]);
                const itemrID = rows.insertId
                console.log('itemrID', itemrID)
                res.status(201).json({
                    message: "เพิ่มข้อมูลลูกค้าเรียบร้อยแล้ว",
                    ItemrID: itemrID // ส่ง customerId กลับไปที่ client
                });
            }
        }



    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};


exports.ReadItem = async(req, res) => {
    let ItemID = req.params.ItemID;

    console.log("ItemID", ItemID)


    try {
        SELECTItemdetail =
            await db.query(
                `SELECT icecream.Flavor, topping.Topping_name, sauce.Sauce_Name, servingtype.Type
            FROM item
            JOIN icecream ON icecream.IceCreamID = item.IceCreamID
            JOIN topping ON topping.ToppingID = item.ToppingID
            JOIN sauce ON sauce.SauceID = item.SauceID
            JOIN servingtype ON servingtype.ServingTypeID = item.ServingTypeID
            WHERE item.ItemID = ?`, [ItemID]
            );

        console.log("SELECTCustomerIDandOrderIDID successful:", SELECTItemdetail);

        res.status(201).json({
            icecream: SELECTItemdetail[0][0].Flavor,
            topping: SELECTItemdetail[0][0].Topping_name,
            sauce: SELECTItemdetail[0][0].Sauce_Name,
            servingtype: SELECTItemdetail[0][0].Type,

        });
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};


exports.ReadItemPrice = async(req, res) => {
    let ItemID = req.params.ItemID;

    console.log("ItemID", ItemID)


    try {
        const SELECTItemdetail = await db.query(
            `SELECT 
                icecream.Flavor, 
                topping.Topping_name, 
                sauce.Sauce_Name, 
                servingtype.Type,
                icecream.Price, 
                topping.Topping_Price, 
                sauce.Sauce_Price, 
               servingtype.Serving_Price, 
                \`order\`.Order_Price,
                \`order\`.OrderID
             FROM item
             JOIN icecream ON icecream.IceCreamID = item.IceCreamID
             JOIN topping ON topping.ToppingID = item.ToppingID
             JOIN sauce ON sauce.SauceID = item.SauceID
             JOIN servingtype ON servingtype.ServingTypeID = item.ServingTypeID
             JOIN \`order\` ON \`order\`.OrderID = item.OrderID
             WHERE item.ItemID = ?`, [ItemID]
        );

        console.log("SELECTCustomerIDandOrderIDID successful:", SELECTItemdetail);
        res.status(201).json({
            icecream: SELECTItemdetail[0][0].Flavor,
            topping: SELECTItemdetail[0][0].Topping_name,
            sauce: SELECTItemdetail[0][0].Sauce_Name,
            servingtype: SELECTItemdetail[0][0].Type,

            icecream_Price: SELECTItemdetail[0][0].Price,
            Topping_Price: SELECTItemdetail[0][0].Topping_Price,
            Sauce_Price: SELECTItemdetail[0][0].Sauce_Price,
            Serving_Price: SELECTItemdetail[0][0].Serving_Price,
            Order_Price: SELECTItemdetail[0][0].Order_Price,
            OrderID: SELECTItemdetail[0][0].OrderID,

        });
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};


exports.cancelOrderDelivery = async(req, res) => {
    let ItemID = req.body.ItemID;

    console.log("ItemID", ItemID)
    try {
        SeleteOrderID =
            await db.query("SELECT `order`.OrderID FROM `order`, item WHERE item.OrderID = `order`.OrderID AND item.ItemID = ?", [ItemID]);
        const OrderID = SeleteOrderID[0][0].OrderID
        console.log('OrderID', OrderID)

        SeleteCustomerID =
            await db.query("SELECT `customer`.CustomerID FROM `customer`, `order` WHERE `order`.CustomerID = `customer`.CustomerID AND order.OrderID = ?", [OrderID]);
        const CustomerID = SeleteCustomerID[0][0].CustomerID
        console.log('customer', CustomerID)
        DeleteDelivery =
            await db.query("DELETE  FROM `delivery` WHERE `delivery`.OrderID =  ?", [OrderID]);

        DeleteOrder =
            await db.query("DELETE  FROM `order` WHERE `order`.OrderID =  ?", [OrderID]);

            DeleteItem=
            await db.query("DELETE  FROM `item` WHERE `item`.OrderID =  ?", [OrderID]);
            
            DeleteCustomer  =
            await db.query("DELETE  FROM `customer` WHERE `customer`.CustomerID =  ?", [CustomerID]);

        res.send("cf")
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};