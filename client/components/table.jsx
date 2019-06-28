import React from 'react';
import styled from 'styled-components';


const FieldsDiv = styled.div`
  color: #333333;
  background-color: #E8E8E8;
  font-size: 10px;
  height: 30px;
  margin: 10px 25px;
  border-bottom: 1px solid #aaa;
`;
const FieldValue1 = styled.div`
  float: left;
  margin: 1% 2% 0 2% ;
`;
const FieldValue2 = styled.div`
  float: left;
  margin: 1% 5% ;
`;
const FieldValue3 = styled.div`
  float: left;
  margin: 1% 23% 0 6% ;
`;
const FieldValue4 = styled.div`
  float: left;
  margin: 1% 0% 0 5% ;
`;
const TableData = styled.div`
  color: #5D5D5D;
  background-color: white;
  margin: 10px 25px;
  height: 25px;
  border-bottom: 1px solid #aaa;
`;
const Data1 = styled.div`
  float: left;
  margin: 0 2% ;
  font-weight: bold;
`;
const Data2 = styled.div`
  float: left;
  margin: 0 0 0 6.5% ;
`;
const Data3 = styled.div`
  float: left;
  margin: 0 0 0 5%;
`;
const Data4 = styled.div`
  float: left;
  margin: 0 0 0 10.5%;
  margin-bottom: 2%;
`;
const ColoredSpan = styled.span`
  color: #23804F;
  font-size: 13px;
  font-weight: 400px;
  margin-left:3px;
`;
const ColoredSpan2 = styled.span`
  color: #23804F;
  font-size: 13px;
  font-weight: bold;
`;
const AsteriskDiv = styled.p`
  color: #767676;
  font-size: 10px;
  font-family: Verdana;
  height: 80px;
  margin: 0 5% ;
`;
const StyledLink = styled.a`
  color: #0654BA;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const TableData2 = styled(TableData)`
  border: none;
`;
const DataTb2 = styled(Data1)`
  font-weight: normal;
`;
const Table = ()=> {
    return (
      <div>
        <FieldsDiv>
            <FieldValue1>Shipping and handling</FieldValue1>
            <FieldValue2>To</FieldValue2>
            <FieldValue3>Service</FieldValue3>
            <FieldValue4>Delivery*</FieldValue4>
        </FieldsDiv>
        <TableData>
          <Data1>Free shipping</Data1>
          <Data2>United States</Data2>
          <Data3>Expedited Shipping(USPS Priority Mail<sup>&reg;</sup>)</Data3>
          <Data4><img src="delivery-truck.png" height="20px"/><ColoredSpan>FAST 'N FREE </ColoredSpan> Guaranteed by <ColoredSpan2>Sat. Jun. 29</ColoredSpan2></Data4>
        </TableData>
        <AsteriskDiv>
            <p>* The delivery date is not guaranteed until you have checked out using an instant payment method. If your Guaranteed Delivery item isn’t on time, you can (1) return the item, for a refund of the full price <br></br> and return shipping costs; or (2) keep the item and get a refund of your shipping costs (if shipping was free, get a $5 eBay voucher). Attempted delivery on or before the guaranteed date will be considered a timely delivery.<StyledLink href="">See Details</StyledLink></p>
        </AsteriskDiv>
        <FieldsDiv>
           <FieldValue1>Taxes</FieldValue1>
        </FieldsDiv>
        <TableData2>
          <DataTb2>Taxes may be applicable at checkout. <StyledLink>Learn more</StyledLink></DataTb2>
        </TableData2>
      </div>
    )
}
export default Table;