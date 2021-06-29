import React, { useEffect, useState } from 'react';
import { CONTENT_PAGES } from '../../../electron/models/defines/ContentPagesDefines';
import { IAction } from '../../../electron/models/IAction';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { ActionContent } from './actionContent';
import { HomeContent } from './homeContent';

function route(pageID: Number, action:IAction){
  if(pageID == CONTENT_PAGES.HOME){
    return <HomeContent/>
  }else if(pageID == CONTENT_PAGES.ACTION){
    return <ActionContent action={action}/>
  }
}

export function ContentComponent(props:any){

  const router = useAppSelector((state: RootState) => state.router);

  return (
    <>
      {route(router.pageID, router.action)}
    </>
  )

}