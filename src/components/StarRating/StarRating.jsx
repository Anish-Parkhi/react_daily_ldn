import React, { useState } from 'react';
import styles from './StarRating.module.css';
const stars = [1, 2, 3, 4, 5];

function StarRating() {
  const [rating, setRating] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredNumber, setHoveredNumber] = useState(null);
  console.log(isHovered);
  return (
    <div className={styles.mainParentDiv}>
      <span className={styles.ratingHeadlineContainer}>Give us Rating</span>
      <div className={styles.ratingParentDiv}>
        {stars.map((item) => {
          return (
            <div
              onMouseEnter={() => {
                if (rating === null) {
                  setIsHovered(true);
                  setHoveredNumber(item);
                } else {
                  null;
                }
              }}
              onMouseLeave={() => {
                if (rating === null) {
                  setHoveredNumber(null);
                  setIsHovered(false);
                } 
              }}
              onClick={() => {
                setRating(item);
                setHoveredNumber(item);
              }}
              key={item}
              style={
                item <= hoveredNumber ? { backgroundColor: 'black' } : null
              }
              className={styles.StarImageBackground}
            ></div>
          );
        })}
      </div>
      <div>{rating === null ? '-' : rating}</div>
      <button
        onClick={function () {
          setRating(null);
          setHoveredNumber(null);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default StarRating;
