import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 5px 15px;
`;
const BoldDiv = styled.div`
  font-weight: bold;
`;
const NormalSpan = styled.span`
  font-weight: normal;
  margin-left: 10px;
`;
const RedSpan = styled.span`
  font-weight: bold;
  color: red;
  margin: 5px;
`;
const Detail = ({values}) => {
  return (
    <StyledDiv>
      <h4>Wmns Air Jordan 1 Retro High OG 'Twist'</h4>
      <BoldDiv>Style Code: <NormalSpan>CD0461-007</NormalSpan></BoldDiv>
      <BoldDiv>Size:  <NormalSpan> Available in multiple sizes, please select from the shoe size menu.</NormalSpan></BoldDiv>
      <p>{values.details}<RedSpan>Top Rated Plus</RedSpan>{values.details}</p>
      <BoldDiv>Free USPS Priority Mail Domestic US Shipping (1-3 Business Days)</BoldDiv>
      <p>{values.details}<RedSpan>100% authentic</RedSpan>{values.details}</p>
    </StyledDiv>
  )
}




export default Detail;