import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Greetings from './components/Greetings';
import { Grommet } from 'grommet';

const { ipcRenderer } = require('electron');

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

console.log(ipcRenderer.sendSync('run-action', {apiName: "1", endpointName: "2"}));

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Grommet theme={theme}>
        <header className="App-header">
          <p>
            NEW HEADER
          </p>
        </header>
        <Greetings />
      </Grommet>
      
    </>
  )
}

render(<App />, mainElement)
