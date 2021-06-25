import { Box, Button, Form, FormField, TextInput } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import { INPUT_TYPES } from '../../../electron/models/defines/InputDefines';
import { IInput } from '../../../electron/models/IInput';
import { IParam } from '../../../electron/models/IParam';
import { FormTextField } from './formTextField';

type MyProps = { onSubmit:any, params: IParam[] };
type MyState = { form:any };
export class FormComponent extends React.Component<MyProps, MyState> {
    formData: any;

    constructor(props:any) {
        super(props);
        this.state = {form: null};
    }

    render () {

        const SubmitButton = styled(Button)`
            border-radius: 10px;
        `

        const ParamsList = this.props.params?.map((param: IParam) => {
            let inputsList = param.inputs?.map((input: IInput) => {

              if (input.type == INPUT_TYPES.TEXT) {
                return <FormTextField key={input.id} label={input.name} inputId={input.id} />
              } else if (input.type == INPUT_TYPES.PSW) {
                return <FormTextField key={input.id} label={input.name} inputId={input.id} password={true} />
              } else {
                return <></>
              }
            })
            return <Box key={param.internal_name}>{inputsList}</Box>
          })

          return <Form
          onChange={nextValue => {
            this.setState({ form: nextValue });
          }}
          onReset={() => {
            this.setState({ form: null });
          }}
          onSubmit={this.props.onSubmit}
        >
          <Box margin={{ top: '20px' }}>{ParamsList}</Box> 
          
          <Box direction='row' gap='medium' margin={{ top: '40px' }}>
            <SubmitButton type='submit' primary label='Enviar' />
          </Box>
        </Form>

    }


}