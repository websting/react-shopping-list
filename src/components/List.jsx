import { FaTrashCan } from "react-icons/fa6"

const Task = ({items, setItems}) => { // props coming from other sources

    // method removes items that do not have
    // id in the displayed list
    const deleteItem = (id) => {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray); // reset to start over
      }

    return ( 
        <div className="item">
        <ul id="list-container">
          {items.map(item => {  // 1. map through items
            return( // 2. display items but only those with unique id
                <li key={item.id}>{item.value} 

                {/* when user clicks button this function triggers */}
                <button className="button2" 
                onClick={() => deleteItem(item.id)}>
                  <FaTrashCan className="del" /></button>
                </li>
            )
          })}
        </ul>
        </div>
     );
}
 
export default Task;