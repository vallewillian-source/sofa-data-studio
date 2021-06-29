import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import { IAction } from '../../../electron/models/IAction'

type MyProps = { action:IAction }
type MyState = {}

export class ActionContent extends React.Component<MyProps, MyState> {

  constructor (props: any) {
    super(props)
    this.state = {}
  }

  render () {
    const HomeContent = styled(Box)``
    console.log(this.props.action);
    return (
      <>
        <HomeContent>
          {this.props.action.name}
        </HomeContent>
      </>
    )
  }

}
