import {Post,Comment} from '../Post/Post';
import ContainerNewComment from './NewComment/ContainerNewComment';
import styl from './../NewsFeed/NewsFeed.module.css';



function CommentPage(props) {
    let comments =[];    
    if(Array.isArray(props.currentPost.comments)){
    comments = props.currentPost.comments.map( el => <Comment title={el.title} text={el.body} key={el.id} id={el.id} img={el.img} />);
    }
    return(
    <div className={styl.NewsFeed}>
        <Post id={props.currentPost.id} deletePost={props.deletePost}text={props.currentPost.body} title={props.currentPost.title}></Post>
        <ContainerNewComment/>
        {comments}
    </div>
    )
}

export default CommentPage;