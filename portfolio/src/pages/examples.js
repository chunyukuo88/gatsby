import React from 'react';
import Header from '../examples/Header';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const examples = ({ data }) => {
    const {
        site: {
            siteMetadata: { author },
        },
    } = data;

    return (
            <Layout>
                <p>Here are some examples</p>
                <Header/>
                <h5>Author: {author}</h5>
            </Layout>
    );
};

export const hippoMeat = graphql`
query FirstQuery {
  site {
    siteMetadata {
      title
      description
      author
      data
      person {
        age
        name
      }
    }
  }
}`;
export default examples;
