import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config.js"
import { useNavigate, useParams } from 'react-router-dom';
import { Container, PostForm } from '../components';

function EditPost() {

    const [post, setPosts] = useState(null);

    const {slug} = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
            })
        } else {
            navigator("/");
        }
    }, [slug, navigator])
    return post?  (
        <div className='py-8'>
            <Container>
                <PostForm post={post}></PostForm>
            </Container>
        </div>
    ):null;
}

export default EditPost;