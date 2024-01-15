import React, { useState } from 'react';
import styles from './styles.module.css';

function Accordion() {
  const data = [
    {
      id: 1,
      title: 'Accordion 1',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      id: 2,
      title: 'Accordion 2',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      id: 3,
      title: 'Accordion 3',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  console.log(openAccordion);

  return (
    <div className={styles.accordionMainContainer}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.accordionContainerWrapper}>
          {data.map((item) => (
            <div key={item.id} className={styles.accordionContainer}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{item.title}</div>
                <button
                  onClick={() => {
                    toggleAccordion(item.id);
                  }}
                >
                  {openAccordion === item.id ? 'Close' : 'Open'}
                </button>
              </div>
              {openAccordion === item.id && <div>{item.info}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
