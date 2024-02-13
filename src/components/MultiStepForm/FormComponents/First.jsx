import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

function First() {
  const { data, handleChange } = useContext(MyContext);

  return (
    <div>
      <div>First</div>
      <label>Enter Your Name</label>
      <input value={data?.name} name="name" onChange={handleChange} />
    </div>
  );
}

export default First;
