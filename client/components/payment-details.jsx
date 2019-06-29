import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #aaa;
  margin: 18px 20px 0 20px;
  color: #333333;
  font-size: 13px;
  font-family :Helvetica nueue, Helvetica, Verdana, Sans-serif;
`;
const StyledHeader = styled.h3`
  margin: 5px 25px;
`;
const FieldsDiv = styled.div`
  color: #333333;
  background-color: #E8E8E8;
  font-size: 11px;
  height: 30px;
  margin: 10px 25px;
  border-bottom: 1px solid #aaa;
  display: flex;
  align-items: center;
`;

const FieldValues = styled.div`
  margin: 1% 15% 0 1% ;
`;
const DataDiv = styled.div`
  margin: 10px 25px;
  border-bottom: 1px solid #aaa;
`;
const CardsDiv = styled.div`
  margin: 1.5% 0 0 1.5% ;
`;

const ImageContainer = styled.div`
  display: flex;
`;
const StyledImage = styled.img`
  margin: 3% 0 25% 3%;
  flex-basis: 100px;
`;
const SpecialFinanceDiv = styled.div`
  float: left;
  margin-left: 15%;
  margin-top: 1%;
  font-family :Helvetica nueue, Helvetica, Verdana, Sans-serif;
`;
const StyledHeader2 = styled.div`
  font-size: 21.3333px;
  color: #0064D2;
`;
const StyledLink = styled.a`
  color:#0064D2;
  :hover {
    text-decoration: underline;
    cursor:pointer;
  }
`;

const PaymentDetails = ()=> {
  return (
    <Container>
      <StyledHeader>Payment details</StyledHeader>
      <FieldsDiv>
        <FieldValues>
          Payment methods
        </FieldValues>
      </FieldsDiv>
      <DataDiv>
        <CardsDiv>
        <img src="https://www.merchantequip.com/image/?bgcolor=FFFFFF&logos=p|v|m|a|d&height=32" />
        </CardsDiv>
      </DataDiv>
      <ImageContainer>
      <StyledImage src="https://p.ebaystatic.com/aw/logos/logoPaypalCreditv2_157x55.png"></StyledImage>
      <SpecialFinanceDiv>
        <StyledHeader2>Special financing available</StyledHeader2>
        <h4>Select PayPal Credit at checkout to have the option to <br/>pay over time.</h4>
        <p>Qualifying purchases could enjoy No Interest if paid in full in <br/> 6 months on purchases of $99 or more. Other offers may<br/> also be available.</p>
        <p>Interest will be charged to your account from the purchase<br/> date if the balance is not paid in full within 6 months.<br/> Minimum monthly payments are required. Subject to credit<br/> approval. <StyledLink>See terms</StyledLink></p>
        <p>The PayPal Credit account is issued by Synchrony Bank.</p>
      </SpecialFinanceDiv>
      </ImageContainer>
    </Container>
  )
}

export default PaymentDetails;