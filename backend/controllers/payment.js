const db = require("../connectDb/database")


exports.AddPayment = async(req, res) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const currentDate = day + "/" + month + "/" + year

    const Payment_Amount = req.body.Payment_Amount;
    const Payment_Method = req.body.Payment_Method;
    const Payment_Status = "Waiting"
    const Reference_Number = req.body.referenceNumber;
    const OrderID = req.body.OrderID;
    const Payment_Date = currentDate;
    console.log("Payment_Amount", Payment_Amount)
    console.log("Payment_Method", Payment_Method)
    console.log("Payment_Status", Payment_Status)
    console.log("Reference_Number", Reference_Number)
    console.log("Payment_Date", Payment_Date)
    console.log("OrderID", OrderID)
    try {
        const [AddPayment] =
        await
        db.query("INSERT INTO payment (Payment_Method, Payment_Amount, Payment_Date,Payment_Status,Reference_Number)           VALUES (?, ?, ?,?,?)", [Payment_Method, Payment_Amount, Payment_Date, Payment_Status, Reference_Number]);

        const PaymentID = AddPayment.insertId
        console.log('PaymentID', PaymentID)
        await
        db.query("INSERT INTO paying (DateTimepay,PaymentID,OrderID)   VALUES (?, ?,?)", [currentDate, PaymentID, OrderID]);


        res.status(201).json({
            message: "เพิ่มข้อมูล payment เรียบร้อย",
            PaymentID: PaymentID // ส่ง customerId กลับไปที่ client
        });

    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};