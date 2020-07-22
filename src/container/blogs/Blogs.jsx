import React from 'react';
import Blog from '../../component/blog/Blog';
import './Blogs.css'
const axios = require('axios');


class Blogs extends React.Component {
    state = {
        blog: [],
        formBlogPost: {
            id : 1,
            title : '',
            body : '',
            userId : 1
        }
    }

    getAPI(){
        fetch('http://localhost:3008/posts?_sort=id&_order=desc')
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

    handleFormChange = (event) => {    
        let formBlogPostNew = {...this.state.formBlogPost}
        let timeStamp = new Date().getTime();        
        formBlogPostNew['id'] = timeStamp; 
        formBlogPostNew[event.target.name] = event.target.value;                
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log(this.state.formBlogPost)
        })
    }    

    handleSubmit = () => {
        let form = this.state.formBlogPost;    
        console.log(form);
        axios.post('http://localhost:3008/posts', form)
          .then(()=> this.getAPI())
          .catch(function (error) {
            console.log(error);
          });
    }

    componentDidMount() {
           this.getAPI(); 
    }

    render(){
      return(
          <div>
              <div className="form-add-post">
                  <h3>Form Tambah Data</h3>
                  <label htmlFor="title">Title</label>
                  <input type="text" name="title" placeholder="Add Title" onChange={this.handleFormChange}/>
                  <label htmlFor="body">Blog Content</label>
                  <textarea name="body" id="body-content" cols="30" rows="10" placeholder="Add Content Blog" onChange={this.handleFormChange}></textarea>
                  <button className="btn-submit" onClick={this.handleSubmit} >Simpan</button>
              </div>
              {
                  this.state.blog.map((res) => {
                     return <Blog key={res.id} data={res} remove={this.handleRemove}/>
                  })                
              }            
          </div>          
      )
    }
}

export default Blogs