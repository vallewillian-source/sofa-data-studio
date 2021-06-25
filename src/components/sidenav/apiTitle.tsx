import { Box, Image } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { IAPI } from '../../../electron/models/IApi';
import { APITag } from '../misc/apiTag';
import { LoginModal } from '../modals/login/loginModal';


type MyProps = { api: IAPI, isLogged: boolean};
type MyState = { isLogged: boolean, isModalOpen: boolean  };

export class APITitle extends React.Component<MyProps, MyState> {


  constructor (props: any) {
    super(props);
    this.state = { isLogged: props.isLogged, isModalOpen: false };

    this.loginButton = this.loginButton.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
  }

  loginButton(){
    this.setState({isModalOpen: true});
  }

  closeLoginModal(){
    this.setState({isModalOpen: false});
  }

  render () {
    const APITitleContainer = styled(Box)`
        padding-top: 20px; 
    `

    const Separator = styled(Box)`
        border-bottom: 1px solid #5A5A5A;
        width: 100%;
        padding-top: 6px;
    `

    const UnloggedIcon = styled(Box)`
        margin: 4px;
        margin-left: 10px;
        cursor: pointer;
    `
    

    return (
    <>
      {this.state.isModalOpen && <LoginModal api={this.props.api} onClose={this.closeLoginModal}/>}

      <APITitleContainer 
        direction="row" 
        justify="start" 
        align-items="start" 
        justify-content="start" 
        margin="none"
        width="auto">

        <APITag tag={this.props.api.tag}>
            {this.props.children}
        </APITag>

        {!this.props.isLogged && <UnloggedIcon
            width="20px"
            height="20px"
            alignSelf="start"
            onClick={this.loginButton}
        >
          <Image
            fit="contain"
            src="./actionsMenu_unlogged.svg"
            alignSelf="start"
          />

        </UnloggedIcon>}

      </APITitleContainer>
      <Separator/>
    </>
    )
  }

}
