import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #aaa;
  margin: 18px 20px;
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
  font-size: 10px;
  height: 30px;
  margin: 10px 25px;
  border-bottom: 1px solid #aaa;
`;

const FieldValues = styled.div`
  float: left;
  margin: 1% 15% 0 2% ;
`;
const DataDiv = styled.div`
  color: #5D5D5D;
  background-color: white;
  margin: 10px 25px;
  height: 20px;
  border-bottom: 1px solid #aaa;
`;
const Data1 = styled.div`
  float: left;
  margin: 0 0 0 2% ;
`;
const Data2 = styled.div`
  float: left;
  margin: 0 0 0 29% ;
`;
const Data3 = styled.div`
  float: left;
  margin: 0 0 0 19.5% ;
`;
const BottomDiv = styled.div`
  height: 50px;
  margin: 0 2% ;
  color: #5D5D5D;
`;
const StyledLink = styled.a`
  color: #0654BA;
  margin: 0 2px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const ReturnPolicy = ()=> {
  return (
    <div>
      <Container>
        <StyledHeader>Return policy</StyledHeader>
        <FieldsDiv>
          <FieldValues>After receiving the item, contact seller within</FieldValues>
          <FieldValues>Refund will be given as</FieldValues>
          <FieldValues>Return shipping</FieldValues>
        </FieldsDiv>
        <DataDiv>
          <Data1>30 days</Data1>
          <Data2>Money back</Data2>
          <Data3>Seller pays for return shipping</Data3>
        </DataDiv>
        <BottomDiv>Refer to <StyledLink> eBay Return policy</StyledLink> for more details. You are covered by the<StyledLink>eBay Money Back Guarantee</StyledLink>if you receive an item that is not as described in the listing.</BottomDiv>
      </Container>
    </div>
  )
}
export default ReturnPolicy;