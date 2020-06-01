import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'


export default class Header extends React.Component{

    constructor (props){
        super(props)
    }

    render(){
        return(
            <div>
                <ul>
                    <li><Link className="navLinks" to = '/'>Home</Link></li>
                    <li><Link className="navLinks" to = '/about'>About</Link></li>
                    <li><Link className="navLinks" to = '/works'>Works</Link></li>
                    <li><Link className="navLinks" to = '/media'>Media</Link></li>
                    <li><Link className="navLinks" to = '/awards'>Awards</Link></li>
                    <li><Link className="navLinks" to = '/blog'>Blog</Link></li>
                    <li><Link className="navLinks" to = '/contact'>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

