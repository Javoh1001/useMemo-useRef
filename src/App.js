import React,{useState,useEffect,useRef,useMemo} from 'react';
import './App.css';
// import UseState from './hook/UseState';
// import UseEffect1 from './hook/UseEffect';
// import UseRef from './hook/UseRef';

function complete(num){
  let i =0;
  while(i < 100000){
    i++;
  }
  return num * 2;
}

const App = () =>{
  const [number,setNumber] = useState(8);

  const computed = useMemo(()=>{
    return complete(number)
  },[number])
  const [colored, setColored] = useState(false);

  const styles = {
    color:colored? 'crimson':'white',
  }
  return (
    <div className="App">
        <p style={styles}>Amount: {computed}</p>
        <button type="submit" onClick={()=>setNumber((prev)=> prev + 1)}>Add</button>
        <button type="submit" onClick={()=> setNumber((prev)=> prev - 1)}>Delete</button>
        <button type="submit" onClick={()=> setColored((prev)=> !prev)}>Edit</button>
    </div>
  );
}


export default App;

// useEffect ma'lum bir qismga tasir o'tkazish va boshqasiga tasir etmasdan;