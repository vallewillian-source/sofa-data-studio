import { FormField, TextInput } from 'grommet'
import React from 'react'
import styled from 'styled-components'

type MyProps = { inputId: string; label: string; password?: boolean }
type MyState = {}
export class FormTextField extends React.Component<MyProps, MyState> {
  constructor (props: any) {
    super(props)
    this.state = {}
  }

  render () {
    let getInput: any
    if (this.props.password) {
      getInput = (
        <TextInput
          name={this.props.inputId}
          type='password'
          plain={true}
        />
      )
    } else {
      getInput = (
        <TextInput
          name={this.props.inputId}
          plain={true}
        />
      )
    }

    return (
      <FormField
        name={this.props.inputId}
        label={this.props.label}
        width='full'
      >
        {getInput}
      </FormField>
    )
  }
}
