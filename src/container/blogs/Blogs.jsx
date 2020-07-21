import React from 'react';
import Blog from '../../component/blog/Blog';
import './Blogs.css'


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

    handleFormChange = (event) => {    
        let formBlogPostNew = {...this.state.formBlogPost}
        formBlogPostNew[event.target.name] = event.target.value;            
        // let title = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log(this.state.formBlogPost)
        })
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
                  <button className="btn-submit">Simpan</button>
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