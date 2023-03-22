import React from 'react'
import Paragraph from "./Paragraph";

const Demo = (props) => { 

    console.log('Props Running');
    return <Paragraph>{props.show? 'Talk With ':''}</Paragraph>
}

export default Demo