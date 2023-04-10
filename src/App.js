import './App.css';
import Footer from './Footer.js';
import FanInformation from './FanInfomation';

function App() {
  // call the weather API
  // display the weather on the page in both App and Footer
  const fakeApiData = 'sunny';
  const weatherData= 'weather';
  // pretend response from an API with sports team names
  const sportsTeam = ['Blue Jays', 'Raptors', 'Maple Leafs']
  const followTeam = (team)=>{
    console.log(`You are following the ${team}!`);
  }
  return (
    <div className="App">
      {/* <FanInformation/> */}
      {sportsTeam.map((name ,index)=> {
        return <FanInformation teamName={name} followTeam={()=>{
          followTeam(name)
        }} key={index}/>;
      })}
  
      {/* <p>{fakeApiData}</p> */}
      {/* passing props into Footer.js */}
      <Footer fakeApiData={fakeApiData} weatherData={weatherData} />
    </div>
  );
}

export default App;
