import React from 'react';

const Child = ({ items, removeItem }) => {
  return (
    <div className="child">
        <h2>Child Component</h2>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Child;
