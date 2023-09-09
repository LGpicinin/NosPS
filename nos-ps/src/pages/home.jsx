//import { text } from 'express';
import './home.css'
import { useState } from 'react'
import { defineColor } from '../App'

var textReturn = 'vazio'

//<Input onChangeCapture={(m, c, cl) => define('out', 1, click)} type="url" placeholder="Insira um link para encurtar..." onChange={handleChange}></Input>
export function ReturnText()
{
    return(textReturn)
}


export default function Home()
{
    const [text, setText] = useState('');
    

    const handleChange = event => {
        setText(event.target.value);
        textReturn = text;
        console.log(event.target.value)
        defineColor('out', event.target.value, 0)
    }

    return(
        <>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'></link>
            <input onChangeCapture={handleChange}></input>
        </>
    )
}