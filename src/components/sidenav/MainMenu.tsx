import { Box, Image } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../styles/icons';

export class MainMenu extends React.Component {
  render () {
    const MainMenuContainer = styled(Box)`
        padding: 17px 35px 0px 35px;
        border-radius: 10px;
    `;

    const MainMenuItem = styled(Box)`
        cursor: pointer;
    `;

    return (
      <MainMenuContainer 
        height="60px"
        justify="between" 
        align-items="center" 
        justify-content="center" 
        align="start" 
        background="#0F051A" 
        direction="row" 
        margin="small">

        <MainMenuItem>
          <Icons size="35" colors={['white']} icon="home"/>
        </MainMenuItem>
       

        <Image
          fit="contain"
          src="./sep1.svg"
        />

        <MainMenuItem>
          <Icons size="30" colors={['white']} icon="actions"/>
        </MainMenuItem>

        <Image
          fit="contain"
          src="./sep1.svg"
        />

        <MainMenuItem>
          <Icons size="30" colors={['white']} icon="info"/>
        </MainMenuItem>
       


      </MainMenuContainer>
    )
  }
}
