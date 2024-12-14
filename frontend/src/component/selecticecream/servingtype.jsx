import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // นำเข้า axios

function ServingType() {
  const navigate = useNavigate(); // สร้างตัวแปร navigate
  const params = useParams();
  const icecream = params.icecream;
  const customerId = params.customerId;
  const Topping = params.Topping;
  const sauce = params.sauce;

  const [servingtype, setServingtype] = useState("กรุณาเลือก servingtype");
  const [formAdditem, setFormAdditem] = useState({
    icecream: icecream,
    customerId: customerId,
    Topping: Topping,
    sauce: sauce,
    servingtype: servingtype, // กำหนดค่าเริ่มต้น
  });

  console.log(formAdditem);


  const handleBack = async () => {
    navigate(`/Source/${customerId}/${icecream}/${Topping}`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
   
};

  const handleSubmit = async () => {
    if (servingtype == "กรุณาเลือก servingtype") {
      alert("กรุณาเลือก servingtype");
    } else {
      console.log('formAdditem', formAdditem);
      try {
        const response = await axios.post("http://localhost:3000/Addorder", formAdditem);

        // ตรวจสอบว่าการส่งข้อมูลสำเร็จ
        if (response.status === 201) {
          console.log("ข้อมูลถูกส่งสำเร็จ:", response.data);

          // รับ customerId จาก response
          const ItemrID = response.data.ItemrID;
          if (ItemrID) {
            navigate(`/Slectshipping/${ItemrID}`); // เปลี่ยนเส้นทางไปยังหน้า icecream เเละส่ง customer ไปด้วย
          }

          // แสดง customerId ที่ได้รับ
          console.log("ItemrID ID ที่สร้างใหม่:", ItemrID);
        } else {
          console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
      }
    }
  };

  // ฟังก์ชั่นสำหรับอัพเดทค่าใน formAdditem
  const handleServingtypeChange = (newServingtype) => {
    setServingtype(newServingtype);
    setFormAdditem((prevForm) => ({
      ...prevForm,
      servingtype: newServingtype, // อัพเดทค่า servingtype ใน formAdditem
    }));
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
    <div className="min-h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <div className=" flex justify-center items-center py-6">
        <div className="bg-clip-text text-[40px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4 text-[30px] flex flex-col justify-center items-center">
          <h1>servingtype</h1>
          <h1>{servingtype}</h1>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between px-[100px]">
          <div className="flex flex-col justify-center">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://www.kcltrading.com/userfiles/images/blog-4.jpg"
              alt=""
            />
            <button
              onClick={() => handleServingtypeChange("Cone")}
              className="bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Cone 25 บาท
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://inwfile.com/s-fa/n1tufx.jpg"
              alt=""
            />
            <button
              onClick={() => handleServingtypeChange("Cup")}
              className="bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Cup 25 บาท
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://cdn.webshopapp.com/shops/318204/files/463186749/image.jpg"
              alt=""
            />
            <button
              onClick={() => handleServingtypeChange("Chocolate Cone")}
              className="bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Chocolate Cone 40 บาท 
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-[100px] mt-10">
        <div>
        <button onClick={handleDelete} className="bg-yellow-500 mr-5 px-10 py-2 rounded-lg">
            ยกเลิกการสั่ง
          </button>
        <button onClick={handleBack} className="bg-yellow-500 px-10 py-2 mr-5 rounded-lg">
            Back
          </button>
          <button onClick={handleSubmit} className="bg-yellow-500 px-10 py-2 mr-5 rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServingType;
