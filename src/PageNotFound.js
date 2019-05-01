import React from 'react';
import { Redirect } from 'react-router-dom';
import { REFUSED } from 'dns';

function PageNotFound(props) {
    return (
        <div>
            <h1>🙅‍♂️</h1>
            <Redirect to="/" />
        </div>
    )
}

export default PageNotFound;