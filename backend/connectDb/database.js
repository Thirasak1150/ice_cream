const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Plankton273855",
    database: "ice_cream",
}).promise();

db.connect()
    .then(() => {
        console.log("เชื่อมต่อฐานข้อมูลสำเร็จ!");
    })
    .catch((err) => {
        console.error("ไม่สามารถเชื่อมต่อฐานข้อมูลได้:", err.message);
    });

module.exports = db;