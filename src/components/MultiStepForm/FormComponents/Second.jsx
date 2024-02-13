import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

function Second() {
  const { data, handleChange } = useContext(MyContext);
  
  return (
    <div>
      <div>Second</div>
      <label>Enter City</label>
      <input
        value={data?.city}
        type="text"
        name="city"
        onChange={handleChange}
      />
    </div>
  );
}

export default Second;
