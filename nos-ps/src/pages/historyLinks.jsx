import './linkPage.css'
import Copiar from "../assets/Clipboard.svg"
import {ButtonImg} from '../style'
import { useState, useEffect } from 'react'
import { getApiLinks } from '../App'
import useClipboard from '../functions/useClipboard'

var vetor;

export default function HistoryLinks()
{
    const copyToClipboard = useClipboard()
    vetor = getApiLinks();

    function sendToCopy(i)
    {
        copyToClipboard(i)
    }

    const Repeater = () => {
    return (
        <ul>
        {vetor.map(i => {
            return (
                <>
                    <div>
                        <div id="box">
                            {i}
                        </div>
                        <ButtonImg onClick={() => sendToCopy(i)} color={2}>
                            <img src={Copiar} alt="Botão para encurtar link"/>
                        </ButtonImg>
                    </div>
                </>
            );
        })}
        </ul>
    );
    };

    return(
        <>
            <Repeater></Repeater>
        </>
    )
}