import React,{ useEffect} from 'react';
import { connect } from 'react-redux';
import { PostsAPI } from '../../API/api';
import { setPostsAC } from '../../redux/postReducer.js';
import Header from './header';

function ContainerHeader (props) {
    useEffect(()=>{
        PostsAPI.getPosts().then(response=>{
            console.log(response)
            props.setPostsAC(response)
        })

    },[])
    return(
    <Header {...props}></Header>
    )
}

const mapStateToProps = (state)=>({authData: state.authData})
export default connect(mapStateToProps,{setPostsAC})(ContainerHeader); 