import React from 'react';
import { connect } from 'react-redux';
import { deletePostAC, setPostsAC } from '../../redux/postReducer';
import NewsFeed from './NewsFeed';




function NewsFeedAPI(props) {
    
    return(
        <NewsFeed  deletePost={props.deletePost} postDB = {props.postDB}/>
    )

}

let mapStateToProps = (state)=> {
    return {
        postDB: state.postData.postDB,
    }
}


let mapDispatchToProps = (dispatch) =>{
    return {
    setPosts: (posts) =>{
        dispatch(setPostsAC(posts));
    },
    deletePost: (id) =>{
        
        dispatch(deletePostAC(id));
        }
    }
}

let ContainerNewsFeed = connect(mapStateToProps,mapDispatchToProps)(NewsFeedAPI);

export default ContainerNewsFeed;