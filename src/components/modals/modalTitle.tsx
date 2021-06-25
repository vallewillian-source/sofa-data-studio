import { Heading } from "grommet";
import React from "react";
import styled from "styled-components";
const { ipcRenderer } = require('electron');

type MyProps = { };
type MyState = { };
export class ModalTitle extends React.Component<MyProps, MyState> {

  constructor(props:any) {
    super(props);
    this.state = { fields: [] };
  }

  render(){

    return <Heading margin="none" level="2" size="small">{this.props.children}</Heading>;

  }

}