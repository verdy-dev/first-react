import React from 'react';
import Blog from '../../../component/blog/Blog';
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
        },
        isUpdate: false
    }

    getAPI = () => {
        fetch('http://localhost:3008/posts?_sort=id&_order=desc')
            .then(response => response.json())
            .then(result => {                
                this.setState({
                    blog: result
                })
            })  
    }

    postAPI = () => {
        axios.post('http://localhost:3008/posts', this.state.formBlogPost)
            .then(()=> {
                this.setState({
                    formBlogPost: {
                        id : 1,
                        title : '',
                        body : '',
                        userId : 1
                    } 
                })
                this.getAPI()})
            .catch(function (error) {
                console.log(error);
            });
    }

    putAPI = () => {
        axios.put(`http://localhost:3008/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost)
        .then(res => {
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id : 1,
                    title : '',
                    body : '',
                    userId : 1
                } 
            })
            this.getAPI();
            console.log(res)})
        .catch(function (error) {
            console.log(error);
        });
    }

    handleRemove = (id) => {
        if (window.confirm("Yakin Ingin Menghapus Data ?")){
            fetch (
                `http://localhost:3008/posts/${id}`,
                { method: 'DELETE' }
              )
              .then(() => {   
                  alert("data berhasil di hapus")           
                  this.getAPI()})
              .catch(err => console.error(err))
        } else {
            alert("menghapus data di batalkan")
        }
       
    }

    handleFormChange = (event) => {    
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime(); 
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStamp; 
        }               
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
        if(this.state.isUpdate){
            this.putAPI();
        } else {
            this.postAPI();
        }              
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
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
                  <input type="text" name="title" placeholder="Add Title" value={this.state.formBlogPost.title} onChange={this.handleFormChange}/>
                  <label htmlFor="body">Blog Content</label>
                  <textarea name="body" id="body-content" cols="30" rows="10" placeholder="Add Content Blog" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                  <button className="btn-submit" onClick={this.handleSubmit} >Simpan</button>
              </div>
              <div className="contain">
              {
                  this.state.blog.map((res) => {
                     return <Blog key={res.id} data={res} remove={this.handleRemove} update={this.handleUpdate}/>
                  })                
              }            
              </div>
          </div>          
      )
    }
}

export default Blogs