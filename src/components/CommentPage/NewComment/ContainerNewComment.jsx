import { connect } from 'react-redux';
import { addCommentAC, changeCommentTextAreaAC} from '../../../redux/postReducer';
import NewComment from './NewComment';

let mapStateToProps = (state)=> {
    return {
        postId:state.postData.currentPost.id,
        newCommentTextField: state.postData.newCommentTextField
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
    changeTextArea: (text) =>{
        console.log(text);
    dispatch(changeCommentTextAreaAC(text))
    },
    sendComment: () =>{
        
        dispatch(addCommentAC());
        
    }
    }
}

let ContainerNewPost = connect(mapStateToProps,mapDispatchToProps)(NewComment);

export default ContainerNewPost;