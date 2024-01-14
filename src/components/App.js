
import React, { useState } from "react";
import './../styles/App.css';

const Child = ({items, setItems})=>{
  function deleteItem(i){
    const newItems = items.filter((el,ind)=>ind!=i)
    setItems(newItems)
  }
  return ( 
    <div >
      <ul className="child" >
        {
          items.map((el,i)=>{
            return (
              <li>{el.name} - ${el.price} <button onClick={()=>deleteItem(i)}  >Delete</button></li>
            )
          })
        }
      </ul>
    </div>
  )
}


const App = () => {
  const [items ,setItems] = useState([])
  const [newItemName ,setNewItemName] = useState('')
  const [newItemPrice ,setNewItemPrice] = useState(0)
  console.log(items)
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <label htmlFor="itemName">Item Name</label>
          <input id="itemName" type="text" onChange={e=>setNewItemName(e.target.value)} />
          <label htmlFor="itemPrice">Item Price</label>
          <input id="itemPrice" type="number" onChange={e=>setNewItemPrice(e.target.value)} />
          <button onClick={()=>setItems([...items,{name:newItemName, price:newItemPrice}])} >Add Items</button>

            <Child items={items} setItems={setItems} />
        </div>
    </div>
  )
}

export default App
