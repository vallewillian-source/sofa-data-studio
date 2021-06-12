import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { GRIDS } from './styles/grids';

import { Grommet, Box, Grid } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

//console.log(ipcRenderer.sendSync('run-action', {apiName: "1", endpointName: "2"}));

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Grommet theme={theme} full>
      <Grid
        fill
        areas={[
          { name: 'nav', start: [0, 0], end: [0, 1] },
          { name: 'header', start: [1, 0], end: [1, 0] },
          { name: 'content', start: [1, 1], end: [1, 1] },
        ]}
        columns={[GRIDS.main.nav.width, 'flex']}
        rows={[GRIDS.main.header.height, 'flex']}
        gap="none"
      >
        <Box background={GRIDS.main.nav.background} gridArea="nav" fill>
          [Sidenav]
        </Box>
        <Box background={GRIDS.main.header.background} gridArea="header" fill>
          [Header]
        </Box>
        <Box background={GRIDS.main.content.background} gridArea="content" fill>
          [Content]
        </Box>
      </Grid>
      </Grommet>
      
    </>
  )
}

render(<App />, mainElement)
