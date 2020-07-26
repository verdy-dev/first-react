import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import Blogs from '../pages/blogs/Blogs';
import Product from '../pages/product/Product';
import YoutubeComps from '../pages/youtube-comp/Youtube-Comps';

function Beranda() {
    return <h1>Beranda</h1>
}

class Home extends Component {   

    render(){
      return(
        <Router>
            <Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/youtube">Youtube Components</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                </ul>
            </nav>
                <Switch>
                    <Route path="/" exact>
                        <Beranda />
                    </Route>
                    <Route path="/product">
                        <Product/>                        
                    </Route>
                    <Route path="/blogs">
                        <Blogs/>
                    </Route>
                    <Route path="/youtube">
                        <YoutubeComps />
                    </Route>
                </Switch>
            </Fragment>
        </Router>
      )
    }
}

export default Home