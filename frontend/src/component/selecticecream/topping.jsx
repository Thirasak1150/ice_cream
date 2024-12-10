import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function icecream() {
  const navigate = useNavigate(); // สร้างตัวแปร navigate
  const params = useParams();
  const icecream = params.icecream;
  const customerId = params.customerId;
  const [Topping, setTopping] = useState("กรุณาเลือก Topping");

  const handleBack = async () => {
    navigate(`/Icecream/${customerId}`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
  };

  const handleSubmit = async () => {
    if (Topping == "กรุณาเลือก Topping") {
      alert("กรุณาเลือก Topping");
    } else {
      navigate(`/Source/${customerId}/${icecream}/${Topping}`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
    }
  };
  return (
    <div className="min-h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <div className="  flex justify-center items-center py-6 ">
        <div className=" bg-clip-text text-[40px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4 text-[30px] flex flex-col justify-center items-center">
          <h1>Topping</h1>
          <h1>{Topping}</h1>
        </div>
      </div>

      <div className="  ">
        <div className=" flex justify-between px-[100px]">
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://image.makewebcdn.com/makeweb/m_750x0/jKZC6GmS7/Extra/Almond_Topping.jpg?v=202405291424"
              alt=""
            />

            <button
              onClick={() => setTopping("Almonds")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Almonds 35 บาท
            </button>
          </div>

          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://image.makewebcdn.com/makeweb/m_750x0/jKZC6GmS7/Extra/Choc_Light_Rainbow_Topping.jpg?v=202405291424"
              alt=""
            />

            <button
              onClick={() => setTopping("Chocrice Color")}
              className=" bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Chocrice Color 35 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://image.makewebcdn.com/makeweb/m_750x0/jKZC6GmS7/Extra/maraschino_cherries_1.jpg?v=202405291424"
              alt=""
            />

            <button
              onClick={() => setTopping("Maraschino Cherries")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Maraschino Cherries 35 บาท
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <div className=" flex justify-between px-[100px] ">
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://image.makewebcdn.com/makeweb/m_750x0/jKZC6GmS7/Extra/bud_s_wafer_01.png?v=202405291424"
              alt=""
            />

            <button
              onClick={() => setTopping("BUD'S Wafer")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              BUD'S Wafer 35 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LTj7gwLriqhfMCs90UFGg15sPTl7uYDYACEJ28dp4ekTyu7Rn1.webp"
              alt=""
            />

            <button
              onClick={() => setTopping("Strawberry")}
              className=" bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Strawberry 35 บาท
            </button>
          </div>
          <div className=" flex flex-col justify-center ">
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg"
              src="https://t4.ftcdn.net/jpg/06/10/51/05/360_F_610510599_cpH2xMZgAYuLngG9vy7Jhuz6M1ItTYli.jpg"
              alt=""
            />

            <button
              onClick={() => setTopping("Whipped cream")}
              className=" bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200 mt-5"
            >
              Whipped cream 35 บาท
            </button>
          </div>
        </div>
      </div>

      <div className=" flex justify-end px-[100px] mt-10">
        <div>
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

export default icecream;
