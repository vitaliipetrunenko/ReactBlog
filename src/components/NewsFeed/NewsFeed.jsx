import React from 'react';
import Post from '../Post/Post';
import styl from './NewsFeed.module.css';
import ContainerNewPost from '../NewPost/ContainerNewPost';



function NewsFeed(props) {
    let posts = props.postDB.map( el => <Post title={el.title} deletePost={props.deletePost}text={el.body} key={el.id} id={el.id} img={el.img} />);
    return (
        <div className={styl.NewsFeed}>
            <ContainerNewPost/>
            {posts.reverse()}
        </div>
    );
}

export default NewsFeed;