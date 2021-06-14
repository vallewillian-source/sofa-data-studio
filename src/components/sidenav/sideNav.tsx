import { Box, Image } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { ActionsMenu } from './actionsMenu';
import { MainMenu } from './MainMenu';

export class SideNav extends React.Component {
  render () {
    const SideNavContainer = styled(Box)`
        padding-top: 10px;
    `

    return (
      <SideNavContainer direction="column" margin="small">

        <Image
            fit="contain"
            src="./logo.svg"
        />

        <MainMenu/>

        <ActionsMenu/>

      </SideNavContainer>
    )
  }
}
