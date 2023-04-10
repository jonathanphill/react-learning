
// FanInformation.js

export default function FanInformation({ teamName, followTeam }){
    // console.log(props);
    // const {teamName, followTeam} = props;
    return(

        <div>
            <h2>Welcome to the Fan Area of the {teamName}</h2>
            <button onClick={followTeam}>I love this team, tell me more</button>
        </div>

    )
}
