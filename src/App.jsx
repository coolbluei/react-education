import React from 'react';
import HelloWorld from './HelloWorld';

const App = () => {

    const obj = {
        david: "is awesome"
    };

    return (
        <div>
            <HelloWorld myProp={obj} />
        </div>
    )
};

export default App;