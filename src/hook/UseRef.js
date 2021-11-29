import React,{useState,useEffect,useRef} from 'react';

// import UseState from './hook/UseState';
import UseEffect1 from './hook/UseEffect';

// let renderCount = 1;

const UseRef = () =>{
  // const [renderCount,setRenderCount] = useState(1)
  const [value,setValue] = useState('default');
  const renderCount = useRef(1);


  useEffect(()=>{
    renderCount++;
  })
  return (
    <div className="App">
        {/* <UseEffect1/> */}
        <p>Amount of rendering {renderCount}</p>
        <input type="text" onChange={(e)=> setValue(e.target.value)} value={value} />
    </div>
  );
}


export default UseRef;