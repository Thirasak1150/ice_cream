import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function icecream() {
  const navigate = useNavigate();  // สร้างตัวแปร navigate
  const params = useParams();
  const icecream = params.icecream;
  const customerId = params.customerId;
  const [Topping,setTopping] = useState("กรูณาเลือก Topping")


  const handleSubmit = async () => {
    
    if(Topping == "กรูณาเลือก Topping"){
     alert("กรุณาเลือก Topping")
    }
    else{
      navigate(`/Source/${customerId}/${icecream}/${Topping}`); // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
    }
   
};
  return (
    <div> 

<div className=" bg-red-300 flex justify-center items-center py-6 ">
        <div className=" text-[30px] flex flex-col justify-center items-center">
          <h1>Topping</h1>
          <h1>{Topping}</h1>
        </div>
      </div>

      <div className=" bg-green-400 ">
        <div className=" flex justify-between px-[100px]">
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://assets3.thrillist.com/v1/image/2999162/1200x600/scale;;webp=auto;jpeg_quality=85.jpg"
            alt=""
          />
         
          <button 
         onClick={() => setTopping("ToppingA")}
          className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก Topping:A</button>

          </div>
         
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://assets3.thrillist.com/v1/image/2999162/1200x600/scale;;webp=auto;jpeg_quality=85.jpg"
            alt=""
          />
         
          <button 
          onClick={() => setTopping("ToppingB")}
          className=' bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก Topping:B</button>

          </div>
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://assets3.thrillist.com/v1/image/2999162/1200x600/scale;;webp=auto;jpeg_quality=85.jpg"
            alt=""
          />
         
          <button 
          onClick={() => setTopping("ToppingA")}
          className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก Topping:A</button>

          </div>
        </div>
      </div>

      <div className="bg-green-400 mt-10">
        <div className=" flex justify-between px-[100px] ">
        <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://assets3.thrillist.com/v1/image/2999162/1200x600/scale;;webp=auto;jpeg_quality=85.jpg"
            alt=""
          />
         
          <button 
          onClick={() => setTopping("ToppingB")}
          className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก Topping:B</button>

          </div>
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://assets3.thrillist.com/v1/image/2999162/1200x600/scale;;webp=auto;jpeg_quality=85.jpg"
            alt=""
          />
         
          <button 
          onClick={() => setTopping("ToppingB")}
          className=' bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก Topping:B</button>

          </div>
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://assets3.thrillist.com/v1/image/2999162/1200x600/scale;;webp=auto;jpeg_quality=85.jpg"
            alt=""
          />
         
          <button 
          onClick={() => setTopping("ToppingA")}
          className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก Topping:A</button>

          </div>
        </div>
      </div>


      <div className=" flex justify-end px-[100px] mt-10">
          <div>
            <button 
            onClick={handleSubmit}
            className="bg-yellow-500 px-10 py-2">Next</button>
          </div>
      </div>
    </div>
  )
}

export default icecream