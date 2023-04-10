function Footer(props){
    // using the props passed from App.js
    return(
        <footer>The {props.weatherData} today is {props.fakeApiData}</footer>
    )
}
export default Footer;