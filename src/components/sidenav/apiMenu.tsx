import { Box, Image } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { IAction } from '../../../electron/models/IAction';
import { IAPI } from '../../../electron/models/IApi';
import { ActionsMenu } from './actionsMenu';
import { ActionsMenuItem } from './actionsMenuItem';
import { APITitle } from './apiTitle';

type MyProps = { api: IAPI, actionsMenu:ActionsMenu};
type MyState = { };

export class APIMenu extends React.Component<MyProps, MyState> {

  constructor (props: any) {
    super(props);
  }

  render () {
    const APIMenuContainer = styled(Box)``

    const actionsList = this.props.api.actions?.map((action:IAction) =>
      <ActionsMenuItem key={action._id.id} api={this.props.api} data={action}>{action.name}</ActionsMenuItem> 
    );

    return (
      <APIMenuContainer 
        direction="column" 
        justify="start" 
        align-items="start" 
        justify-content="start" 
        margin="none"
        width="full">

            <APITitle api={this.props.api} actionsMenu={this.props.actionsMenu}>{this.props.api.name}</APITitle>
            {actionsList}

      </APIMenuContainer>
    )
  }
}
