import React, { useState } from 'react';
function Counter_function() {
    const[count, setCount] = useState(0);
  return (
    <div>
      <h1> Giá trị: {count}</h1>
      <button onClick={()=> setCount(count+1)}> tăng </button>
      <button onClick={()=> setCount(count-1)}> giảm </button>
    </div>
  )
}
export default Counter_function
