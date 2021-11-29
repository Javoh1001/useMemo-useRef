import React,{useState,useEffect} from 'react';
import './App.css';
// import UseState from './hook/UseState';

const App = () =>{
  const [user,setUser] = useState('users');
  const [data,setData] = useState([]);

  // useEffect(()=>{
  //   console.log('render' + ' ' + user);
  // },[user])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${user}`)
    .then(response => response.json())
    .then(json => setData(json))
  })
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
        {JSON.stringify(data,null)}
    </div>
  );
}


export default App;

// useEffect ma'lum bir qismga tasir o'tkazish va boshqasiga tasir etmasdan;