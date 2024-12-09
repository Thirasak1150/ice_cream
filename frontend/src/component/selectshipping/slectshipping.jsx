import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function slectshipping() {
  const navigate = useNavigate();  // สร้างตัวแปร navigate
  const params = useParams();
  const ItemID = params.ItemID;
  
  const handleDelivery = async () => {
      navigate(`/Delivery/${ItemID}`); // เปลี่ยนเส้นทางไปยังหน้า icecream เเละส่ง customer ไปด้วย
    }
    const handleComeHome = async () => {
      navigate(`/Summayselecticecream/${ItemID}`); // เปลี่ยนเส้นทางไปยังหน้า icecream เเละส่ง customer ไปด้วย
    }

  return (
    <div className=" h-screen w-screen  bg-gradient-to-r from-fuchsia-200 text-[60px] to-indigo-200 flex   gap-4 justify-center items-center">
      <div><button onClick={handleComeHome} className=" px-3 py-2 bg-yellow-700 hover:bg-yellow-300">รับที่ร้าน</button></div>
      <div><button onClick={handleDelivery} className=" px-3 py-2 bg-green-400 hover:bg-green-200">จัดส่งไปที่บ้าน</button></div>
    </div>
  );
}

export default slectshipping;
