import { Box, Image, Button } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { IAPI } from '../../../electron/models/IApi';
import { Icons } from '../../styles/icons';
import { APIMenu } from './apiMenu';

const { ipcRenderer } = require('electron')

type MyProps = { };
type MyState = { apis: IAPI[] | null };

export class ActionsMenu extends React.Component<MyProps, MyState> {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { apis: null };

    ipcRenderer.on('actions:getGroups:response', (event, data) => {
      this.setState({apis: data});
    });
    ipcRenderer.send('actions:getGroups', 'ping');
    
    
  }

  render () {

    const apisList = this.state.apis?.map((api:IAPI) =>
      <APIMenu key={api._id.id} api={api}/>
    );

    const ActionsMenuContainer = styled(Box)`
        padding: 17px 12px 32px 12px;
        border-radius: 10px;
        margin-top: 35px;
        color: black;
    `

    const NewActionButton = styled(Button)`
        margin-top: 30px;
        width: 100%;
        padding-left: 0px;
        padding-top: 3px;
        padding-bottom: 4px;
        border-radius: 10px;

        font-size: 15px;
        cursor: pointer;
    `

    return (
      <ActionsMenuContainer 
        justify="start" 
        pad="none"
        align-items="start"
        align="start" 
        background="#C4C4C4" 
        direction="column" 
        margin="small">

        {apisList}

        <NewActionButton 
          primary
          label="Adicionar Ação"
          icon={<Icons size="30" colors={['white']} icon="plus"/>}
        />

      </ActionsMenuContainer>      
    )
  }
}
