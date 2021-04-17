import React from 'react';
import styl from './Post.module.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PostButton = styled.button`
min-width:25%;
&:hover{
    background-color: #4267B2;
}
`

export function Post(props) {
   const postId=props.id;
    return (
        <div className={styl.Post}>
            <div className={styl.Post__Header}>
            <img className={styl.avatar}></img>
            <h5>{props.id}<span style={{display:'block'}}></span></h5>
            </div>
            <hr></hr>
            <img src={props.img} ></img>
            <div className={styl.postText}>
            <h3>{props.title}</h3>
            {props.text}</div>
            <div className={styl.postFooter}>
                <NavLink to={"/edit/"+props.id}><PostButton>change</PostButton></NavLink>
                <NavLink to={"/post/"+ props.id}><PostButton>comment</PostButton></NavLink>
                <NavLink to={"/"}> <PostButton onClick={()=>{props.deletePost(postId)}}>delete</PostButton></NavLink>
            </div>
        </div>
    );
}
export function Comment(props) {
    return(
        <div className={styl.Post}>
            <div className={styl.Post__Header}>
            <img className={styl.avatar}></img>
            <h5>{props.id}<span style={{display:'block'}}></span></h5>
            </div>
            <img src={props.img} ></img>
            <div className={styl.postText}>
            {props.title}
            {props.text}</div>
            <div className={styl.postFooter}>
            <PostButton> like</PostButton>
            <PostButton> report </PostButton>
            </div>
        </div>
    )
}

export default Post;