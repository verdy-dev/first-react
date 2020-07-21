import React from 'react'
import './Blog.css'

const Blog = (props) => {
    return(
        <div className="card">
            <div className="img-tumb">
                <img src="https://placeimg.com/200/150/tech" alt="blog"/>
            </div>
            <div>
                <p className="title">{props.data.title}</p>
                <p>{props.data.body}</p>  
                <button className="btn" onClick={ () => props.remove(props.data.id)}>Delete</button>  
            </div>            
        </div>
    )
}

export default Blog