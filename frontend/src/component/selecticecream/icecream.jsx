import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";  
function icecream() {
  const navigate = useNavigate(); // สร้างตัวแปร navigate
  const params = useParams();
  const customerId = params.id;
  const [icecream, seticecream] = useState("กรุณาเลือกรสชาติ");

  const handleSubmit = async () => {
    if (icecream == "กรุณาเลือกรสชาติ") {
      alert("กรุณาเลือกรสชาติด้วย");
    } else {
      navigate(`/Topping/${customerId}/${icecream}`);
    }
  };
  const handleDelete = async () => {
    try {
        const response = await axios.delete("http://localhost:3000/DeleteCustomer", {
            data: { CustomerID: customerId } // ใช้ชื่อ key ที่สอดคล้องกับ API
        });

        // ตรวจสอบว่าการส่งข้อมูลสำเร็จ
        if (response.data.message == "ลบข้อมูลลูกค้าเรียบร้อยแล้ว") {
            console.log("ข้อมูลถูกลบสำเร็จ:", response.data);

            // ตรวจสอบและใช้ customerId หากจำเป็น
            if (response.data.customerId) {
                navigate(`/`); // เปลี่ยนเส้นทางไปหน้า home หรือหน้าอื่นที่คุณต้องการ
            }
        } else {
            console.error("การลบข้อมูลล้มเหลว:", response.data);
        }
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error.message);

        // แสดงข้อความข้อผิดพลาด หรือแจ้งเตือนผู้ใช้
        alert("เกิดข้อผิดพลาดในการลบข้อมูล");
    }
};

  return (
    <div className="  min-h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <div className="  flex justify-center items-center py-6 ">
        <div className=" bg-clip-text text-[40px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4 flex flex-col justify-center items-center">
          <h1>ice cream</h1>
          <h1>รสชาติ:{icecream}</h1>
        </div>
         
      </div>

      <div className="  ">
        <div className=" flex justify-between px-[100px]">
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://www.catdumb.com/wp-content/uploads/2021/10/9893.jpg"
              alt=""
            />

            <button
              onClick={() => seticecream("Chocolate")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Chocolate 30 บาท
            </button>
          </div>

          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://img.wongnai.com/p/1920x0/2019/08/09/efc0bff19d144f8da9301759649a0f88.jpg"
              alt=""
            />

            <button
              onClick={() => seticecream("Strawberry")}
              className=" bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Strawberry 25 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://png.pngtree.com/png-vector/20240628/ourlarge/pngtree-vanilla-ice-cream-png-image_12848710.png"
              alt=""
            />

            <button
              onClick={() => seticecream("Vanila")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Vanila 25 บาท
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <div className=" flex justify-between px-[100px] ">
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://image.makewebcdn.com/makeweb/m_1920x0/jKZC6GmS7/other/21_1.png"
              alt=""
            />

            <button
              onClick={() => seticecream("Chocolate Chip")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Chocolate Chip 30 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://138204389.cdn6.editmysite.com/uploads/1/3/8/2/138204389/s800266988507619400_p496_i2_w2083.jpeg"
              alt=""
            />

            <button
              onClick={() => seticecream("ThaiTea")}
              className=" bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              ThaiTea 35 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://thaicoffeeshop.com/wp-content/uploads/2023/09/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%AD%E0%B8%A8%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7.jpg"
              alt=""
            />

            <button
              onClick={() => seticecream("Matcha")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Matcha 40 บาท
            </button>
          </div>
        </div>
      </div>

      <div className=" flex justify-end px-[100px] mt-10 gap-2">
      <div>
          <button onClick={handleDelete} className="bg-yellow-500 px-10 py-2 rounded-lg">
            ยกเลิกการสั่ง
          </button>
        </div>
        <div>
          <button onClick={handleSubmit} className="bg-yellow-500 px-10 py-2 rounded-lg">
            Next
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default icecream;
