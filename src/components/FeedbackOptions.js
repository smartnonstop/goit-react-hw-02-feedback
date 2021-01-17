import React from 'react';

function FeedbackOptions ({options, onLeaveFeedback}) {

  return (
    <>
      {options.map(option => <button key={option} type='button' name={option} onClick={onLeaveFeedback}>{option}</button>)}
    </>
  );
}

export default FeedbackOptions;