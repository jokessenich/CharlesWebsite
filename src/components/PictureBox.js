import React from 'react';
import './Picturebox.css'

export default class PictureBox extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = "picture-box">
                <img className="work-images" src={this.props.url}></img>
                <div class="middle-of-pic">
                    <div class="pic-text">{this.props.id}</div>
                </div>
            </div>
        )
    }
}