import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; 

function source() {
  const navigate = useNavigate(); // สร้างตัวแปร navigate
  const params = useParams();
  const icecream = params.icecream;
  const customerId = params.customerId;
  const Topping = params.Topping;

  const [sauce, setsauce] = useState("กรุณาเลือก sauce");

  const handleBack = async () => {
    navigate(`/Topping/${customerId}/${icecream}`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
  };

  const handleSubmit = async () => {
    if (sauce == "กรุณาเลือก sauce") {
      alert("กรุณาเลือก sauce");
    } else {
      navigate(`/Servingtype/${customerId}/${icecream}/${Topping}/${sauce}`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
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
    <div className="min-h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <div className="  flex justify-center items-center py-6 ">
        <div className=" bg-clip-text text-[40px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4 text-[30px] flex flex-col justify-center items-center">
          <h1>sauce</h1>
          <h1>{sauce}</h1>
        </div>
      </div>

      <div className="  ">
        <div className=" flex justify-between px-[100px]">
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zetdp4toyfAEcIaMEAd8vS_qmG8WmrrA_g&s"
              alt=""
            />

            <button
              onClick={() => setsauce("Chocolate")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Chocolate  25 บาท
            </button>
          </div>

          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://img.th.my-best.com/product_images/9d0bf08b9191932042a051f1c83459ca.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=92ddadfc5435ac89f944bace760e1871"
              alt=""
            />

            <button
              onClick={() => setsauce("Caramel")}
              className=" bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Caramel  25 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://img.lazcdn.com/g/p/ab62a72b90c650018bfc2b14f6098b88.png_960x960q80.png_.webp"
              alt=""
            />

            <button
              onClick={() => setsauce("Strawberry")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Strawberry  25 บาท
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <div className=" flex justify-between px-[100px] ">
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://th-test-11.slatic.net/p/6b7097ada00887c899337c5e332ae360.jpg"
              alt=""
            />

            <button
              onClick={() => setsauce("Matcha")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Matcha  25 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://image.makewebcdn.com/makeweb/r_409x409/P1lhHuFlG/Filling/8853375001477.jpg"
              alt=""
            />

            <button
              onClick={() => setsauce("Butter")}
              className=" bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Butter Scott 25 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://down-th.img.susercontent.com/file/d2390ac6749efba04f5d30d629d7bdff"
              alt=""
            />

            <button
              onClick={() => setsauce("White Choc")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              White Choc 25 บาท
            </button>
          </div>
        </div>
      </div>

      <div className=" flex justify-end px-[100px] mt-10">
        <div>
        <button onClick={handleDelete} className="bg-yellow-500 mr-5 px-10 py-2 rounded-lg">
            ยกเลิกการสั่ง
          </button>
    
          <button
            onClick={handleBack}
            className="bg-yellow-500 px-10 py-2 mr-5 rounded-lg"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 px-10 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default source;
