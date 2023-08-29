import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <Layout title={`Blog Post: ${slug}`}>
            <h1>{slug}</h1>
            <p>This is a blog post.</p>
        </Layout>
    );
};

export default BlogPost;
