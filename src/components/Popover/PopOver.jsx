import React, { useState } from 'react';
import styles from './PopOver.module.css';
function PopOver() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.popOverMainContainer}>
      <div className={styles.popOverContainerWrapper}>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          className={styles.popOverMainButton}
        >
          Popover
        </button>
      </div>
      {open ? <div className={styles.popUpContainer}>This is the popover container</div> : null}
    </div>
  );
}

export default PopOver;
