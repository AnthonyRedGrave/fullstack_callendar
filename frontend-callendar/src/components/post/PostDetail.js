import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PostDetail({match}){
    const [post, setPost] = useState({})
    const id = match.params.id

    useEffect(()=>{
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/post/${id}`
        })
        .then(response=>{
            console.log(response)
            setPost(response.data)
        })
        }, [id])

    return (
        <div>  
            <h1>{post.title}</h1>
            <h4>{post.content}</h4>
            <hr/>
            
        </div>
    );
}

export default PostDetail;