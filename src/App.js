import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Information from './Information';

var clickedIndex = -1

function App() {
  const [items,setItems]=useState([])
  const [inputValue,setInputValue]=useState("")
  const [isSplit, setIsSplit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
 
  const handleClick = (index,cardData) => {
    setIsSplit(true);
    setSelectedIndex(index)
    clickedIndex = index;
    setSelectedCard(cardData);
    console.log("cardData",cardData)
  };
  const handleChange=()=>{
    setIsSplit(false);
  }
  const handleSave=(index,newItem)=>{
    items[clickedIndex] = newItem
    console.log('items', items)
    const updateItems= [...items,];
    setItems(updateItems)
    console.log('index', index)
  }
  const handleAddItem=()=>{
  console.log("items",items)
  setItems(()=>[...items,{title:inputValue}]);
  setInputValue("");
  }

  const handleInputChange = (event) => {
  setInputValue(event.target.value);
  };
  return (
    <div className={isSplit ? 'is-split' : ''}> 
      <div className='container-fluid'>
        <div className='row'>
          <div className='col left-side'>
            <form>
              <div className="form-group">
                <input className='form-control' value={inputValue} placeholder="Create Task..." onChange={handleInputChange}></input>
                <button className="btn btn-dark" onClick={handleAddItem} disabled={!inputValue}>Add</button>
              </div>
            </form>
              {items.map((data, index)=>(
                <div className="card" key={index} onClick={()=>handleClick(index,data)} >
                  <div className="card-body">
                    <h1 className="card-title">{data.title}</h1>
                  </div>
                </div>
              ))}
          </div>
          <div className='col-4 right-side shadow pt-0 bg-body rounded'>
          {selectedCard && 
          <Information onGoBackClick={handleChange} selectedCard={selectedCard}   index={selectedIndex} handleSave={handleSave} />
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
