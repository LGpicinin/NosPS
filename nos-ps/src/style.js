import styled from 'styled-components'

export const Titulo = styled.h1`
    font-size: 40px;
    margin: 0px;
`

export const SubTitulo = styled.h2`
    font-size: 16px;
    font-weight: 400;
    margin-top: 5px;
`

export const Input = styled.input`
    height: 21px;
    width: 250px;
    font-size: 12px;
    padding-left: 5px;
    padding-top: 12px;
    vertical-align: bottom;
`

export const ButtonImg = styled.button`
    margin-left: 3px;
    background: ${props => 
        props.color === 1 ? 'var(--Amber-800, #92400E)'
        :props.color === 2 ? 'var(--Amber-500, #EAB308)'
        :props.color === 3 ? 'var(--Amber-300, #FCD34D);'
        :'var(--Zinc-800, #27272A)'
    };
    border-radius: 8px;
    border-color: ${props => 
        props.color === 1 ? '#92400E'
        :props.color === 2 ? '#EAB308'
        :props.color === 3 ? '#FCD34D'
        :'#27272A'
    };
    display: ${props =>
        props.visible === 0 ? 'none'
        :'inline'
    }
`

export const ButtonWords = styled.button`
    

    margin-top: 10px;
    background: var(--Zinc-50, #FAFAFA);
    outline: none;
    border: none;
    display: ${props =>
        props.visible === 0 ? 'none'
        :'inline'
    }
`

export const LastLine = styled.p`
    color: #27272A;
    text-align: center;
    font-family: 'Open Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`