import React from 'react';
import preload from './Spinner.svg'

export const Loading = () => {
    return (
        <div>
            <img style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
            }} src={preload} alt={'pic'}/>
        </div>
    );
};

