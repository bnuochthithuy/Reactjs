import React, { use, useState } from 'react'
function Diem() {
    const [dtoan, setDiemToan] = useState();
    const [dly, setDiemLy] = useState();
    const [xl, setXl] = useState("");
    const dtb = Number(dtoan)+ Number(dly)/2;
    const diemTB = ()=>{
        if(dtb>=9){
            setXl("Suat Xac");
        }
        else if(dtb>=8){
            setXl("Gioi");
        }
        else if(dtb>=7){
            setXl("Kha");
        }
        else if(dtb>=5){
            setXl("Trung Binh");
        }
        else{
            setXl("yeu")
        }
    }
  return (
    <div>
      <form>
        <label> Diem Toan: 
            <input type='number' value={dtoan} onChange={(e)=>setDiemToan(e.target.value)}></input>
        </label>
        <label> Diem Ly: 
            <input type='number' value={dly} onChange={(e)=>setDiemLy(e.target.value)}></input>
        </label>
        <label> Diem TB: 
            <button type='button' onClick={diemTB}> </button>
        </label>
        <h2> diem TB: {diemTB} </h2>
        <h2> xep loai: {xl} </h2>
      </form>
    </div>
  )
}

export default Diem
