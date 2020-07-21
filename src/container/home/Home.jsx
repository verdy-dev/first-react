import React from 'react';
// import Blog from '../../component/blog/Blog';
import Blogs from '../blogs/Blogs';


class Home extends React.Component {

    render(){
      return(
          <div>
              <h1>Beranda</h1>              
              <hr/>
              <Blogs />          
          </div>          
      )
    }
}

export default Home