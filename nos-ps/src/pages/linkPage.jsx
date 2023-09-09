import './linkPage.css'
import { LinkUrl } from '../App'

var string = 'Nenhum link aqui :('

export default function LinkPage()
{
    
    string = LinkUrl()
    return(
        <>
            <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans"></link>
                <div id="box">
                    {string}
                </div>
            
        </>
    )
}