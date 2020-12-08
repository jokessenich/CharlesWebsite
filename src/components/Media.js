import React from 'react';
import Header from '../Header'
import './Media.css'

export default class Media extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            hideMoreArticles:true
        }
    }

render(){
    return(
        <div>
            <Header></Header>
        <h1> Media </h1>
        <div className="mediaLinksDiv">
            <ul className="mediaLinksUl">
                <li><a className = "article-title" href="https://www.nativesunnews.today/articles/the-work-of-lakota-sculptor-charles-rencountre">The work of Lakota sculptor Charles Rencountre</a><br />Native Sun News Today</li>
                <li><a className = "article-title" href="https://www.nrdc.org/onearth/statue-standing-rock-sends-powerful-message-resistance">A Statue at Standing Rock Sends a Powerful Message of Resistance</a><br />Natural Resources Defense Council</li>
                <li><a className = "article-title" href="https://www.nefa.org/grants/grant-recipients/charles-rencountre">Grant Recipient Charles Rencountre</a><br />New England Foundation for the Arts</li>
                <li><a className = "article-title" href="https://www.sfreporter.com/arts/2014/09/16/skin-deep/">Symposium aims to answer questions on Native American artistic identity</a><br />Santa Fe Reporter</li>
                <li> </li>

                {this.state.hideMoreArticles?<li onClick={()=>this.setState({hideMoreArticles:false})}>Click for more</li>:<li onClick={()=>this.setState({hideMoreArticles:true})}>Click for less</li>}
            </ul>
            {this.state.hideMoreArticles?"":<div>
                <ul className="mediaLinksUl">
                    <li><a href="https://asusjournal.org/2017/09/17/charles-rencountre-alicia-rencountre-da-silva-sculpture/">ASUS Journal</a></li>
                    <li><a href="https://spreadsantafe.com/entries/charles-rencountre-and-alicia-rencountre-da-silva/">Spread Sante FE</a></li>
                    <li><a href="https://www.thedickinsonpress.com/news/4122616-artists-inspired-dakota-access-protest">The Dickinson Press</a></li>
                    <li><a href="http://www.honorearth.org/not_afraid_to_look_news">Honor Earth</a></li>
                    <li><a href="https://news.d.umn.edu/news-center/news/not-afraid-look-charles-rencountre">University of Duluth</a></li>
                    <li><a href="https://art.calarts.edu/visiting-artist-lecture-series/lecture-archive">Cal Arts</a></li>
                    <li><a href="https://blog.nmai.si.edu/main/2014/03/nmai-iaia-artist-leadership-program-2014.html">National Museum of the American Indian</a></li>

                </ul>
            </div>}
        </div>
        </div>
    )
}
}
