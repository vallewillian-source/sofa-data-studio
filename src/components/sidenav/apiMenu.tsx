import { Box, Image } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { IAction } from '../../../electron/models/IAction';
import { ActionsMenuItem } from './actionsMenuItem';
import { APITitle } from './apiTitle';

type MyProps = { name:string, actions:IAction[] | undefined };
type MyState = { };

export class APIMenu extends React.Component<MyProps, MyState> {

  constructor (props: any) {
    super(props);
  }

  render () {
    const APIMenuContainer = styled(Box)``

    const actionsList = this.props.actions?.map((action:IAction) =>
      <ActionsMenuItem key={action._id.id} data={action}>{action.name}</ActionsMenuItem> 
    );

    return (
      <APIMenuContainer 
        direction="column" 
        justify="start" 
        align-items="start" 
        justify-content="start" 
        margin="none"
        width="full">

            <APITitle isLogged={false} tag="2">{this.props.name}</APITitle>
            {actionsList}

      </APIMenuContainer>
    )
  }
}
