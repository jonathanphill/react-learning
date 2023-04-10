import "./App.css";
import {useState, useEffect } from "react";


function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: (e) => setValue(e.target.value)},
    ()=> setValue(initialValue)
  ];
}
function App() {
  const [data, setData] =useState(null);
  useEffect(()=> {
    fetch(`https://api.github.com/users/moonhighway`)
    .then(respnse => respnse.json())
    .then(setData)
  },[])
  if(data) return <pre>{JSON.stringify(data, null, 2)}</pre>
  return (
   <h1>Data</h1>
  );
}

export default App;
