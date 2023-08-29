import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const Home = () => {
    return (
        <Layout title="Simple Blog">
            <h1>Welcome to Simple Blog</h1>
            <Link href="/blog/new">Create New Post</Link>
            <PostList />
        </Layout>
    );
};

export default Home;
