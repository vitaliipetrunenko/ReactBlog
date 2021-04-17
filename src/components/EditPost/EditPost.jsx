import React from 'react';
import styl from './../NewPost/NewPost.module.css';
import {NavLink} from 'react-router-dom'
import { PostButton } from '../Post/Post';


function EditPost(props) {
    let postAddText = React.createRef();
    let postAddTitle = React.createRef();

   console.log(props.newPostTextField+"    - new field")
    return (
        <div className={styl.Post}>
            <div className={styl.newPostArea}>
            <textarea ref={postAddTitle} onChange={()=>{props.changeTextArea({text:postAddText.current.value,title:postAddTitle.current.value})}} value={props.newPostTextField.title}/>
            <textarea ref={postAddText} onChange={()=>{props.changeTextArea({text:postAddText.current.value,title:postAddTitle.current.value})}} value={props.newPostTextField.text}/>
            <NavLink to={'/'}><PostButton onClick={()=>{props.savePost()}} className="sendButton">send</PostButton></NavLink>
        </div>
        </div>
    );
}

export default EditPost;