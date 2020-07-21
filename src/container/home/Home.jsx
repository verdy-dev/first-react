import React from 'react';
import Blog from '../../component/blog/Blog';


class Home extends React.Component {
    state = {
        blog: []
    }

    getAPI(){
        fetch('http://localhost:3008/posts')
            .then(response => response.json())
            .then(json => {                
                this.setState({
                    blog: json
                })
            })  
    }

    handleRemove = (id) => {
        fetch (
            `http://localhost:3008/posts/${id}`,
            { method: 'DELETE' }
          )
          .then(() => {
              alert('Data berhasil dihapus')
              this.getAPI()})
          .catch(err => console.error(err))
    }

    componentDidMount() {
           this.getAPI(); 
    }

    render(){
      return(
          <div>
              <h1>Beranda</h1>              
              <hr/>
              {
                  this.state.blog.map((res) => {
                     return <Blog key={res.id} data={res} remove={this.handleRemove}/>
                  })                
              }            
          </div>          
      )
    }
}

export default Home