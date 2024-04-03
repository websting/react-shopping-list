import { useEffect, useState } from "react";
import List from "./components/List";

import { FaListCheck } from "react-icons/fa6";

const title = `Ana's shopping list`;

const App = () => {
  // starts state of input (empty)
  const [newItem, setNewItem] = useState('');

  
  // when page refresh we get values from page if any
  const getItems = JSON.parse( localStorage.getItem('items')); 
  const [items, setItems] = useState( getItems ? getItems : []);

  // event handler from add button
  const addItem = () => {
    // grab and store value with unique id
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    // take new item and add to the list
    setItems(oldList => [...oldList, item]);
    setNewItem(''); // reset
    console.log(items);
  }

  // Local storage
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify( items));
  }, [items])

  return ( 
    <div className="container">

      <div className="todo-app">
        <h2><FaListCheck className="icon" />{title}</h2>

        <div className="row">
        <input type="text" placeholder="          Enter an item..."
        value={newItem}  // value is always going to be new item
        // when user inputs new values update state of list
        onChange={e => setNewItem(e.target.value)}
        />
        {/* when user clicks trigger addItem function */}
        <button className="button1" 
        onClick={() => addItem()}>➕</button>
      
        </div>{/* authorising to use props in other componets */}
        <List items={items} setItems={setItems} />
      </div>
      <div>
      </div>
    </div>
   );
}
 
export default App;