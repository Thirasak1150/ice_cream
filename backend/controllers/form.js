const db = require("../connectDb/database");

exports.FoemAddCustomer = async(req, res) => {
    const FName = req.body.FName;
    const LName = req.body.LName;
    const Phon_No = req.body.Phon_No;
    const Location = req.body.Location;

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