import React, { useState } from "react";
import axios from "axios";  // นำเข้า axios
import { useNavigate } from "react-router-dom";  // นำเข้า useNavigate
const Form = () => {
  const navigate = useNavigate();  
  const [form, setForm] = useState({
    FName: "",
    LName: "",
    Phon_No: "",
    Location: "",
  });
  
 
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  
  const handleSubmit = async () => {
    if (form.FName == "" && form.LName == ""&& form.Phon_No == "" ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
   
    }
    else{
      try {
        const response = await axios.post("http://localhost:3000/FoemAddCustomer", form);

        // ตรวจสอบว่าการส่งข้อมูลสำเร็จ
        if (response.status === 201) {
            console.log("ข้อมูลถูกส่งสำเร็จ:", response.data);

            // รับ customerId จาก responses
            const customerId = response.data.customerId;
            if(customerId){
              navigate(`/Icecream/${customerId}`); // เปลี่ยนเส้นทางไปยังหน้า icecream เเละส่ง customer ไปด้วย
            }
            
          
            // แสดง customerId ที่ได้รับ
            console.log("Customer ID ที่สร้างใหม่:", customerId);

            // คุณสามารถใช้งาน customerId ตามที่ต้องการที่นี่ เช่น แสดงใน UI
        } else {
            console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
        }
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์:", error);
    }
    }
   
};


  return (
    <div className="relative flex flex-col items-center justify-start text-5xl w-screen h-screen pt-10 bg-gradient-to-r from-fuchsia-200 to-indigo-200">
      <h1 className="bg-clip-text text-[70px] font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
        Ice-cream
      </h1>

      {/* ฟอร์มสำหรับกรอกข้อมูล */}
      <input
        type="text"
        name="FName"
        value={form.FName}
        onChange={handleChange}
        className="mt-20 shadow appearance-none border rounded p-3 text-zinc-500 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        placeholder="ชื่อ"
      />

      <input
        type="text"
        name="LName"
        value={form.LName}
        onChange={handleChange}
        className="mt-20 shadow appearance-none border rounded p-3 text-zinc-500  leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        placeholder="นามสกุล"
      />

      <input
        type="text"
        name="Phon_No"
        value={form.Phon_No}
        onChange={handleChange}
        className="mt-20 shadow appearance-none border rounded p-3 text-zinc-500  leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        placeholder="เบอร์"
      />


      {/* ปุ่ม Next */}
      <button
        type="button"
        onClick={handleSubmit}  // เรียกฟังก์ชันส่งข้อมูลเมื่อกดปุ่ม
        className="text-white absolute bottom-10 right-[75px] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:scale-105 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-[35px] px-10 py-5 text-center me-2 mb-2"
      >
        Next
      </button>
    </div>
  );
};

export default Form;
