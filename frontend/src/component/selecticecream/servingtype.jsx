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

  const [servingtype, setServingtype] = useState("กรูณาเลือก servingtype");
  const [formAdditem, setFormAdditem] = useState({
    icecream: icecream,
    customerId: customerId,
    Topping: Topping,
    sauce: sauce,
    servingtype: servingtype, // กำหนดค่าเริ่มต้น
  });

  console.log(formAdditem);

  const handleSubmit = async () => {
    if (servingtype === "กรูณาเลือก servingtype") {
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

  return (
    <div>
      <div className="bg-red-300 flex justify-center items-center py-6">
        <div className="text-[30px] flex flex-col justify-center items-center">
          <h1>servingtype</h1>
          <h1>{servingtype}</h1>
        </div>
      </div>

      <div className="bg-green-400">
        <div className="flex justify-between px-[100px]">
          <div className="flex flex-col justify-center">
            <img
              className="w-[200px] h-[200px] object-cover"
              src="https://www.kcltrading.com/userfiles/images/blog-4.jpg"
              alt=""
            />
            <button
              onClick={() => handleServingtypeChange("ServingtypeA")}
              className="bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200"
            >
              เลือก servingtype:A
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <img
              className="w-[200px] h-[200px] object-cover"
              src="https://www.kcltrading.com/userfiles/images/blog-4.jpg"
              alt=""
            />
            <button
              onClick={() => handleServingtypeChange("servingtypeB")}
              className="bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200"
            >
              เลือก servingtype:B
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <img
              className="w-[200px] h-[200px] object-cover"
              src="https://www.kcltrading.com/userfiles/images/blog-4.jpg"
              alt=""
            />
            <button
              onClick={() => handleServingtypeChange("ServingtypeA")}
              className="bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200"
            >
              เลือก servingtype:A
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-[100px] mt-10">
        <div>
          <button onClick={handleSubmit} className="bg-yellow-500 px-10 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServingType;
