const db = require("../connectDb/database")




exports.ReaddataOrderNotDelivery = async(req, res) => {
    const Location = ''; // สมมติว่า Location ว่างหรือเป็นค่าว่าง
    try {
        const [ReaddatareviewAll] = await db.query(
            `
        SELECT 
            payment.Payment_Method,
            item.ItemID,
            icecream.Flavor, 
            topping.Topping_name, 
            sauce.Sauce_Name, 
            servingtype.Type,
            customer.FName,
            customer.LName,
            customer.Phon_No,
            order.Order_Price
        FROM 
            \`order\` 
        JOIN 
            item ON item.OrderID = \`order\`.OrderID
        JOIN 
            icecream ON icecream.IceCreamID = item.IceCreamID
        JOIN 
            topping ON topping.ToppingID = item.ToppingID
        JOIN 
            sauce ON sauce.SauceID = item.SauceID
        JOIN 
            servingtype ON servingtype.ServingTypeID = item.ServingTypeID
        JOIN 
            customer ON customer.CustomerID = \`order\`.CustomerID
        JOIN 
            paying ON paying.OrderID = \`order\`.OrderID
        JOIN 
            payment ON payment.PaymentID = paying.PaymentID
        WHERE 
            customer.Location  = ?  AND payment.Payment_Status = ?
        `, [Location, "Waiting"] // ส่งค่าของ Location ที่จะใช้ใน query
        );
        console.log(ReaddatareviewAll);
        res.json(ReaddatareviewAll);
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }

};

exports.ReaddataOrderDelivery = async(req, res) => {
    const Location = ''; // สมมติว่า Location ว่างหรือเป็นค่าว่าง
    try {
        // ดึงข้อมูลจากฐานข้อมูล
        const [ReaddatareviewAll] = await db.query(
            `
        SELECT 
            payment.Payment_Method,
            item.ItemID,
            icecream.Flavor, 
            topping.Topping_name, 
            sauce.Sauce_Name, 
            servingtype.Type,
            customer.Phon_No,
            delivery.Customer_Name,
            delivery.Delivery_Address,
            delivery.Customer_Name,
            order.Order_Price
        FROM 
            \`order\` 
        JOIN 
            item ON item.OrderID = \`order\`.OrderID
        JOIN 
            delivery ON delivery.OrderID = \`order\`.OrderID
        JOIN 
            icecream ON icecream.IceCreamID = item.IceCreamID
        JOIN 
            topping ON topping.ToppingID = item.ToppingID
        JOIN 
            sauce ON sauce.SauceID = item.SauceID
        JOIN 
            servingtype ON servingtype.ServingTypeID = item.ServingTypeID
        JOIN 
            customer ON customer.CustomerID = \`order\`.CustomerID
        JOIN 
            paying ON paying.OrderID = \`order\`.OrderID
        JOIN 
            payment ON payment.PaymentID = paying.PaymentID
        WHERE 
            customer.Location  != ?  AND payment.Payment_Status = ?
        `, [Location, "Waiting"] // ส่งค่าของ Location ที่จะใช้ใน query
        );
        console.log(ReaddatareviewAll);
        res.json(ReaddatareviewAll);
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }

};