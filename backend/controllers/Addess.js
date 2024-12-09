const db = require("../connectDb/database")


exports.AddLocation = async(req, res) => {
    let ItemID = req.body.ItemID;
    let Location = req.body.Location;
    let CustomerID = 0
    let FName = ''
    let LName = ''
    let OrderID = 0
    console.log("ItemID", ItemID)
    console.log("Location", Location)
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const currentDate = day + "/" + month + "/" + year
    try {
        // ดึงข้อมูลจากฐานข้อมูล
        SELECTCustomerIDandOrderIDID =
            await db.query("SELECT `order`.CustomerID,`order`.OrderID FROM `order`, item WHERE item.OrderID = `order`.OrderID AND item.ItemID = ?", [ItemID]);
        CustomerID = SELECTCustomerIDandOrderIDID[0][0].CustomerID
        OrderID = SELECTCustomerIDandOrderIDID[0][0].OrderID
        console.log('CustomerID', CustomerID)
        console.log('OrderIDID', OrderID)
        console.log("SELECTCustomerIDandOrderIDID successful:", SELECTCustomerIDandOrderIDID);



        SELECTCustomerName =
            await db.query("SELECT FName,LName FROM `customer`  WHERE CustomerID = ?", [CustomerID]);
        console.log("SELECTCustomerName successful:", SELECTCustomerName);
        FName = SELECTCustomerName[0][0].FName
        LName = SELECTCustomerName[0][0].LName
        const Customer_NameQ = FName + " " + LName
        console.log('Customer_Name', Customer_NameQ)

        UpdateCustomerLocation =
            await db.query("UPDATE `customer` SET Location = ? WHERE CustomerID = ?", [Location, CustomerID]);
        console.log("UpdateCustomerLocation successful:", UpdateCustomerLocation);



        CreateDelivery =
            await db.query("INSERT INTO `delivery` (Delivery_Address,Delivery_Date,Customer_Name,OrderID) VALUES (?,?,?,?)", [Location, currentDate, Customer_NameQ, OrderID], );
        console.log("CreateDelivery successful:", CreateDelivery);
        const DeliveryID = CreateDelivery[0].insertId;
        console.log("CreateDelivery successful:", CreateDelivery);
        console.log("DeliveryID:", DeliveryID);

        SELECTDelivery =
            await db.query("SELECT * FROM `delivery`  WHERE DeliveryID = ?", [DeliveryID]);
        const Delivery_Address = SELECTDelivery[0][0].Delivery_Address
        const Delivery_Date = SELECTDelivery[0][0].Delivery_Date
        const Customer_Name = SELECTDelivery[0][0].Customer_Name
        OrderID = SELECTDelivery[0][0].OrderID
        console.log('Delivery_Address', Delivery_Address)
        console.log('Delivery_Date', Delivery_Date)
        console.log('Customer_Name', Customer_Name)
        console.log('OrderID', OrderID)
        console.log("SELECTDelivery successful:", SELECTDelivery);
        res.status(201).json({
            DeliveryID: DeliveryID,
            Delivery_Address: Delivery_Address,
            Delivery_Date: Delivery_Date,
            Customer_Name: Customer_Name,
            OrderID: OrderID
        });
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};