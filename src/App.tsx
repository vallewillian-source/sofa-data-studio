import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { GRIDS } from './styles/grids';

import { Grommet, Box, Grid } from 'grommet';

import { SideNav } from './components/sidenav/sideNav';
import { HeaderComponent } from './components/header/header';
import { ContentComponent } from './components/content/content';
import styled from 'styled-components';
import { store } from './store/store';
import { Provider } from 'react-redux';

const theme = {
  global: {
    colors:{
      brand: "#26223E",
      "light": "#C4C4C4",
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
      family: 'Arial',
      size: '18px',
      height: '20px',
    },
  },
};


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
      <Provider store={store}>
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
      </Provider>
    </>
  )
}

render(<App />, mainElement)
