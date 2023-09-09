//const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN /* link an account to create an auth token */});
import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import {Titulo, SubTitulo, ButtonImg, ButtonWords, LastLine} from './style'
import Logo from "./assets/Logo.svg"
import LinkImg from "./assets/Link.svg"
import Copiar from "./assets/Clipboard.svg"
import Check from "./assets/Check.svg"
import './App.css'
import Home from './pages/home'
import LinkPage from './pages/linkPage'
import HistoryLinks from './pages/historyLinks'
import useClipboard from './functions/useClipboard'

//import { ReturnText } from './pages/home'



var mouse = 'out', content = 'vazio', click = 0, active = 0, valorBotao = LinkImg, principalButton = 1, backPrincipalButton = 0, historyButton = 1, dados, caminho = "/", numberColor = 0, lastCaminho = "/", ap=-1;
var links = [], apiLinks = [];



function createLink(link) {

  fetch('https://url.api.stdlib.com/temporary@0.3.0/create/', 
  {
    method: 'POST',
    body: JSON.stringify({
      'url': link,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
  })
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        dados = data;
        // Handle data
        links.push(dados.url);
        apiLinks.push(dados.link_url)
     })
     .catch((err) => {
        console.log(err.message);
     })
     ap++;
}

export function getApiLinks()
{
  return(apiLinks)
}

export function LinkUrl()
{
  if(apiLinks[ap])
    return(apiLinks[ap])
  else
    return('Nenhum link aqui :(')
}


export const defineColor = (m, c, cl) => {

  //DEFINE CORES

  if(c==='vazio')
  {
    numberColor = 4;
    if(cl===1)
      cl = 0;
  }
  else if(m==='out' && cl===0)
    numberColor= 2;
  else if(m==='on' && cl===0)
    numberColor = 3;
  else
    numberColor = 1;

  if(valorBotao===Check)
    numberColor = 1

    mouse = m;
    content = c;
    click = cl;
    
}

function defineButtons()
{
  if(lastCaminho==="/HistoryLinks")
  {
    principalButton = 0;
    backPrincipalButton = 1;
    historyButton = 0;
  }
  else if(lastCaminho==="/LinkPage")
  {
    principalButton = 1;
    backPrincipalButton = 1;
    historyButton = 1;
  }
  else
  {
    principalButton = 1;
    backPrincipalButton = 0;
    historyButton = 1;
  }
}



function App() {

  const [color, setColor] = useState(0)
  const [principal, setPrincipal] = useState(1)
  const [back, setBack] = useState(0)
  const [history, setHistory] = useState(1)
  const [img, setImg] = useState('')
  const copyToClipboard = useClipboard()


  function define(m, c, cl, a, b){
    console.log(principalButton);

    defineColor(m, c, cl);
    active = a;
    //valorBotao = v;

    /*if(v === LinkImg)
      caminho = "/"*/
    
    //ATIVA API
    
    
      if(b===1)
      {
        if(active===0 && numberColor===1)
        {
          caminho = "/LinkPage";
          createLink(content);

          active = 1;

          valorBotao = Copiar;
        }
        else if(apiLinks[0]&& cl === 1)
        {
          active = 2;
          copyToClipboard(apiLinks[0])
          valorBotao = Check;
        }
        lastCaminho = caminho;
      }
    

    else if(b===2)
    {
      lastCaminho = "/";
      valorBotao = LinkImg;
    }
    else if(b===3)
      lastCaminho = "/HistoryLinks";

    defineButtons();
    click = 0;

    setImg(valorBotao)
    setColor(numberColor);
    setPrincipal(principalButton);
    setBack(backPrincipalButton);
    setHistory(historyButton);

  }

  /*const handleChange = event => {
    setText(event.target.value);
    console.log(event.target.value)
  }*/

  return (
    <>
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans"></link>
      <body>
        <header>
          <img src={Logo }/>
        </header>
        <main>
          <BrowserRouter>
            <Titulo>nós.short</Titulo>
            <SubTitulo id="subtitulo">O melhor encurtador de endereços</SubTitulo>
              <div id="Principal">
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/LinkPage" element={<LinkPage />}/>
                  <Route path="/HistoryLinks" element={<HistoryLinks />}/>
                </Routes>
                <ButtonImg visible={principal} onClick={(m, c, cl, a, b) => {define('on', content, 1, active, 1)}} onMouseOver={(m, c, cl, a, b) => define('on', content, click, active, 1)} onMouseLeave={(m, c, cl, a, b) => define('out', content, click, active, 1)} color={color}>
                  <Link to={caminho}>
                    <img src={img} alt="Botão para encurtar link"/>
                  </Link>
                </ButtonImg>
              </div>
              <ButtonWords visible={back}>
                <Link className="Links" onClick={(m, c, cl, a, b) => {define('out', 'vazio', 0, 0, 2)}} to="/">
                  Voltar para encurtar mais links
                </Link>
              </ButtonWords>
              <div>
                <ButtonWords visible={history}>
                  <Link className="Links" onClick={(m, c, cl, a, b) => {define('out', 'vazio', 0, -1, 3)}} to="/HistoryLinks">
                    Visualizar os últimos links encurtados
                  </Link>
                </ButtonWords>
              </div>
          </BrowserRouter>
        </main>
        <footer>
          <LastLine>Todos os direitos reservados @ Nosso Olhar Solidário 2023</LastLine>
        </footer>
      </body>
    </>
  )
}

export default App
