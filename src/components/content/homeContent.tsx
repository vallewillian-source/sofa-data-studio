import { Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'

type MyProps = {}
type MyState = {}

export class HomeContent extends React.Component<MyProps, MyState> {

  constructor (props: any) {
    super(props)
    this.state = {}
  }

  render () {
    const HomeContent = styled(Box)``

    return (
      <>
        <HomeContent>HOME</HomeContent>
      </>
    )
  }

}
