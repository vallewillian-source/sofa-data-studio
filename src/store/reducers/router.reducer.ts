const initialState: any = {
    pageID: 1,
    action: null
}

export function routerReducer(state = initialState, action:any) {

  const payload:any = action.payload;
  
  if (action.type === 'changePage') {
    return {
      ...state,
      pageID: payload
    }
  }else if (action.type === 'openAction') {
    return {
      ...state,
      pageID: payload.pageID,
      action: payload.action 
    }
  }
  return state
}