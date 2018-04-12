import React from 'react';

function ListButton(props) {
    let alt = props.alt;
    return (<a alt={alt} href={props.target} className='list-button'></a>);
}

export default ListButton;
