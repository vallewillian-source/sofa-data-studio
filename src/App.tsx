import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { GRIDS } from './styles/grids';

import { Grommet, Box, Grid } from 'grommet';

import { SideNav } from './components/sidenav/sideNav';
import { HeaderComponent } from './components/header/header';
import { ContentComponent } from './components/content/content';
import styled from 'styled-components';

const theme = {
  global: {
    colors:{
      brand: "#26223E",
      "accent-1": "#6FFFB0",
      "accent-2": "#7FFFB0",
      "accent-3": "#8FFFB0",
      "accent-4": "#9FFFB0",
      "neutral-1": "#10873D",
      "neutral-2": "#20873D",
      "neutral-3": "#30873D",
      "neutral-4": "#40873D",
      focus: "gray",
    },
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

  useEffect(() => {
    document.title = "Sofa Data Studio"
  }, []);

  

  const SofaMain = styled(Grommet)`
        font-family: 'Roboto', sans-serif;
    `

  return (
    <>
      <GlobalStyle />
      <SofaMain theme={theme} full>
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
            <SideNav/>
          </Box>
          <Box background={GRIDS.main.header.background} gridArea="header" fill>
            <HeaderComponent/>
          </Box>
          <Box background={GRIDS.main.content.background} gridArea="content" fill>
            <ContentComponent/>
          </Box>
        </Grid>
      </SofaMain>
      
    </>
  )
}

render(<App />, mainElement)
