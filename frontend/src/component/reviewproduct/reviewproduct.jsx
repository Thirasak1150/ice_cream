import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

import axios from "axios";

function ReviewProduct() {
  const navigate = useNavigate(); 
  const params = useParams();
  const ItemID = params.ItemID;  // ดึง ItemID จาก URL
  const [rating, setRating] = useState(0);  // ใช้ state สำหรับเก็บคะแนนรีวิว
  const [reviewText, setReviewText] = useState("");  // ใช้ state สำหรับเก็บข้อความรีวิว
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
  const handleStarClick = (star) => {
    setRating(star);  // อัปเดตคะแนนเมื่อคลิกที่ดาว
  };

  // ฟังก์ชันในการอัปเดตข้อความรีวิว
  const handleReviewChange = (e) => {
    setReviewText(e.target.value);  // อัปเดตข้อความรีวิวตามที่ผู้ใช้พิมพ์
  };

  // ฟังก์ชันในการส่งข้อมูลไปยังหลังบ้าน
  const handleSubmitReview = async () => {
    const reviewData = {
      ItemID,
      rating,
      reviewText
    };
    try {
      const response = await axios.post("http://localhost:3000/Addreview", reviewData);
      if (response.status === 201) {
        console.log("รีวิวถูกส่งสำเร็จ:", response.data);
        navigate(`/`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
        // คุณสามารถจัดการกับการตอบกลับที่ได้รับจากเซิร์ฟเวอร์ที่นี่
      } else {
        console.error("เกิดข้อผิดพลาดในการส่งรีวิว");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
    }
  };

  useEffect(() => {
    LoaddataReview();
  }, [ItemID]);  // useEffect จะทำงานเมื่อ เปลี่ยนแปลง

  return (
    <div className="flex flex-col justify-center items-center  pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <p className="text-lg font-medium">ให้คะแนนสินค้า</p>

      {/* การแสดงดาว */}
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((starIndex) => (
          <svg
            key={starIndex}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 cursor-pointer ${starIndex <= rating ? 'text-yellow-500' : 'text-gray-800'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            onClick={() => handleStarClick(starIndex)}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <p className="text-lg">คะแนนที่เลือก: {rating} ดาว</p>

      {/* กล่องข้อความสำหรับรีวิว */}
      <div className="mt-5 w-full max-w-md">
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-lg"
          placeholder="เขียนรีวิวของคุณที่นี่..."
          value={reviewText}
          onChange={handleReviewChange}
        />
      </div>

      <p className="mt-2 text-lg">ข้อความรีวิว: {reviewText}</p>

      {/* ปุ่มส่งรีวิว */}
      <button
        onClick={handleSubmitReview}
        className="mt-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center"
      >
        ส่งรีวิว
      </button>

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

export default ReviewProduct;
