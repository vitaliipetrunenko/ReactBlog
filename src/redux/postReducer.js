import { CommentsAPI, PostsAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const CHANGE_POST = "CHANGE-POST";
const DELETE_POST = "DELETE-POST";
const CHANGE_POST_TEXTAREA="CHANGE-POST-TEXTAREA";
export const changePostTextAreaAC =(content)=>({type:"CHANGE-POST-TEXTAREA",text:content.text,title:content.title});
export const addPostAC =()=>({type:"ADD-POST"});
export const savePostAC =()=>({type:"CHANGE-POST"});
export const deletePostAC =(id)=>({type:"DELETE-POST",id:id});

const SET_POSTS = "SET-POSTS";
const GET_CURRENT_POST = "GET-CURRENT-POST";
export const setPostsAC =(posts)=>({type:"SET-POSTS",posts:posts});
export const getCurrentPostAC =(post)=>({type:"GET-CURRENT-POST",post:post});

const ADD_COMMENT = "ADD-COMMENT";
const CHANGE_COMMENT_TEXTAREA="CHANGE-COMMENT-TEXTAREA";
export const changeCommentTextAreaAC =(content)=>({type:"CHANGE-COMMENT-TEXTAREA",text:content.text});
export const addCommentAC =()=>({type:"ADD-COMMENT"});

let defaultPosts = {
    newPostTextField: {text:"",title:""},
    newCommentTextField: {text:"",title:""},
    postDB: [
        { id: 0, title: "post 1", body: "text" },
        { id: 1, title: "lorem", body: "text" },
        { id: 2, title: "lorem lorem lorem", body: "text" },
        { id: 3, title: "lorem...", body: "text" }
    ],
    currentPost:{
        id:0,
        comments:[],
    }
}

export const postReducer = (state=defaultPosts,action)=>{

    if(action.type===ADD_POST){
        let lastId=0;
        state.postDB.forEach(element=>{
            element.id>lastId ? lastId=element.id: lastId=lastId;
        })
        console.log();
            let newPost = {
                
                title: state.newPostTextField.title,
                body: state.newPostTextField.text,
                
            }
            PostsAPI.sendPost(newPost)
            newPost.id=lastId+1;
        return {
            ...state,
            newPostTextField:{ text:"",title:""},
            postDB:[...state.postDB,newPost]
        }
    }
    else if(action.type===CHANGE_POST){
            let postList=[...state.postDB]
            postList.forEach(element =>{
                if(element.id===state.currentPost.id){
                    element.body=state.newPostTextField.text;
                    element.title=state.newPostTextField.title
                }
            })
            let newPost = {

                title: state.newPostTextField.title,
                body: state.newPostTextField.text,
            
            }
            PostsAPI.changePost(state.currentPost.id,newPost)
        return {
            ...state,
            newPostTextField:{ text:"",title:""}, 
            postDB:[...postList]
        }
    }
    else if(action.type===DELETE_POST){
        PostsAPI.deletePost(action.id)
        let NewPostList = [...state.postDB]
        return {
            ...state,
            postDB:[...NewPostList.filter(element=>element.id!==action.id)]
        }
    }
    else if(action.type ===CHANGE_POST_TEXTAREA){
       return{
            ...state,
        newPostTextField:{ text:action.text, title:action.title}
       }
    }
    else if(action.type ===SET_POSTS){
        return{
             ...state,
            postDB:[...action.posts]
        } 
     }
     else if(action.type ===GET_CURRENT_POST){
        return{
             ...state,
            currentPost:action.post
        }
     }
     else if(action.type===ADD_COMMENT){
        let lastId=0;
        state.currentPost.comments.forEach(element=>{
            element.id>lastId ? lastId=element.id: lastId=lastId;
        })
            let newComment = {
                
                postId: state.currentPost.id,
                body: state.newCommentTextField.text,
                
            }
            CommentsAPI.SendCurrentComment(newComment)
            newComment.id=lastId+1;
        return {
            ...state,
            newCommentTextField:{ text:"",title:""},
            currentPost:{...state.currentPost,comments:[...state.currentPost.comments,newComment]},
        }
    }
    else if(action.type ===CHANGE_COMMENT_TEXTAREA){
        return{
             ...state,
         newCommentTextField:{ text:action.text}
        }
     }
    return state
}
export default postReducer;