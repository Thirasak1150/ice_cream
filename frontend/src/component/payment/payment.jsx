import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // นำเข้า axios
function Summayselecticecream() {
  const navigate = useNavigate(); // สร้างตัวแปร navigate
  const params = useParams();
  const ItemID = params.ItemID;
  const [statuspayment, setstatuspayment] = useState("กรูณาเลือกวิธีชำระเงิน");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [data, setData] = useState({
    Payment_Method: statuspayment,
    Payment_Amount: "D12345",
    icecream: "",
    topping: "",
    sauce: "",
    servingtype: "",
    icecream_Price: "",
    Topping_Price: "",
    Sauce_Price: "",
    Serving_Price: "",
    referenceNumber: 0,
    OrderID:""
  });
  console.log(data);
  const [CheckPayment, setCheckPayment] = useState(true);
  const Loaddatapayment = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/ReadItemPrice/${ItemID}`
      );

      // ตรวจสอบว่าการส่งข้อมูลสำเร็จ
      if (response.status === 201) {
        console.log("ข้อมูลถูกดึงสำเร็จ:", response.data);
        setData({
          ...data,
          icecream: response.data.icecream,
          topping: response.data.topping,
          sauce: response.data.sauce,
          servingtype: response.data.servingtype,
          icecream_Price: response.data.icecream_Price,
          Topping_Price: response.data.Topping_Price,
          Sauce_Price: response.data.Sauce_Price,
          Serving_Price: response.data.Serving_Price,
          Payment_Amount: response.data.Order_Price,
          OrderID: response.data.OrderID,
      

          
        });
      } else {
        console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
    }
  };
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
    setReferenceNumber(randomNumber);
  };
  useEffect(() => {
    Loaddatapayment();
    generateRandomNumber();
  }, [ItemID]); // useEffect จะทำงานเมื่อ เปลี่ยนแปลง


  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      Payment_Method: statuspayment,
      referenceNumber: referenceNumber,
    }));
  }, [statuspayment, referenceNumber]);
  const handleNextreviewproduct = async () => {
    if(statuspayment != "กรูณาเลือกวิธีชำระเงิน"){
      console.log("data", data);
      setData((prevData) => ({ ...prevData, referenceNumber: referenceNumber }));
      try {
        const response = await axios.post(
          "http://localhost:3000/AddPayment",
          data
        );
  
        // ตรวจสอบว่าการส่งข้อมูลสำเร็จ
        if (response.status === 201) {
          console.log("ข้อมูลถูกส่งสำเร็จ:", response.data);
  
          // รับ customerId จาก response
          const PaymentID = response.data.PaymentID;
             // แสดง customerId ที่ได้รับ
             console.log("payment ID ที่สร้างใหม่:", PaymentID);
          if(PaymentID){
            navigate(`/Reviewproduct/${ItemID}`); // เปลี่ยนเส้นทางไปยังหน้า icecream เเละส่ง customer ไปด้วย
          }
  
       
        } else {
          console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
      }
    }
    else{
      alert("กรุณาเลือกวิธีชำระเงิน")
    }
   
  };
  return (
    <>
    <div className=" overflow-hidden w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <div className="flex justify-center flex-col items-center">
        <div>
          <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Payment
          </h1>
        </div>

        <div className="w-[600px] mt-10 flex flex-col justify-center items-center">
          {CheckPayment ? (
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">
                วิธีชำระเงิน: {data.Payment_Method}
              </h1>
              <button
                type="button"
                onClick={() => setstatuspayment("เงินสด")}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                เงินสด
              </button>
              <button
                type="button"
                onClick={() => setstatuspayment("บัตรเครดิต")}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                บัตรเครดิต
              </button>
            </div>
          ) : (
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">
                วิธีชำระเงิน: {data.วิธีชำระเงิน}
              </h1>
              <button
                type="button"
                onClick={() => setstatuspayment("เงินสด")}
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                เงินสด
              </button>
              <button
                type="button"
                onClick={() => setstatuspayment("บัตรเครดิต")}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                บัตรเครดิต
              </button>
            </div>
          )}

          <div className="mb-5">
            <h1 className="text-lg font-bold mb-2">รายละเอียดชำระเงิน</h1>
            <div className="text-[20px] font-bold">
              <p>
                icecream: {data.topping} ราคา:{data.icecream_Price}
              </p>
              <p>
                Topping: {data.topping} ราคา:{data.Topping_Price}
              </p>
              <p>
                sauce: {data.sauce} ราคา:{data.Sauce_Price}
              </p>
              <p>
                servingtype: {data.servingtype} ราคา:{data.Serving_Price}
              </p>
            </div>
          </div>

          <div className="mb-2">
            <h1 className="text-[39px] font-bold mb-2 ">
              ราคาทั้งหมด: {data.Payment_Amount}
            </h1>
          </div>
          <div className="mb-2 ">
            <h1 className="text-lg font-bold mb-2">
              Reference_Number: {referenceNumber}
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-end h-[80px] mt-[100px] px-[150px]">
          <button
            type="button"
            onClick={handleNextreviewproduct}
            className="text-white text-xl h-[50px] w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Summayselecticecream;
