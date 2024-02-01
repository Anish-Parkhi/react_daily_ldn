import React, { useState } from 'react';

function Form() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(data);

  return (
    <form>
      <div>
        <label>Name</label>
        <input onChange={handleChange} name="name" type="text" />
      </div>
      <div>
        <label>Age</label>
        <input onChange={handleChange} name="age" type="number" />
      </div>
      <div>
        <label>City</label>
        <input onChange={handleChange} type="text" name="city" />
      </div>
      <div>
        <label>Select the year of study</label>
        <select onChange={handleChange} name="year" id="year">
          <option value="1">1st year</option>
          <option value="2">2st year</option>
          <option value="3">3st year</option>
          <option value="4">4st year</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
