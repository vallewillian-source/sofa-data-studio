import { Box, Image } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';


type MyProps = { tag?: string, isLogged: boolean };
type MyState = { isLogged: boolean };

export class APITitle extends React.Component<MyProps, MyState> {

  constructor (props: any) {
    super(props);

    // TODO: Implement backend call for login information
    this.state = { isLogged: props.isLogged }

  }

  render () {
    const APITitleContainer = styled(Box)`
        padding-top: 20px; 
    `

    const APITag = styled(Box)`
        padding: 4px 16px;
        border-radius: 20px;
        color: ${props => props.color || "white"};
        font-size: 14px;
        letter-spacing: 0.8px;
        font-weight: 500;
    `

    const Separator = styled(Box)`
        border-bottom: 1px solid #5A5A5A;
        width: 100%;
        padding-top: 6px;
    `

    const UnloggedIcon = styled(Box)`
        margin: 4px;
        margin-left: 10px;
        cursor: pointer;
    `
    let tagBg;
    let tagColor;

    if(this.props.tag == "1"){
      tagBg = COLORS.tag1;
      tagColor = COLORS.tag1Text;
    }else if(this.props.tag == "2"){
      tagBg = COLORS.tag2;
      tagColor = COLORS.tag2Text;
    }else if(this.props.tag == "3"){
      tagBg = COLORS.tag3;
      tagColor = COLORS.tag3Text;
    }

    return (
    <>
      <APITitleContainer 
        direction="row" 
        justify="start" 
        align-items="start" 
        justify-content="start" 
        margin="none"
        width="auto">

        <APITag
            background= {tagBg}
            color={tagColor}
        >
            {this.props.children}
        </APITag>

        {!this.props.isLogged && <UnloggedIcon
            width="20px"
            height="20px"
            alignSelf="start"
        >
          <Image
            fit="contain"
            src="./actionsMenu_unlogged.svg"
            alignSelf="start" 
          />

        </UnloggedIcon>}

      </APITitleContainer>
      <Separator/>
    </>
    )
  }
}
