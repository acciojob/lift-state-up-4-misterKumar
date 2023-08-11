import React from 'react';

const Child = ({ items, removeItem }) => {
  return (
    <div className="child">
        <h2>Child Component</h2>
      {items.map((item, index) => (
        <div key={index}>
          <ul className="li">
            <li >{item.name} - ${item.price} <button onClick={() => removeItem(index)}>Remove</button></li>
        </ul>
          
        </div>
      ))}
    </div>
  );
};

export default Child;
