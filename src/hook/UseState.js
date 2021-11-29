import React from 'react';


function randomNumber(){
  console.log('calcutate');
  return Math.trunc(Math.random() * 20);
}
function UseState() {

  const [number,setNumber] = React.useState(()=>{
    return randomNumber();
  });
  const Adds = () =>{
    setNumber((prev)=> {
      return prev + 1;
    });
  }
  const Deletes  = () =>{
    setNumber(number - 1)
  }
  function uploadObject(){
    setState((prev)=>{
      return{
        ...prev,
        text:'salom'
      }
    })
  }
  const [state,setState] = React.useState({
    text:'Number',
    data:Date.now()
  })
  return (
    <div className="App">
        <div>
          <h2>React useState App</h2>
          <h3>Number: {number}</h3>
          <button type="submit" onClick={Adds}>Add</button>
          <button type="submit" onClick={Deletes}>Delete</button>
          <p>{JSON.stringify(state,null,6)}</p>
          <button type="submit" onClick={uploadObject}>Edit</button>
        </div>
    </div>
  );
}

export default UseState;
