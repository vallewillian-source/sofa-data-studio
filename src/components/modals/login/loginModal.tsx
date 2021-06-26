import { Layer, Text } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import { IAPI } from '../../../../electron/models/IApi'
import { IEndpoint } from '../../../../electron/models/IEndpoint'
import { IParam } from '../../../../electron/models/IParam'
import { FormComponent } from '../../forms/formComponent'
import { APITag } from '../../misc/apiTag'
import { ModalTitle } from '../modalTitle'

const { ipcRenderer } = require('electron')

type MyProps = { api: IAPI; onClose: any, setLogged: any }
type MyState = { fields: IParam[] }
export class LoginModal extends React.Component<MyProps, MyState> {
  isMounted: boolean = false

  constructor (props: any) {
    super(props)
    this.state = { fields: [] }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data:any){
    
    const elements:any = data.target.elements;
    let response:any = [];
    for(let element of elements){
      if(element.title?.length > 0 && element.value?.length > 0){
        response.push({inputId: element.title, value: element.value});
      }
    }

    ipcRenderer.on(
      'auth:processLogin:response',
      (event, data: any) => {
        if(data.errCode){

          // There is a error
          // TODO Map other error types and improve alert system
          if(data.errCode == "401"){
            alert("Por favor, verifique suas credenciais e tente novamente.");
          }else{
            alert("Ocorreu um erro desconhecido ao processar o seu login.");
          }
          
        }else{

          // Setting api as logged and closing modal
          this.props.setLogged(true);

          console.log('processLogin Response', data);
        }
        
      }
    );

    ipcRenderer.send('auth:processLogin', response, this.props.api);

  }

  render () {
    const LoginModalContainer = styled(Layer)`
      width: 390px;
      padding: 20px;
      border-radius: 20px;
    `

    const LoginModalText = styled(Text)`
      color: black;
      font-size: 17px;
      font-weight: 600;
      padding-top: 40px;
    `    

    return (
      <LoginModalContainer
        animation='slide'
        margin='small'
        background='light'
        onEsc={this.props.onClose}
        onClickOutside={this.props.onClose}
      >
        <ModalTitle>Login</ModalTitle>

        <LoginModalText alignSelf='center'>
          Para prosseguir, será necessário logar em:
        </LoginModalText>

        <APITag tag={this.props.api.tag}>{this.props.api.name}</APITag>

        <FormComponent onSubmit={this.onSubmit} params={this.state.fields}/>
        
      </LoginModalContainer>
    )
  }

  componentWillUnmount () {
    ipcRenderer.removeAllListeners('actions:getLoginEndpoint:response');
    ipcRenderer.removeAllListeners('auth:processLogin:response');
    
  }

  componentDidMount () {
    ipcRenderer.on(
      'auth:getLoginEndpoint:response',
      (event, endpoint: IEndpoint) => {
        console.log('getLoginEndpoint', endpoint);
        this.setState({ fields: endpoint.in_params })
      }
    )
    ipcRenderer.send('auth:getLoginEndpoint', this.props.api)
  }

}
