import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";


function source() {
  const navigate = useNavigate();  // สร้างตัวแปร navigate
  const params = useParams();
  const icecream = params.icecream;
  const customerId = params.customerId;
  const Topping = params.Topping;

  const [sauce,setsauce] = useState("กรูณาเลือก sauce")

  
  const handleSubmit = async () => {
    
    if(sauce == "กรูณาเลือก sauce"){
     alert("กรุณาเลือก sauce")
    }
    else{
      navigate(`/Servingtype/${customerId}/${icecream}/${Topping}/${sauce}`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
    }
   
};
  return (
    <div>
      <div className=" bg-red-300 flex justify-center items-center py-6 ">
    <div className=" text-[30px] flex flex-col justify-center items-center">
      <h1>sauce</h1>
      <h1>{sauce}</h1>
    </div>
  </div>

  <div className=" bg-green-400 ">
    <div className=" flex justify-between px-[100px]">
      <div className=' flex flex-col justify-center '>
      <img
        className="w-[200px] h-[200px] object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zetdp4toyfAEcIaMEAd8vS_qmG8WmrrA_g&s"
        alt=""
      />
     
      <button 
     onClick={() => setsauce("sauceA")}
      className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก sauce:A</button>

      </div>
     
      <div className=' flex flex-col justify-center '>
      <img
        className="w-[200px] h-[200px] object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zetdp4toyfAEcIaMEAd8vS_qmG8WmrrA_g&s"
        alt=""
      />
     
      <button 
      onClick={() => setsauce("sauceB")}
      className=' bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก sauce:B</button>

      </div>
      <div className=' flex flex-col justify-center '>
      <img
        className="w-[200px] h-[200px] object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zetdp4toyfAEcIaMEAd8vS_qmG8WmrrA_g&s"
        alt=""
      />
     
      <button 
      onClick={() => setsauce("sauceA")}
      className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก sauce:A</button>

      </div>
    </div>
  </div>

  <div className="bg-green-400 mt-10">
    <div className=" flex justify-between px-[100px] ">
    <div className=' flex flex-col justify-center '>
      <img
        className="w-[200px] h-[200px] object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zetdp4toyfAEcIaMEAd8vS_qmG8WmrrA_g&s"
        alt=""
      />
     
      <button 
      onClick={() => setsauce("sauceB")}
      className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก sauce:B</button>

      </div>
      <div className=' flex flex-col justify-center '>
      <img
        className="w-[200px] h-[200px] object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zetdp4toyfAEcIaMEAd8vS_qmG8WmrrA_g&s"
        alt=""
      />
     
      <button 
      onClick={() => setsauce("sauceB")}
      className=' bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก sauce:B</button>

      </div>
      <div className=' flex flex-col justify-center '>
      <img
        className="w-[200px] h-[200px] object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zetdp4toyfAEcIaMEAd8vS_qmG8WmrrA_g&s"
        alt=""
      />
     
      <button 
      onClick={() => setsauce("sauceA")}
      className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก sauce:A</button>

      </div>
    </div>
  </div>


  <div className=" flex justify-end px-[100px] mt-10">
      <div>
        <button 
        onClick={handleSubmit}
        className="bg-yellow-500 px-10 py-2">Next</button>
      </div>
  </div></div>
  )
}

export default source