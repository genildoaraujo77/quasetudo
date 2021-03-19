import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = props => (
    <NextHead>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
          <title>Home | Meu Site Responsivo</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="../public/static/styles.css" />
        { props.children }
    </NextHead>
);

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string
};

export default Head;