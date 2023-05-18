import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Information from './Information';

export default function Profile() {
const [items,setItems]=useState([])
  const [inputValue,setInputValue]=useState("")
  const [isSplit, setIsSplit] = useState(false);
  const handleClick = () => {
    setIsSplit(true);
  };
  const handleChange=()=>{
    setIsSplit(false);
  }
  const handleAddItem=()=>{
  console.log("items",items)
  setItems(()=>[...items,{tittle:inputValue}]);
  setInputValue("");
  }
  const handleInputChange = (event) => {
  setInputValue(event.target.value);
  };
  return(
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
            <ul>
              {items.map((data, index)=>
                <li key={index} >
                  <div class="card" onClick={handleClick}>
                    <div class="card-body">
                      <h1 className="card-title">{data.tittle}</h1>
                    </div>
                  </div>
                </li>
                )}
              </ul>
          </div>
          <div className='col-4 right-side shadow pt-0 bg-body rounded'>
          <Information onGoBackClick={handleChange}/>
          </div>
        </div>
      </div>
    </div>
  );
    
}