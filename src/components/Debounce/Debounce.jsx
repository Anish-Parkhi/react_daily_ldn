import React, { useState } from 'react';

function Debounce() {
  const [data, setData] = useState('');
  const search = (query) => {
    console.log(`api call`, query);
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const debouceValue = debounce(search, 800);

  const handleChange = (e) => {
    const { value } = e.target;
    setData(value);
    debouceValue(value);
  };
  return (
    <div>
      <div>Debouce function example</div>
      <input autoFocus type="text" value={data} onChange={handleChange} />
    </div>
  );
}

export default Debounce;
