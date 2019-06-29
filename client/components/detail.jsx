import React from 'react';
import styled from 'styled-components';
const HeaderDiv = styled.div`

  font-weight: bold;
  margin: 10px 0 0 6px;
`;
const StyledDiv = styled.div`
  padding: 5px 15px;
  font-size: 13px;
  font-family: Verdana;
  color: #000000;
`;
const BoldDiv = styled.div`
  font-weight: bold;
  margin-left: 6px;
`;
const NormalSpan = styled.span`
  font-weight: normal;
  margin-left: 9px;

`;
const StyledPara = styled.p`
  margin-left: 6px;

`;
const RedSpan = styled.span`
  font-weight: bold;
  color: red;
  margin: 5px;
`;
const Detail = ({values}) => {
  return (
    <StyledDiv>
      <HeaderDiv>Wmns Air Jordan 1 Retro High OG 'Twist'</HeaderDiv>
      <HeaderDiv>Style Code: <NormalSpan>CD0461-007</NormalSpan></HeaderDiv>
      <HeaderDiv>Size:  <NormalSpan> Available in multiple sizes, please select from the shoe size menu.</NormalSpan></HeaderDiv>
      <StyledPara>{values.details}<RedSpan>Top Rated Plus</RedSpan>{values.details}</StyledPara>
      <BoldDiv>Free USPS Priority Mail Domestic US Shipping (1-3 Business Days)</BoldDiv>
      <StyledPara>{values.details}<RedSpan>100% authentic</RedSpan>{values.details}</StyledPara>
    </StyledDiv>
  )
}




export default Detail;