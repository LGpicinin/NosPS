import Botão from './style'

function Button({click, type})
{
    return
    <>
        <Botão onClick={click}>{type}</Botão>
    </>
}


export default Button