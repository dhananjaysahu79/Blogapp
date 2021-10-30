import styled from 'styled-components';

export const Section = styled.div`
    background: #F7F7F6;
    display: flex;
    height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    background: #fff;
    max-width: 800px;
    padding: 60px;
    width: 80%;
`;

export const FormWrapper = styled.div`
    padding: 40px 60px;
`;

export const Row = styled.div`
   display: flex;
   margin: 0 -15px -15px -15px;
   flex-wrap: wrap;
   align-items: center;
   flex-direction: ${({imgStart}) => imgStart ? 'row-reverse' : 'row'};
   @media screen and (max-width: 768px){
    justify-content: center;
   }
`;

export const Column = styled.div`
   margin-bottom: 15px;
   padding-right: 20px;
   padding-left: 15px;
   flex: 1;
   max-width: 50%;
   flex-basis: 50%;

   @media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
   }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 950px){
    padding-bottom: 65px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: 4px;
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  width : 100%;
  border: 1px solid #101522;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const BoldText =  styled.h1`
    margin-bottom: 50px;
`;