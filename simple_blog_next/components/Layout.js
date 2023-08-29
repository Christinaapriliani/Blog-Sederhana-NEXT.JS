import React from 'react';
import Head from 'next/head';

const Layout = ({ title, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2023 Simple Blog</p>
            </footer>
        </div>
    );
};

export default Layout;
