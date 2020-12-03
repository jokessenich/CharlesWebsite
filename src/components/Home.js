import React from 'react';
import './Home.css'
import Header from '../Header.js'

export default class Home extends React.Component{


render(){
    return(
        <div>
            <div className = "hero-container">
            <img id = "not-afraid-SR" src = "https://github.com/jokessenich/CharlesWebsite/blob/master/Standing%20Rock%20NATL%20%202nd%20monument%202017-%20(2nd%20image).jpeg?raw=true" />
        <div className = "name-hero-div">
            <Header homePage="true"></Header>
        <h1 className = "name-hero"> CHARLES <br />RENCOUNTRE </h1>
        <h2 className = "name-subhero">Lakota. Activist. Artist.</h2>
        </div>
        </div>
        </div> 
    )
}
}


