import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import {slide as Menu} from 'react-burger-menu'



export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            isOpen:false
        }
    }

    handleStateChange (state){
        this.setState({isOpen:state.isOpen})
    }

    closeMenu=()=>{
        this.setState({
            isOpen:false
        })
    }

render(){
    let menuProp = this.state.isOpen
    
    return(
        <div>
                    <div className="header">

        <ul className = {`fullscreen-links ${this.props.homePage?"home":""}`}>
            {this.props.homePage?"":<li><Link className="navLinks" to = '/'>Home</Link></li>}
            <li><Link className="navLinks" to = '/about'>About</Link></li>
            <li><Link className="navLinks" to = '/works'>Works</Link></li>
            <li><Link className="navLinks" to = '/media'>Media</Link></li>
            <li><Link className="navLinks" to = '/awards'>Awards</Link></li>
            <li><Link className="navLinks" to = '/artistsmakeart'>Artists Make Art</Link></li>

         {//   <li><Link className="navLinks" to = '/blog'>Blog</Link></li>
}
            <li><Link className="navLinks" to = '/contact'>Contact</Link></li>
        </ul>
    
        <Menu isOpen = {menuProp}
                       width = {'100%'}
                       right
                      onStateChange={(state) => this.handleStateChange(state)}>
                                      <li ><Link className="navLinks" to = '/' onClick = {this.closeMenu}>Home</Link></li>
            <li><Link className="navLinks" to = '/about' onClick = {this.closeMenu}>About</Link></li>
            <li><Link  className="navLinks" to = '/works' onClick = {this.closeMenu}>Works</Link></li>
            <li><Link  className="navLinks" to ='/media' onClick = {this.closeMenu}>Media</Link></li>
            <li><Link className="navLinks"  to = '/awards' onClick = {this.closeMenu}>Blog</Link></li>
            <li><Link className="navLinks" to = '/contact' onClick = {this.closeMenu}>Contact</Link></li>
        </Menu>
        </div>
        </div>
    )
}
}

