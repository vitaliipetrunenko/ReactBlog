import React from 'react';
import { PostButton } from '../Post/Post';
import styl from './NewPost.module.css';


function NewPost(props) {
    let postAddText = React.createRef();
    let postAddTitle = React.createRef();


   console.log(props.newPostTextField+"    - new field")
    return (
        <div className={styl.Post}>
            <div className={styl.newPostArea}>
            <textarea placeholder="Title" ref={postAddTitle} onChange={()=>{props.changeTextArea({text:postAddText.current.value,title:postAddTitle.current.value})}} value={props.newPostTextField.title}/>
            <textarea placeholder="Text" ref={postAddText} onChange={()=>{props.changeTextArea({text:postAddText.current.value,title:postAddTitle.current.value})}} value={props.newPostTextField.text}/>
            
            <PostButton onClick={()=>{props.sendPost()}} className="sendButton">send</PostButton>
            


        </div>
        </div>
    );
}

export default NewPost;