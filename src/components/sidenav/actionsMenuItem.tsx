import { Box, Image } from 'grommet'
import React from 'react'
import styled from 'styled-components'


type MyProps = {};
type MyState = { isToggleOn: boolean };

export class ActionsMenuItem extends React.Component<MyProps, MyState> {
  constructor (props: any) {
    super(props);
    this.state = { isToggleOn: true }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }))
  }

  render () {
    const ActionsMenuItemContainer = styled(Box)`
      padding: 20px 10px 10px 10px;
      border-bottom: 1px solid gray;
      font-size: 16px;
      cursor: pointer;
    `

    return (
      <ActionsMenuItemContainer
        justify='start'
        pad='none'
        align-items='start'
        align='start'
        direction='row'
        margin='none'
        width='full'
        onClick={this.handleClick}
      >
        {this.props.children}
      </ActionsMenuItemContainer>
    )
  }
}
