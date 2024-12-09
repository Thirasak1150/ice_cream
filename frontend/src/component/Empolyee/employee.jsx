import React, { useState, useEffect } from "react";
import axios from "axios"; // นำเข้า axios
import { useParams,useNavigate } from "react-router-dom";

function Employee() {
    const navigate = useNavigate(); 
    const [orderDeliverry, SetorderDeliverry] = useState([{
        Payment_Method: '',
        ItemID:"",
        Flavor: '',
        Topping_name: '',
        Sauce_Name: '',
        Type: '',
        Phon_No: '',
        Customer_Name: ' ',
        Delivery_Address: '',
        Order_Price: ''
    }]);
    const [orderNotDelivery, SetorderNotDelivery] = useState([{
        Payment_Method: '',
        ItemID:"",
        Flavor: '',
        Topping_name: '',
        Sauce_Name: '',
        Type: '',
        FName: '',
        LName: '',
        Phon_No: '',
        Order_Price: ''
    }]);

    const LoaddataorderDeliverry = async () => {
        try {
            const response = await axios.get("http://localhost:3000/ReaddataOrderDelivery");

            if (response.status === 200) {
                console.log("ข้อมูลถูกส่งสำเร็จ:", response.data);
                SetorderDeliverry(response.data);
            } else {
                console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
        }
    };

    const LoaddataorderNotDelivery = async () => {
        try {
            const response = await axios.get("http://localhost:3000/ReaddataOrderNotDelivery");

            if (response.status === 200) {
                console.log("ข้อมูลถูกส่งสำเร็จ:", response.data);
                SetorderNotDelivery(response.data);
            } else {
                console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
        }
    };
    const NextReview = async () => {
        navigate(`/Employeereviewproduct`);
    };
  
    useEffect(() => {
        LoaddataorderDeliverry();
        LoaddataorderNotDelivery();
    
        // ตั้งเวลาให้โหลดข้อมูลใหม่ทุกๆ 5 วินาที
        const interval = setInterval(() => {
            LoaddataorderDeliverry();
            LoaddataorderNotDelivery();
        }, 5000);
    
        return () => clearInterval(interval);
    }, []);
    const handleDelete = async(id) => {
        try {
            const response = await axios.delete("http://localhost:3000/DeleteAll", {
                data: { ItemID: id }
            });
    
            if (response.status === 200) {
                console.log("ข้อมูลถูกลบสำเร็จ:", response.data);
                navigate(`/Employee`);
          
            } else {
                console.error("เกิดข้อผิดพลาดในการลบข้อมูล");
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
        }

      };

      const confirmOrder = async(id) => {
        try {
            const response = await axios.delete("http://localhost:3000/confirmOrder", {
                data: { ItemID: id }
            });
    
            if (response.status === 200) {
                console.log("ข้อมูลถูกลบสำเร็จ:", response.data);
                navigate(`/Employee`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
              
            } else {
                console.error("เกิดข้อผิดพลาดในการลบข้อมูล");
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
        }

      };
    return (
        <div className="w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
            <div className="flex justify-center items-center text-[40px] mb-8 gap-2">
                <div className="bg-red-400 px-4 py-2 rounded-lg">คำสั่งซื้อทั้งหมด</div>
                <div className="bg-yellow-400 px-4 py-2 rounded-lg " onClick={NextReview}>ดู Review</div>
            </div>

            <div className="flex justify-around space-x-4">
                {/* แสดงรายการที่จัดส่งแล้ว */}
                <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-center mb-4">คำสั่งซื้อที่จัดส่งไปที่บ้าน</h2>
                    <div className="space-y-4">
                        {orderDeliverry.map((order, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <h3 className="font-semibold">{order.Customer_Name}</h3>
                               
                                <p>รสชาติ: {order.Flavor}</p>
                                <p>ท็อปปิ้ง: {order.Topping_name}</p>
                                <p>ซอส: {order.Sauce_Name}</p>
                                <p>ประเภท: {order.Type}</p>
                                <p>หมายเลขโทรศัพท์: {order.Phon_No}</p>
                                <p>ที่อยู่จัดส่ง: {order.Delivery_Address}</p>
                                <p>ราคา: {order.Order_Price} บาท</p>
                                <p>ชำระด้วย: {order.Payment_Method} </p>
                                <div className="flex justify-between mt-2">
                                    <button
                                        onClick={() => confirmOrder(order.ItemID)}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        ยืนยันการชำระเงิน
                                    </button>
                                    <button
                                        onClick={() => handleDelete(order.ItemID)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        ยกเลิกออเดอร์
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* แสดงรายการที่ยังไม่จัดส่ง */}
                <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold text-center mb-4">คำสั่งซื้อที่ทานที่ร้าน</h2>
                    <div className="space-y-4">
                        {orderNotDelivery.map((order, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <h3 className="font-semibold">{order.FName} {order.LName}</h3>
                                <p>รสชาติ: {order.Flavor}</p>
                                <p>ท็อปปิ้ง: {order.Topping_name}</p>
                                <p>ซอส: {order.Sauce_Name}</p>
                                <p>ประเภท: {order.Type}</p>
                                <p>หมายเลขโทรศัพท์: {order.Phon_No}</p>
                                <p>ราคา: {order.Order_Price} บาท</p>
                                <p>ชำระด้วย: {order.Payment_Method} </p>
                                <div className="flex justify-between mt-2">
                                    <button
                                        onClick={() => confirmOrder(order.ItemID)}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        ยืนยันการชำระเงิน
                                    </button>
                                    <button
                                        onClick={() => handleDelete(order.ItemID)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        ยกเลิกออเดอร์
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employee;
