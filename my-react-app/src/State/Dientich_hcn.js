import React, { useState } from 'react'

function Dientich_hcn() {
    const[length, setlength] = useState(0);
    const[width, setWidth] = useState(0);
    const[area, setArea] = useState(0);
    
    const caculatorArea = ()=>{
        setArea(length*width);
    }
  return (
    <div style={{padding: "20px"}}>
        <h2> Tinh dien tich hinh chu nhat </h2>
        <div>
            <label>Chieu dai: </label>
            <input type='number' value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <label> Chieu rong: </label>
            <input type='number' value={width} onChange={(e)=>setWidth(e.target.value)}></input>
        </div>
        <button onClick={caculatorArea}> Tinh dien tich: </button>
        <h1> Dien tich: {area}</h1>
    </div>
  )
}

export default Dientich_hcn
