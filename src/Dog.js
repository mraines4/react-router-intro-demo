import React from 'react';

function Dog({match}) {
    return (
        <div>
            Hello, {match.params.dog}!
        </div>
    )
}

export default Dog;