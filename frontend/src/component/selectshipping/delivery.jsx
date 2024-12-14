import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";  // นำเข้า axios

function Delivery() {
  const navigate = useNavigate();  // สร้างตัวแปร navigate
  const params = useParams();
  const ItemID = params.ItemID;

  const [data,setData] = useState({
    DeliveryID: "D12345",
    Delivery_Address: "123 Main St, Springfield",
    Delivery_Date: "2024-12-08",
    Customer_Name: "John Doe",
    OrderID: "O67890",
  })
console.log(data)

  const [formdata, Setformdata] = useState({
    ItemID: ItemID,
    Location: "",  // ที่อยู่เริ่มต้นเป็นค่าว่าง
  });
  console.log(formdata)
  const [checkaddress, setCheckAddress] = useState(false);

  // ฟังก์ชั่นสำหรับบันทึกข้อมูล
  const handleSaveData = async () => {
    console.log("Saved data:", formdata); // แสดงข้อมูลที่บันทึก
    setCheckAddress(!checkaddress);  // เปลี่ยนสถานะการแสดง
  
    try {
      const response = await axios.put("http://localhost:3000/AddLocation", formdata);
  
      // ตรวจสอบว่าการส่งข้อมูลสำเร็จ
      if (response.status === 201) {
        console.log("ข้อมูลถูกส่งสำเร็จ:", response.data);
        setData({
          ...data,
          Location: response.data.Delivery_Address,  // ตัวอย่างการอัพเดทที่อยู่
          DeliveryID: response.data.DeliveryID,
          Delivery_Address: response.data.Delivery_Address,
          Delivery_Date: response.data.Delivery_Date,
          Customer_Name: response.data.Customer_Name,
          OrderID: response.data.OrderID,
        });
  
        // แสดงข้อมูลที่อัพเดท
        console.log('Delivery_Address', response.data.Delivery_Address);
        console.log('Delivery_Date', response.data.Delivery_Date);
        console.log('Customer_Name', response.data.Customer_Name);
        console.log('OrderID', response.data.OrderID);


        // เปลี่ยนเส้นทางไปยังหน้าอื่นหลังจากบันทึกข้อมูล
        // ใช้ data.DeliveryID หลังจากอัพเดทแล้ว
        
        console.log("DeliveryID ID ที่สร้างใหม่:", response.data.DeliveryID);
      } else {
        console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
    }
  };
  const handleNextsummayselecticecream = async () => {
    navigate(`/Summayselecticecream/${ItemID}`);
  };
  

  // ฟังก์ชั่นสำหรับจัดการกับการอัพเดทค่า address
  const handleAddressChange = (event) => {
    Setformdata({
      ...formdata,
      Location: event.target.value,  // อัพเดทค่า Location ใน formdata
    });
  };

  return (
    <body className="overflow-hidden w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      {checkaddress ? (
        <div className="flex justify-center flex-col items-center">
          <div>
            <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              Delivery
            </h1>
          </div>
          <div className=" bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg max-w-[400px] w-full  ml-10 mt-[2%] flex flex-col
             justify-center items-center  p-4 shadow-lg ">
            <div className="mb-1 mt-0">
              <h1 className="text-lg font-bold mb-2  text-white">
                Delivery ID: {data.DeliveryID}
              </h1>
            </div>
            <div className="mb-1 mt-0">
              <h1 className="text-lg font-bold mb-2 text-white">
                Delivery_Address: {data.Delivery_Address}
              </h1>
              <h1 className="text-lg font-bold mb-2 text-white">Delivery_Date: {data.Delivery_Date}</h1>
            </div>
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2 text-white">Customer_Name: {data.Customer_Name}</h1>
              <h1 className="text-lg font-bold mb-2 text-white">
                Order ID: {data.OrderID}
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-end h-[80px] mt-[100px] px-[150px]">
            <button
              type="button"
              onClick={handleNextsummayselecticecream}
              className="text-white text-xl h-[50px] w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <div>
            <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              Delivery
            </h1>
          </div>
          <div className="w-[600px] mt-10 flex justify-center">
            <div className="w-[100%]">
              <label className="block mb-5 text-4xl font-medium text-white text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-lg shadow-lg">
                Address
              </label>
              <textarea
                value={formdata.Location}  // กำหนดค่า value ของ textarea จาก formdata
                onChange={handleAddressChange}  // อัพเดทค่าเมื่อมีการเปลี่ยนแปลง
                className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="w-full flex justify-end h-[80px] mt-[100px] px-[150px]">
            <button
              type="button"
              onClick={handleSaveData}  // เมื่อกดปุ่มจะบันทึกข้อมูล
              className="text-white text-xl h-[50px] w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </body>
  );
}

export default Delivery;
