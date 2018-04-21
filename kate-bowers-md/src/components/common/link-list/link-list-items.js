
import React from 'react';

function LinkListItems(props) {
    const list = [];
    let i = 0;
    for (let e of props.elements) {
        let link = e.replace(/ |,|\*|\(|\)|-|\./g, '');
        link = props.adds[link];
        list.push(<a key={i++} href={link}><li className='glow' key={i++}>{e}</li></a>)
    }
    return list
}

export default LinkListItems
