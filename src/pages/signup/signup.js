import React from "react";
import {Container, Button} from '../../globalStyles';
import signupimg from '../../images/signupimg.svg';

import {
    Section,
    Card,
    FormWrapper,
    Row,
    Column,
    TextWrapper,
    Img,
    FormInput,
    BoldText
} from './signup.elements';

function SignUP(){
    return (
    <Section>
        <Card>
          <Container>
            <Row>
                <Column>
                    <TextWrapper>
                    <BoldText>Sign UP</BoldText>
                    <FormInput placeholder = {'Your Full Name'}></FormInput>
                    <FormInput placeholder = {'Your Email'}></FormInput>
                    <FormInput placeholder = {'Your Phone No.'}></FormInput>
                    <FormInput placeholder = {'Your Age'}></FormInput>
                    <FormInput placeholder = {'Password'}></FormInput>
                    <FormInput placeholder = {'Re-Enter Password'}></FormInput>
                    <Button>Sign UP</Button>
                    </TextWrapper>
                </Column>
                <Column>
                <Img src = {signupimg}></Img>
                </Column>
            </Row>
          </Container>
        </Card>
    </Section>
    );
}

export default SignUP;