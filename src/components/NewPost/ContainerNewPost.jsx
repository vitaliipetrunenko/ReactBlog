import React from 'react';
import { connect } from 'react-redux';
import { addPostAC, changePostTextAreaAC } from '../../redux/postReducer';
import NewPost from './NewPost';



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
    sendPost: () =>{
        dispatch(addPostAC());
    }
    }
 }
 
let ContainerNewPost = connect(mapStateToProps,mapDispatchToProps)(NewPost);

export default ContainerNewPost;