// import { useState } from 'react';

// export default function List(props) {
//     const [items,setItems]=useState([])
//     const handleAddItem=()=>{
//     console.log("items",items)
//     setItems(()=>[...items,{tittle:inputValue}]);
//     }
//     return(
//         <div>
//             <ul>
//                 {items.map((data, index)=>
//                     <li key={index} >
//                         <div class="card" onClick={props.handleClick}>
//                             <div class="card-body">
//                             <h1 className="card-title">{data.tittle}</h1>
//                             </div>
//                         </div>
//                     </li>
//                 )}
//             </ul>
//         </div>
//     )
    
// }