import React, { useState } from 'react';
import First from './FormComponents/First';
import Second from './FormComponents/Second';
import Third from './FormComponents/Third';
import { MyContext } from './MyContext';

function MultiStepForm() {
  const [data, setData] = useState({ name: '', city: '' });
  const [currentStep, setCurrentStep] = useState(1);
  const handleClick = (action) => {
    if (action === 'previous' && currentStep > 1) {
      setCurrentStep((current) => current - 1);
    } else if (action === 'next') {
      setCurrentStep((current) => current + 1);
    }
  };
  return (
    <MyContext.Provider value={{ data, setData }}>
      <div>MultiStepForm</div>
      <div>
        {currentStep === 1 ? (
          <First />
        ) : currentStep === 2 ? (
          <Second />
        ) : currentStep === 3 ? (
          <Third />
        ) : null}
      </div>
      <div>
        <button
          disabled={currentStep === 1}
          onClick={() => handleClick('previous')}
        >
          Previous
        </button>
        <button
          disabled={currentStep === 3}
          onClick={() => handleClick('next')}
        >
          Next
        </button>
      </div>
    </MyContext.Provider>
  );
}

export default MultiStepForm;
