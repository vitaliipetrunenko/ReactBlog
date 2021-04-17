import React, { useEffect } from 'react';
import CommentPage from './CommentPage';
import { connect } from 'react-redux';
import { PostsAPI } from '../../API/api';
import { deletePostAC, getCurrentPostAC } from '../../redux/postReducer';
import {useParams} from "react-router-dom";


function CommentPageAPI(props){
    let { Id } = useParams();
    console.log(Id);
    useEffect(()=>{
        PostsAPI.getCurrentPost(Id).then(response=>{
            props.getCurrentPost(response)
        })
    },[])
    return (<CommentPage deletePost={props.deletePost}  currentPost={props.currentPost}/>)
}

let mapStateToProps = (state)=> {
    return {
        currentPost: state.postData.currentPost,
        
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
    changeTextArea: (text) =>{
        console.log(text);
    dispatch()
    },
    getCurrentPost: (post) =>{
        dispatch(getCurrentPostAC(post));
    },
    deletePost:(id)=>{
        dispatch(deletePostAC(id))
    }
    }
}

let ContainerCommentPage = connect(mapStateToProps,mapDispatchToProps)(CommentPageAPI);

export default ContainerCommentPage;