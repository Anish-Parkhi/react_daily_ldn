import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

function Third() {
  const { data, setData } = useContext(MyContext);
  console.log(data);
  return (
    <div>
      <div>Third</div>
    </div>
  );
}

export default Third;
