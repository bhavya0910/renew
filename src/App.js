import react from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {incnumber,decnumber} from "./Actions/index";
import "./App.css";
const App =()=>{
  const mystate = useSelector((state)=>state.changethenumber)
  const dispatch = useDispatch();
return (<>
<div className = "container">
  <h1>Increment/Decrement</h1>
  <h4>using react and redux</h4>
  <div className="quantity">
    <a className = "quantity__minus" title = "Decrement" onClick={()=> dispatch(decnumber())}><span>-</span></a>
    <input name = "quantity" type = "text" className="quantity__input" value={mystate}/>
    <a className = "quantity__plus" title = "Increment" onClick={()=> dispatch(incnumber())}><span>+</span></a>
  </div>

</div>
</>

);};
export default App;