import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

function First() {
  const { data, setData } = useContext(MyContext);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div>
      <div>First</div>
      <label>Enter Your Name</label>
      <input value={data?.name} name="name" onChange={handleChange} />
    </div>
  );
}

export default First;
