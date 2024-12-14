import React, { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // นำเข้า axios

function Summayselecticecream() {
  const navigate = useNavigate(); // สร้างตัวแปร navigate
  const params = useParams();
  const ItemID = params.ItemID;
  const [data, setData] = useState({
    icecream: "",
    topping: "",
    sauce: "",
    servingtype: "",
  });
  const Loaddataicecream = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/ReadItem/${ItemID}`);

      // ตรวจสอบว่าการส่งข้อมูลสำเร็จ
      if (response.status === 201) {
        console.log("ข้อมูลถูกส่งสำเร็จ:", response.data);
        setData({
          ...data,
          icecream: response.data.icecream, // ตัวอย่างการอัพเดทที่อยู่
          topping: response.data.topping,
          sauce: response.data.sauce,
          servingtype: response.data.servingtype,
        
        });

        // แสดงข้อมูลที่อัพเดท
        console.log("icecream", response.data.icecream);
        console.log("topping", response.data.topping);

        console.log("sauce", response.data.sauce);
        console.log("servingtype", response.data.servingtype);


       
        
      } else {
        console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
    }
  };

  useEffect(() => {
    Loaddataicecream()
  }, [ItemID]);  // useEffect จะทำงานเมื่อ เปลี่ยนแปลง
  const handleNextpayment = async () => {
    navigate(`/Payment/${ItemID}`);
  };
  
  return (
    <body className=" overflow-hidden w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <div className="flex justify-center flex-col items-center">
        <div>
          <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Item
          </h1>
        </div>
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg max-w-[400px] w-full  ml-10 mt-[2%] flex flex-col
             justify-center items-center  p-4 shadow-lg">
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2 text-white">Itemid: {ItemID}</h1>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2 text-white">
              Icecream: {data.icecream}
            </h1>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2 text-white">Topping: {data.topping}</h1>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2 text-white">source: {data.sauce}</h1>
          </div>
          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2 text-white">
              servingtype: {data.servingtype}
            </h1>
          </div>
        
        </div>
        <div className="w-full flex justify-end h-[80px] mt-[100px] px-[150px]">
          <button
            type="button"
            onClick={handleNextpayment}
            className="text-white text-xl h-[50px] w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
          >
            Next
          </button>
        </div>
      </div>
    </body>
  );
}

export default Summayselecticecream;
