import React, { useState } from 'react';
function Inform() {
    const [name, setName] = useState(); 
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div>
            <form>
                <label>Họ và tên:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
            </form>
            <br/>
            <h2>{name}</h2>
        </div>
    );
}
export default Inform;