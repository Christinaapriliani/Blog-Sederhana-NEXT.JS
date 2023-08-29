import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const NewPost = () => {
    return (
        <Layout title="Create New Post">
            <h1>Create New Blog Post</h1>
            <p>Write a new blog post here.</p>
            <Link href="/">Back to Home</Link>
        </Layout>
    );
};

export default NewPost;
