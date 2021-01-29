import React from 'react';
import Layout from '../components/Layout';

//This page is visible in production mode.
export default function error() {
    return (
        <Layout>
            <h1>you broke the internet</h1>
        </Layout>
    );
}
