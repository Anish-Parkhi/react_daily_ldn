import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Scroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      data.length > 0
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [data]);
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Scroll;
