import React from 'react';
import Link from 'next/link';

const posts = [
    { slug: 'first-post', title: 'First Blog Post' },
    { slug: 'second-post', title: 'Second Blog Post' },
    // ...
];

const PostList = () => {
    return (
        <ul>
            {posts.map(post => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
