import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://bloggy-api.herokuapp.com/',
    headers: {}
})
export const PostsAPI = {
    getPosts() {
        return instance.get('posts').then(response => {
            return response.data
        })
    },
    getCurrentPost(id) {
        return instance.get(`posts/${id}?_embed=comments`).then(response => {
            return response.data
        })
    },
    sendPost(post) {
        return instance.post("posts",post).then(response => {
            return response.data
        })
    },
    deletePost(id){
        return instance.delete(`posts/${id}`).then(response => {
            return response.data
        })
    },
    changePost(id,post){
        return instance.put(`posts/${id}`,post).then(response => {
            return response.data
        })
    }
}


export const CommentsAPI = {
    SendCurrentComment(comment) {
        return instance.post(`comments`, comment).then(response => {
            return response.data
        })
    },
}




