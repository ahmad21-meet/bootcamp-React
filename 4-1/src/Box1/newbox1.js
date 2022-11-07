import React  from 'react';
import './newbox.css';

function box1(props){
    return (
        <div className='box1'>{props.children}</div>
    )
}

export default box1;