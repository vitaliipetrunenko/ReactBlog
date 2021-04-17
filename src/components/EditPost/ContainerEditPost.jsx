import React,{useEffect}  from 'react';
import { connect } from 'react-redux';
import { PostsAPI } from '../../API/api';
import { savePostAC, changePostTextAreaAC,getCurrentPostAC } from '../../redux/postReducer';
import {useParams} from 'react-router-dom'
import EditPost from './EditPost';



function EditPostAPI(props){
    let { Id } = useParams();
    console.log(Id);
    useEffect(()=>{
        PostsAPI.getCurrentPost(Id).then(response=>{
            props.getCurrentPost(response);
            props.changeTextArea({text:response.body,title:response.title})
        })
    },[])
    return (<EditPost savePost={props.savePost} newPostTextField={props.newPostTextField} changeTextArea={props.changeTextArea} currentPost={props.currentPost}/>)
}

let mapStateToProps = (state)=> {
    return {
        newPostTextField: state.postData.newPostTextField
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
    changeTextArea: (text) =>{
        console.log(text);
    dispatch(changePostTextAreaAC(text))
    },
    getCurrentPost: (post) =>{
        dispatch(getCurrentPostAC(post));
    },
    savePost: () =>{
        dispatch(savePostAC());
    }
    }
}

let ContainerEditPost = connect(mapStateToProps,mapDispatchToProps)(EditPostAPI);
export default ContainerEditPost;