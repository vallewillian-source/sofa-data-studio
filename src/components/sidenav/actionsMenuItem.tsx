import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import { CONTENT_PAGES } from '../../../electron/models/defines/ContentPagesDefines'
import { IAction } from '../../../electron/models/IAction'
import { useAppDispatch } from '../../store/hooks'
import { AppDispatch } from '../../store/store'

export function ActionsMenuItem (props: any) {
  const ActionsMenuItemContainer = styled(Box)`
    padding: 20px 10px 10px 10px;
    border-bottom: 1px solid gray;
    font-size: 16px;
    cursor: pointer;
  `
  const dispatch: AppDispatch = useAppDispatch()

  return (
    <ActionsMenuItemContainer
      justify='start'
      pad='none'
      align-items='start'
      align='start'
      direction='row'
      margin='none'
      width='full'
      onClick={e => {
        let action:IAction = props.data;

        action.api = props.api;
        delete action.api?.actions;
        
        dispatch({ type: 'openAction', payload: {pageID: CONTENT_PAGES.ACTION, action }});
      }}
    >
      {props.children}
    </ActionsMenuItemContainer>
  )
}
