import React from 'react';
import Header from '../Header'
import PictureBox from './PictureBox'
import {Link} from 'react-router-dom'

export default class Works extends React.Component{


render(){
    return(
        <div>
            <Header></Header>
        <h1> Works </h1>
        <div className="pictures-list">
            <Link to={{pathname:'/fullsizeworks', picId :"WestWind"}} ><PictureBox id = "West Wind" url="https://github.com/jokessenich/CharlesWebsite/blob/master/_EYA_%20(West%20Wind)%202002.jpg?raw=true"></PictureBox></Link>
            <Link to={{pathname:'/fullsizeworks', picId :"YaquiChrist"}}><PictureBox id = "Yaqui Christ" url="https://github.com/jokessenich/CharlesWebsite/blob/master/Additional%20image%2011%20Yaqui%20Christ%20Bronze%205%20x3'%202006.jpg?raw=true"></PictureBox></Link>
            <Link to={{pathname:'/fullsizeworks', picId :"LakotaMadonna"}}><PictureBox id = "Lakota Madonna"url="https://github.com/jokessenich/CharlesWebsite/blob/master/Additional%20images%2014%20Lakota%20Madonna%20Juniper%203'%202006.jpg?raw=true"></PictureBox></Link>
            <Link to={{pathname:'/fullsizeworks', picId :"LakotaChrist"}}><PictureBox id = "Lakota Christ" url="https://www.nativesunnews.today/wp-content/uploads/images/2018-10-10/42p2.jpg"></PictureBox></Link>

       {//} <img src="https://github.com/jokessenich/CharlesWebsite/blob/master/_Flicker_%20commission%202019.jpg?raw=true"></img>
}
        </div>
        <br />
        <br />
        </div>
    )
}
}
