import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

function Second() {
  const { data, setData } = useContext(MyContext);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
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
