import React from 'react';
import Helmet from 'react-helmet';

const TitlePages = (props) =>  (
    <Helmet>
        <title>{props.title}</title>
        <meta name="description" content="Transfer to Mobile - Permata Bank" /> 
	    <meta name="keywords" content="transfer, to, mobile, permata, bank" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" /> */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#fff"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="white"/>
    </Helmet>
)

export default TitlePages;