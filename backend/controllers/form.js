const db = require("../connectDb/database");

exports.FoemAddCustomer = async(req, res) => {
    const FName = req.body.FName;
    const LName = req.body.LName;
    const Phon_No = req.body.Phon_No;
    const Location = req.body.Location;
    console.log(FName)
    console.log(LName)
    console.log(Phon_No)
    console.log(Location)
    try {
        // ทำการแทรกข้อมูลลงในตาราง customer
        const [rows] = await db.query(
            "INSERT INTO customer (FName, LName, Phon_No, Location) VALUES (?, ?, ?, ?)", [FName, LName, Phon_No, Location]
        );

        // ส่งค่าของ customerid ที่ถูกสร้างขึ้นโดย AUTO_INCREMENT
        const customerId = rows.insertId;

        console.log("เพิ่มข้อมูลสำเร็จ, customerid:", customerId);
        res.status(201).json({
            message: "เพิ่มข้อมูลลูกค้าเรียบร้อยแล้ว",
            customerId: customerId // ส่ง customerId กลับไปที่ client
        });
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};

exports.DeleteCustomer = async (req, res) => {
    const CustomerID = req.body.CustomerID;

    console.log('CustomerID:', CustomerID);

    try {
        // ลบข้อมูลในตาราง customer
        const [result] = await db.query(
            "DELETE FROM `customer` WHERE CustomerID = ?", [CustomerID]
        );

        if (result.affectedRows > 0) {
            console.log("ลบข้อมูลสำเร็จ, customerId:", CustomerID);
            res.status(201).json({
                message: "ลบข้อมูลลูกค้าเรียบร้อยแล้ว",
                customerId: CustomerID // ส่ง customerId กลับไปที่ client
            });
        } else {
            console.log("ไม่พบลูกค้าที่จะลบ, customerId:", customerId);
            res.status(404).json({
                message: "ไม่พบลูกค้าที่ต้องการลบ",
            });
        }
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};
