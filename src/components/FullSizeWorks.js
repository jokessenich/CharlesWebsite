import React from 'react';
import Header from '../Header'
import PictureBox from './PictureBox'

export default class Works extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.location.picId)
        document.getElementById(this.props.location.picId).scrollIntoView()
    }
render(){
    return(
        <div>
            <Header></Header>
        <h1> Works </h1>
        <div className="full-size-pictures-list">
            <img className = "fullsize-pic" id="WestWind" src="https://github.com/jokessenich/CharlesWebsite/blob/master/_EYA_%20(West%20Wind)%202002.jpg?raw=true" />
            <img className = "fullsize-pic" id="YaquiChrist"src="https://github.com/jokessenich/CharlesWebsite/blob/master/Additional%20image%2011%20Yaqui%20Christ%20Bronze%205%20x3'%202006.jpg?raw=true" />
            <img className = "fullsize-pic" id="LakotaMadonna" src="https://github.com/jokessenich/CharlesWebsite/blob/master/Additional%20images%2014%20Lakota%20Madonna%20Juniper%203'%202006.jpg?raw=true" />
            <img className = "fullsize-pic" id="LakotaChrist" src="https://www.nativesunnews.today/wp-content/uploads/images/2018-10-10/42p2.jpg" />

       {//} <img src="https://github.com/jokessenich/CharlesWebsite/blob/master/_Flicker_%20commission%202019.jpg?raw=true"></img>
}
        </div>
        <h2>More images coming soon.</h2>
        </div>
    )
}
}
