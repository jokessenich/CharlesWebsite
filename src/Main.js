import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Media from './components/Media'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Awards from './components/Awards'
import ArtistsMakeArt from './components/ArtistsMakeArt'
import FullSizeWorks from './components/FullSizeWorks'
export default class Main extends React.Component{


render(){
    return(
        <div>
            <Switch>
                <Route exact path = '/' component = {Home}></Route>
                <Route path = '/about' component = {About}></Route>
                <Route path = '/works' component = {Works}></Route>
                <Route path = '/media' component = {Media}></Route>
                <Route path = '/awards' component = {Awards}></Route>
                <Route path = '/blog' component = {Blog}></Route>
                <Route path = '/artistsmakeart' component = {ArtistsMakeArt}></Route>
                <Route path = '/contact' component = {Contact}></Route>
                <Route path = '/fullsizeworks' component = {FullSizeWorks}></Route>
            </Switch>
        </div>
    )
}
}