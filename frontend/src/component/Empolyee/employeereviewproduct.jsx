import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

import axios from "axios";

function employeereviewproduct() {
  const navigate = useNavigate(); 
  const params = useParams();
  const ItemID = params.ItemID;  // ดึง ItemID จาก URL
  const [datareview, setdatareview] = useState([{
    Reviewer_Name: "Thirasak",
    Rating: 2,
    Sauce_Name: "ช็อกโกแลต",
    topping: "สตรอเบอรี่",
    Topping_name: "ช็อกโกแลตซอส",
    Flavor: "",
    Comment: "",
  }]);
  console.log('datareview', datareview);

  const LoaddataReview = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ReaddatareviewAll");

      // ตรวจสอบว่าการส่งข้อมูลสำเร็จ
      if (response.status === 200) {
        console.log("ข้อมูลถูกส่งสำเร็จ:", response.data);
        setdatareview(response.data);
        console.log(response.data);
      } else {
        console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
    }
  };

  // ฟังก์ชันในการเลือกคะแนนดาว
  

  useEffect(() => {
    LoaddataReview();
  }, [ItemID]);  // useEffect จะทำงานเมื่อ เปลี่ยนแปลง

  return (
    <div className="flex flex-col justify-center items-center  pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">

      {/* แสดงรีวิวที่ถูกส่งไปแล้ว */}
      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-xl font-medium mb-4">รีวิวทั้งหมด</h2>
        {datareview.map((review, index) => (
          <div key={index} className="mb-5 p-5 border border-gray-300 rounded-lg shadow-lg bg-white">
            <div className="flex items-center mb-3">
              {/* แสดงดาว */}
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ${starIndex <= review.Rating ? 'text-yellow-500' : 'text-gray-400'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="font-semibold text-lg">{review.Reviewer_Name}</p>
            <p className="text-sm text-gray-600">{review.Comment}</p>

            {/* การแสดงข้อมูลเพิ่มเติม */}
            <div className="mt-4 space-y-2">
              {review.Flavor && <p className="text-sm text-gray-700"><strong>ไอศกรีม:</strong> {review.Flavor}</p>}
              {review.Topping_name && <p className="text-sm text-gray-700"><strong>ท็อปปิ้ง:</strong> {review.Topping_name}</p>}
              {review.Sauce_Name && <p className="text-sm text-gray-700"><strong>ซอส:</strong> {review.Sauce_Name}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default employeereviewproduct;
