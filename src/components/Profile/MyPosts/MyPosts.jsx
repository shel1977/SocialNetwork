import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../util/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'enter text'}
                       name={'newMyPostMessageBody'}
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
};

const MyPostReduxForm = reduxForm ({
    form: 'myPostAddMessageForm'
})(MyPostForm);


const MyPosts = (props) => {

    let postElement = props.postData.map(p => <Post message={p.message}
                                                    likes={p.likes}/>
    );

/*
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
*/

    let addNewPostMessage = (values) => {
        props.addPost(values.newMyPostMessageBody)
    };

    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
            <MyPostReduxForm onSubmit={addNewPostMessage}  className={style.postsBlock}/>
            <div className={style.postItem}>
                {postElement}
            </div>
        </div>
    )
};



export default MyPosts;