import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemName: '',
      itemPrice: '',
    };
  }

  addItem = () => {
    const { itemName, itemPrice } = this.state;
    if (itemName && itemPrice) {
      const newItem = { name: itemName, price: itemPrice };
      this.setState(prevState => ({
        items: [...prevState.items, newItem],
        itemName: '',
        itemPrice: '',
      }));
    }
  };

  removeItem = index => {
    this.setState(prevState => ({
      items: prevState.items.filter((item, i) => i !== index),
    }));
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  render() {
    const { itemName, itemPrice, items } = this.state;

    return (
      <div className="parent">
        <h1> Parent Component</h1>
        <div>
          <label htmlFor="itemName">Item Name</label>
          <input
            id="itemName"
            type="text"
            value={itemName}
            onChange={this.handleInputChange}
          />
          <label htmlFor="itemPrice">Item Price</label>
          <input
            id="itemPrice"
            type="number"
            value={itemPrice}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addItem}>Add Item</button>
        </div>
        <Child items={items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default Parent;
