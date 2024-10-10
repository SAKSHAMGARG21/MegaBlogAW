import React from 'react';
import Container from './containers/Container';
function NoPost() {
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl text-black font-bold hover:text-gray-500">
                            No posts available
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default NoPost;