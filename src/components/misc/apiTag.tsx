import { Box, BoxExtendedProps } from "grommet";
import React from "react";
import styled, { CSSObject, FlattenInterpolation, InterpolationFunction, Keyframes, StyledComponentBase, ThemedStyledProps } from "styled-components";
import { COLORS } from "../../styles/colors";

type MyProps = { tag?: string };
type MyState = { };
export class APITag extends React.Component<MyProps, MyState> {

  constructor(props:any) {
    super(props);
    this.state = { fields: [] };
  }

  render(){

    

    let tagBg: string;
    let tagColor: string;

    if(this.props.tag == "1"){
      tagBg = COLORS.tag1;
      tagColor = COLORS.tag1Text;
    }else if(this.props.tag == "2"){
      tagBg = COLORS.tag2;
      tagColor = COLORS.tag2Text;
    }else if(this.props.tag == "3"){
      tagBg = COLORS.tag3;
      tagColor = COLORS.tag3Text;
    }else{
        tagBg = COLORS.tag3;
        tagColor = COLORS.tag3Text;
    }

    const APITag = styled(Box)`
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 14px;
    letter-spacing: 0.8px;
    font-weight: 500;
    color: ${props => tagColor};
    `

    return <APITag
        background= {tagBg}
        color={tagColor}
    >
        {this.props.children}
    </APITag>

  }

}