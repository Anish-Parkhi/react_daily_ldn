import React, { useRef, useState } from 'react';
import styles from './AutoComplete.module.css';
import data from './data.jsx';

function AutoComplete() {
  const inputRef = useRef();
  const [result, setResult] = useState(data);
  const handleChange = () => {
    const value = inputRef.current ? inputRef.current.value : '';
    setResult(() => {
      return data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
    });
  };
  return (
    <div className={styles.autoCompleteMainContainer}>
      <div className={styles.autoCompleteInnerModule}>
        <div>Start Typing</div>
        <div className={styles.inputbarWrapperContainer}>
          <input
            ref={inputRef}
            onChange={handleChange}
            className={styles.inputbarContainer}
            placeholder="Country"
          />
          <button className={styles.buttonContainer}>Submit</button>
        </div>
      </div>
      <div className={styles.resultMainContainer}>
        {inputRef.current?.value !== ''
          ? result?.map((item) => {
              return <div className={styles.innerItemContainer}>{item}</div>;
            })
          : null}
      </div>
    </div>
  );
}

export default AutoComplete;
