import React from 'react';
import LinkListItems from './link-list-items';

function UnorderedLinkList(props) {
    return (
        <div>
            <h3 className='heading-left'>{props.head}</h3>
            <ul><LinkListItems adds={props.adds} elements={props.elements} /></ul>
        </div>
    )

}

export default UnorderedLinkList
