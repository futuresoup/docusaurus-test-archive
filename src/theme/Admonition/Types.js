import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import './CustomAdmonition.css';
import '../../../static/custom.css';

function Question(props) {
    return (
        <div className='custom-admonition-container'>
            <h5 className='custom-admonition-title'>{props.title}</h5>
            <div>{props.children}</div>
        </div>
    );
}

const AdmonitionTypes = {
    extendsDefaults: false,
    ...DefaultAdmonitionTypes,

    // custom admonition types go here. 
    'question': Question,
};

export default AdmonitionTypes;