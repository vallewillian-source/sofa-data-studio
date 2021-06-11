import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'

import Greetings from './components/Greetings'

const { ipcRenderer } = require('electron');
console.log(ipcRenderer.sendSync('run-action', {apiName: "1", endpointName: "2"}));

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  )
}

render(<App />, mainElement)
