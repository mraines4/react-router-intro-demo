import React from 'react';
import { Link } from 'react-router-dom';

function Dogs(props) {
    return (
        <div>
            <h1>🐶</h1>
            <ul>
                <li>
                    <Link to="/dogs/trigger">Trigger</Link>
                </li>
                <li>
                    <Link to="/dogs/shadow">Shadow</Link>
                </li>
            </ul>
        </div>
    )
}

export default Dogs;