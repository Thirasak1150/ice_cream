import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

function icecream() {
  const navigate = useNavigate();  // สร้างตัวแปร navigate
  const params = useParams();
  const customerId = params.id;
  const [icecream,seticecream] = useState("กรูณาเลือกรถชาติ")


  const handleSubmit = async () => {
    
    if(icecream == "กรูณาเลือกรถชาติ"){
     alert("กรุณาเลือกรสชาติด้วย")
    }
    else{
      navigate(`/Topping/${customerId}/${icecream}`); 
    }
   
};
  return (
    <div> 

<div className=" bg-red-300 flex justify-center items-center py-6 ">
        <div className=" text-[30px] flex flex-col justify-center items-center">
          <h1>ice cream</h1>
          <h1>รสชาติ:{icecream}</h1>
        </div>
      </div>

      <div className=" bg-green-400 ">
        <div className=" flex justify-between px-[100px]">
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://static.wixstatic.com/media/dfbe57_1f203be65df04f0aa8bc1a60c80da0e9~mv2.png/v1/fill/w_1024,h_1024,al_c,q_90,usm_4.00_1.00_0.00,enc_avif,quality_auto/krit_ice_cream_cone_with_paper_cone_95c7f06a-9915-4712-9080-0a62c2f054d7.png"
            alt=""
          />
         
          <button 
         onClick={() => seticecream("Chocolate")}
          className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก รสชาติ:Chocolate</button>

          </div>
         
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://static.wixstatic.com/media/dfbe57_1f203be65df04f0aa8bc1a60c80da0e9~mv2.png/v1/fill/w_1024,h_1024,al_c,q_90,usm_4.00_1.00_0.00,enc_avif,quality_auto/krit_ice_cream_cone_with_paper_cone_95c7f06a-9915-4712-9080-0a62c2f054d7.png"
            alt=""
          />
         
          <button 
          onClick={() => seticecream("Strawberry")}
          className=' bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก รสชาติ:Strawberry</button>

          </div>
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://static.wixstatic.com/media/dfbe57_1f203be65df04f0aa8bc1a60c80da0e9~mv2.png/v1/fill/w_1024,h_1024,al_c,q_90,usm_4.00_1.00_0.00,enc_avif,quality_auto/krit_ice_cream_cone_with_paper_cone_95c7f06a-9915-4712-9080-0a62c2f054d7.png"
            alt=""
          />
         
          <button 
          onClick={() => seticecream("Chocolate")}
          className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก รสชาติ:Chocolate</button>

          </div>
        </div>
      </div>

      <div className="bg-green-400 mt-10">
        <div className=" flex justify-between px-[100px] ">
        <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://static.wixstatic.com/media/dfbe57_1f203be65df04f0aa8bc1a60c80da0e9~mv2.png/v1/fill/w_1024,h_1024,al_c,q_90,usm_4.00_1.00_0.00,enc_avif,quality_auto/krit_ice_cream_cone_with_paper_cone_95c7f06a-9915-4712-9080-0a62c2f054d7.png"
            alt=""
          />
         
          <button 
          onClick={() => seticecream("Strawberry")}
          className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก รสชาติ:Strawberry</button>

          </div>
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://static.wixstatic.com/media/dfbe57_1f203be65df04f0aa8bc1a60c80da0e9~mv2.png/v1/fill/w_1024,h_1024,al_c,q_90,usm_4.00_1.00_0.00,enc_avif,quality_auto/krit_ice_cream_cone_with_paper_cone_95c7f06a-9915-4712-9080-0a62c2f054d7.png"
            alt=""
          />
         
          <button 
          onClick={() => seticecream("Strawberryา")}
          className=' bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก รสชาติ:Strawberry</button>

          </div>
          <div className=' flex flex-col justify-center '>
          <img
            className="w-[200px] h-[200px] object-cover"
            src="https://static.wixstatic.com/media/dfbe57_1f203be65df04f0aa8bc1a60c80da0e9~mv2.png/v1/fill/w_1024,h_1024,al_c,q_90,usm_4.00_1.00_0.00,enc_avif,quality_auto/krit_ice_cream_cone_with_paper_cone_95c7f06a-9915-4712-9080-0a62c2f054d7.png"
            alt=""
          />
         
          <button 
          onClick={() => seticecream("Chocolate")}
          className=' bg-red-500 px-3 py-2 rounded-lg hover:bg-yellow-200'>เลือก รสชาติ:Chocolate</button>

          </div>
        </div>
      </div>


      <div className=" flex justify-end px-[100px] mt-10">
          <div>
            <button
            onClick={handleSubmit}
             className="bg-yellow-500 px-10 py-2">Next
             </button>
          </div>
      </div>
    </div>
  )
}

export default icecream