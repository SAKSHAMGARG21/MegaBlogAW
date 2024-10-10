import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config.js"
import { BigLoadar, Container, NoPost, PostCard } from '../components';
function AllPosts() {
    const [posts, setPosts] = useState([]);
    const  [loading, setLoading] = useState(true);

    useEffect(() => {
        appwriteService.getUserPosts().then((posts) => {
            if (posts) {
                setLoading(false);
                setPosts(posts.documents);
            }
        })
    }, [])

    if (!loading && posts.length===0) {
        return (
            <NoPost />
        );
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        loading && <BigLoadar />
                    }
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;