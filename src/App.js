import "./App.css";
import {useState, useEffect } from "react";


function GithubUser({name, location, avatar}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  )

}
function App() {
  const [data, setData] = useState(null);
  const[error, setError] = useState(null);
  const[loading, setLoading] = useState(false);

  // Thre possible states the data may be in
// Loading State
// Success State
// Error State

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/moonhighway`)
      .then((respnse) => respnse.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  // <pre>{JSON.stringify(data, null, 2)}</pre>
 if(loading) return <h1>Loading...</h1>;
 if(error) return <pre>{JSON.stringify(error)}</pre>;
 if(!data) return null;
  return(
    <GithubUser name={data.name} location={data.location} avatar={data.avatar_url}/>
  )

}

export default App;
