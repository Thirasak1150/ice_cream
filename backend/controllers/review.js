const db = require("../connectDb/database")



exports.ReaddatareviewAll = async(req, res) => {

    try {
        // ดึงข้อมูลจากฐานข้อมูล
        [ReaddatareviewAll] =
        await db.query(
            `
      SELECT 
        icecream.Flavor, 
        topping.Topping_name, 
        sauce.Sauce_Name, 
        servingtype.Type,
        messege.Reviewer_Name,
        messege.Rating,
        messege.Comment
      FROM 
        messege
      JOIN 
        item ON messege.Item_ID = item.ItemID
      JOIN 
        icecream ON icecream.IceCreamID = item.IceCreamID
      JOIN 
        topping ON topping.ToppingID = item.ToppingID
      JOIN 
        sauce ON sauce.SauceID = item.SauceID
      JOIN 
        servingtype ON servingtype.ServingTypeID = item.ServingTypeID;
    `
        );
        console.log(ReaddatareviewAll)
        res.json(ReaddatareviewAll)
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};


exports.Addreview = async(req, res) => {
    let ItemID = req.body.ItemID;
    let rating = req.body.rating;
    let reviewText = req.body.reviewText;
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const currentDate = day + "/" + month + "/" + year
    let FName;
    let LName;
    let CustomerID;

    console.log("ItemID", ItemID)
    console.log("rating", rating)
    console.log("reviewText", reviewText)
    try {
        // ดึงข้อมูลจากฐานข้อมูล
        SELECTCustomer =
            await db.query("SELECT `order`.CustomerID FROM `order`, item WHERE item.OrderID = `order`.OrderID AND item.ItemID = ?", [ItemID]);
        CustomerID = SELECTCustomer[0][0].CustomerID
        console.log('CustomerID', CustomerID)



        SELECTCustomerName =
            await db.query("SELECT FName,LName FROM `customer`  WHERE CustomerID = ?", [CustomerID]);
        FName = SELECTCustomerName[0][0].FName
        LName = SELECTCustomerName[0][0].LName
        const Customer_NameQ = FName + " " + LName
        console.log('Customer_Name', Customer_NameQ)


        const [AddreviewIntablemessage] =
        await
        db.query("INSERT INTO `messege` (Reviewer_Name, Rating,Comment,Review_Date,Item_ID) VALUES (?, ?, ?,?,?)", [Customer_NameQ, rating, reviewText, currentDate, ItemID]);
        console.log("เพิ่มข้อมูลตาราง message สำเร็จ");
        const MessegeID = AddreviewIntablemessage.insertId


        const [AddreviewIntablesending_message] =
        await
        db.query("INSERT INTO `sending_message` (	CustomerID, MessegeID,DateTimeSend) VALUES (?, ?, ?)", [CustomerID, MessegeID, currentDate]);

        console.log("เพิ่มข้อมูตาราง sending_message สำเร็จ");
        res.status(201).json({
            message: "เพิ่มข้อมูลรีวิวเรียบร้อยแล้ว",
        });



    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};