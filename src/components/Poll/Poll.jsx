import React, { useState } from 'react';
import styles from './Poll.module.css';
function Poll() {
  const pollData = [
    {
      pollOption: 'Goa',
      pollCount: 12,
      id: 1,
    },
    {
      pollOption: 'Kerala',
      pollCount: 4,
      id: 2,
    },
  ];
  const [data, setData] = useState(null);
  const handleClick = (id) => {
    setData({
        
    })
  };
  console.log(pollData)
  return (
    <div className={styles.pollMainContainerWrapper}>
      <div className={styles.pollMainContainer}>
        <div className={styles.pollHeaderContainer}>
          What is your favorite destination ?
        </div>
        <div className={styles.pollOptionsWrapperContainer}>
          {pollData.map((item) => {
            return (
              <div
                onClick={() => handleClick(item.id)}
                className={styles.pollOptionsMainContainer}
              >
                <div>{item.pollOption}</div>
                <div>{item.pollCount}</div>
              </div>
            );
          })}
        </div>
        <button className={styles.buttonMainContainer}>Revoke</button>
      </div>
    </div>
  );
}

export default Poll;
