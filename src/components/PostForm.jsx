import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    const [post, setPost]=useState({title:'', body:''})
    const addNewPost = (event) => {
        event.preventDefault()
        // const newPost = {
        //     id: Date.now(),
        // title,
        // body
        //     title:post.title,
        //     body:post.body
        // }
        const newPost ={...post, id:Date.now()}
        create(newPost)
        // setTitle('')
        // setBody('')
        setPost({title:'', body: ''})
        // console.log(bodyInputRef.current.value)
    }
    // const bodyInputRef=useRef();
    // с помощью хук useRef получаем доступ в Дом-элемент
    // связка стр 47 48 49 (40-42) - не управляемый инпут
    // смотри App.jsx и MyInput 5 8 стр
    return (
        <div>
            <form>
                <MyInput
                    // onChange={event => setTitle(event.target.value)}
                    onChange={event => setPost({...post, title: event.target.value})}
                    // value={title}
                    value={post.title}
                    type="text"
                    placeholder="Name of Posts"/>

                {/*<input*/}
                {/*    ref={bodyInputRef}*/}
                {/*/>*/}

                <MyInput
                    onChange={event => setPost({...post, body: event.target.value})}
                    value={post.body}
                    // onChange={event => setBody(event.target.value)}
                    // value={body}
                    // ref={bodyInputRef}
                    type="text"
                    placeholder="Description of Posts"/>

                <MyButton
                    onClick={addNewPost}>
                    Create Post
                </MyButton>
            </form>
        </div>
    );
};

export default PostForm;
