import { Box } from 'grommet'
import React, { useState } from 'react';
import styled from 'styled-components'
import { IAPI } from '../../../electron/models/IApi'
import { IEndpoint } from '../../../electron/models/IEndpoint'
import { FormComponent } from '../forms/formComponent'
import { Icons } from '../../styles/icons';
import { ResultComponent } from './result';

const { ipcRenderer } = require('electron')

export function ActionContent (props: any) {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [hasResult, setHasResult] = useState(false);

  const HomeContent = styled(Box)``

  const Action = styled(Box)`
    background-color: #938f99;
    border-radius: 10px;
    max-width: 1200px;
    min-height: 200px;
    color: black;
    align-items: flex-start;
  `

  const ActionHeader = styled(Box)`
    background-color: #c4c4c4;
    border-radius: 10px;
    align-items: flex-start;
    font-size: 18px;
    font-weight: bold;
  `

  const ActionBody = styled(Box)``

  const Loading = styled(Box)``

  function onSubmit (data: any, endpoint: IEndpoint, api: IAPI) {
    setIsLoading(true);
    ipcRenderer.on('action:process:response', (event, data: any) => {
      if (data.errCode) {
        // There is a error
        // TODO Map other error types and improve alert system
        if (data.errCode == '401') {
          //TODO open loginModal
          alert('Por favor, verifique se está logado e tente novamente.')
        } else {
          alert('Ocorreu um erro desconhecido ao processar o seu login.')
        }

        setIsLoading(false);
        setHasResult(false);

      } else {
        console.log('payload', data)

        setData(data);
        setIsLoading(false);
        setHasResult(true);

      }
    })
  
    ipcRenderer.send('action:process', data.value, endpoint, api)
  }

  return (
    <>
      <HomeContent pad={{ top: 'large', left: 'medium', right: 'medium' }}>

        {props.action && (
          <Action
            alignSelf='center'
            pad='none'
            width='full'
            justify='start'
            align-items='start'
            justify-content='start'
            margin='none'
          >
            <ActionHeader
              pad={{
                left: 'medium',
                right: 'medium',
                top: 'small',
                bottom: 'small',
              }}
            >
              {props.action.name}
            </ActionHeader>
            <ActionBody pad='medium' width='full'>
              <FormComponent
                onSubmit={(data: any) => {
                  onSubmit(data, props.action.endpoint, props.action.api)
                }}
                params={props.action.endpoint.in_params}
              />
            </ActionBody>
          </Action>
        )}

        {isLoading && <Loading alignSelf="center">
          <Icons size="100" colors={['white']} style={{opacity: '0.4'}} icon='loading' />
        </Loading>}
        
        {hasResult && <ResultComponent data={data}/>}

      </HomeContent>
    </>
  )
}
