import { ipcRenderer } from 'electron';
import { Box, Image, Button } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../styles/icons';
import { ActionsMenuItem } from './actionsMenuItem';
import { APITitle } from './apiTitle';

type MyProps = { };
type MyState = { actions: any };

export class ActionsMenu extends React.Component<MyProps, MyState> {
  constructor(props: Readonly<{}>) {
    super(props);
    //this.state = {actions: ipcRenderer.sendSync('actions:get', {})};
  }
  render () {
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

        font-size: 16px;
        cursor: pointer;
    `

    return (
      <ActionsMenuContainer 
        justify="start" 
        pad="medium"
        align-items="start"
        align="start" 
        background="#C4C4C4" 
        direction="column" 
        margin="small">

        <APITitle isLogged={true} tag="1">Rocketchat</APITitle>

        <ActionsMenuItem>Listar usuários</ActionsMenuItem>
        <ActionsMenuItem>Listar filas de um workspace</ActionsMenuItem>

        <APITitle isLogged={false} tag="2">API 1</APITitle>

        <ActionsMenuItem>Listar usuários</ActionsMenuItem>
        <ActionsMenuItem>Listar filas de um workspace</ActionsMenuItem>

        <NewActionButton 
          primary
          label="Adicionar Ação" 
          icon={<Icons size="27" colors={['white']} icon="plus"/>}
        />

      </ActionsMenuContainer>

      
    )
  }
}
