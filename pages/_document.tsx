// import { SkipNavLink } from '@reach/skip-nav';
import { Head, Html, Main, NextScript } from 'next/document';
import React, { FC } from 'react';

const Document: FC = () => {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-ens-backgroundSecondary dark:bg-ensd-backgroundSecondary">
                
                {/* <SkipNavLink /> */}
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
