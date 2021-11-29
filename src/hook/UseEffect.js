import React,{useState,useEffect} from 'react';

// import UseState from './hook/UseState';

const UseEffect1 = () =>{
  const [user,setUser] = useState('users');
  const [data,setData] = useState([]);
  const [position,setPosition] = useState({
    x:0,
    y:0,
  })

  // useEffect(()=>{
  //   console.log('render' + ' ' + user);
  // },[user])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${user}`)
    .then(response => response.json())
    .then(json => setData(json))

    return console.log('clean');
  },[user])
  useEffect(()=>{
    window.addEventListener('mousemove',(event)=>{
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    })
  },[])
  return (
    <div className="App">
        <div>
          {/* <UseState /> */}
          <p>User: {user}</p>
          <div>
            <button type="submit" onClick={()=> setUser('users')}>Web developer</button>
            <button type="submit" onClick={()=>setUser('posts')}>Веб Разработчик</button>
            <button type="submit" onClick={()=>setUser('todos')}>Реакт Девелопер</button>
          </div>
        </div>
        {/* {JSON.stringify(data,null)} */}
        {JSON.stringify(position,null,2)}
    </div>
  );
}


export default UseEffect1;

// useEffect ma'lum bir qismga tasir o'tkazish va boshqasiga tasir etmasdan;