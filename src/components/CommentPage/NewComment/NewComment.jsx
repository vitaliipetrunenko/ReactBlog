import React from 'react';
import { PostButton } from '../../Post/Post';
import styl from './../../NewPost/NewPost.module.css';

function NewComment(props) {
    let CommentAddText = React.createRef();
    
    return (
        <div className={styl.Post}>
        <div className={styl.newPostArea}>
            <textarea placeholder="Comment this" ref={CommentAddText} onChange={()=>{props.changeTextArea({text:CommentAddText.current.value})}} value={props.newCommentTextField.text}/>            
            <PostButton onClick={()=>{props.sendComment()}} className="sendButton">отправить</PostButton>
        </div>
        </div>
    );
}

export default NewComment;