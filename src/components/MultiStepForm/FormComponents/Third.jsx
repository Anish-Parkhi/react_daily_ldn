import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

function Third() {
  const { data } = useContext(MyContext);
  console.log(data);
  return (
    <div>
      <div>Third</div>
      <div>Your Data</div>
      <div>
        Name: {data?.name} and City: {data?.city}
      </div>
    </div>
  );
}

export default Third;
