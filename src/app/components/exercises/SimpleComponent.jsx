import React from 'react';

export const SimpleComponent = ({ textButton, onPressButton, ...props }) => {
  console.log('Props: ', props)
  return (
    <button 
      className="btn btn-primary"
      onClick={onPressButton}
    >
      {textButton}
    </button>
  )
}