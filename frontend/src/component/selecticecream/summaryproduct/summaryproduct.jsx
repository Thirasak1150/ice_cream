import React, { useState } from "react";
import icecream from "../icecream";
import source from "../source";
import servingtype from "../servingtype";

function Delivery() {
  const data = {
    Itemid: "D12345",
    Icecream: "Pending",
    Topping: "123 Main St, Springfield",
    source: "2024-12-08",
    servingtype: "John Doe",
    orderid: "O67890",
  };
  const [checkaddress, setCheckAddress] = useState(false);

  return (
    <body className=" overflow-hidden w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      
        <div className="flex justify-center flex-col items-center">
          <div>
            <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              Item
            </h1>
          </div>
          <div className="w-[600px] mt-10">
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">
              Itemid: {data.Itemid}
              </h1>
             
            </div>
            <div className="mb-5">
              <h1 className="text-lg font-bold mb-2">
              Icecream: {data.Icecream}
              </h1>
             
            </div>
            <div className="mb-5">
              
              <h1 className="text-lg font-bold mb-2">
              Topping: {data.Topping}
              </h1>
            </div>
            <div className="mb-5">
              
              <h1 className="text-lg font-bold mb-2">
              source: {data.source}
              </h1>
            </div>
            <div className="mb-5">
              
              <h1 className="text-lg font-bold mb-2">
              servingtype: {data.servingtype}
              </h1>
            </div>
            <div className="mb-5">
              
              <h1 className="text-lg font-bold mb-2">
              orderid: {data.orderid}
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-end h-[80px] mt-[100px] px-[150px]">
            <button
              type="button"
              onClick={() => setCheckAddress(!checkaddress)}
              className="text-white text-xl h-[50px] w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
            >
              Next
            </button>
          </div>
        </div>
     
    </body>
  );
}

export default Delivery;
