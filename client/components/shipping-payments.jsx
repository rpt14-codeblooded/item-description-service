import React from 'react';
import styled from 'styled-components';
import Form from './form.jsx';
import Table from './table.jsx';
import ReturnPolicy from './return-policy.jsx';
import PaymentDetails from './payment-details.jsx';
const StyledPara = styled.p`
  color: #333333;
  font-size: 13px;
  font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
  padding: 0px 8px 3px 10px;
  margin-top: 25px;
  margin-left: 10px;
`;
const StyledHeader = styled.h3`
  color: #333333;
  font-size: 16px
  font-family :Helvetica nueue, Helvetica, Verdana, Sans-serif;
  margin: 5px 0 0 25px;
  padding-bottom: 10px;
`;
const StyledBorder = styled.div`
  border: 1px solid #aaa;
  margin-left: 20px;
  margin-right: 20px;
  color: #5D5D5D;
  font-size: 13px;
  font-family :Helvetica nueue, Helvetica, Verdana, Sans-serif;
;`
const StyledLocation = styled.div`
  color: #5D5D5D;
  font-size: 13px;
  font-family :Helvetica nueue, Helvetica, Verdana, Sans-serif;
  margin-left: 25px;
  padding-top: 5px;
`;
const LocationSpan = styled.span`
  font-weight: bold;
  padding-left: 5px;
`;
const StyledPara2 = styled.p`
  padding-top: 5px;
  padding-left:25px;
  padding-bottom: 10px;
`;

const ShippingAndPayments = (props) => {
  return (
    <div>
      <StyledPara>Seller assumes all responsibility for this listing.</StyledPara>
      <StyledBorder>
        <StyledHeader>Shipping and handling</StyledHeader>
        <StyledLocation>Item location:<LocationSpan>Fort Lauderdale, Florida, United States</LocationSpan></StyledLocation>
        <StyledPara2>Shipping to: United States, Canada, United Kingdom, China, Germany, Japan, Brazil, France, Australia, Denmark, Romania, Slovakia, Bulgaria, Czech Republic, Finland, Hungary, Latvia, Lithuania, Malta, Estonia, Greece, Portugal, Cyprus, Slovenia, Sweden, Korea, South, Indonesia, Taiwan, South Africa, Thailand, Belgium, Hong Kong, Ireland, Netherlands, Poland, Spain, Italy, Austria, Bahamas, Israel, New Zealand, Philippines, Singapore, Switzerland, Norway, Saudi Arabia, Ukraine, United Arab Emirates, Qatar, Kuwait, Bahrain, Croatia, Republic of, Malaysia, Chile, Colombia, Costa Rica, Panama, Trinidad and Tobago, Guatemala, Honduras, Jamaica, Antigua and Barbuda, Aruba, Belize, Dominica, Grenada, Saint Kitts-Nevis, Saint Lucia, Montserrat, Turks and Caicos Islands, Barbados, Bangladesh, Bermuda, Brunei Darussalam, Bolivia, Ecuador, Egypt, French Guiana, Guernsey, Gibraltar, Guadeloupe, Iceland, Jersey, Jordan, Cambodia, Cayman Islands, Liechtenstein, Sri Lanka, Luxembourg, Monaco, Macau, Martinique, Maldives, Nicaragua, Oman, Peru, Pakistan, Paraguay, Reunion, Vietnam, Uruguay</StyledPara2>
        <Form/>
        <Table/>
      </StyledBorder>
      <ReturnPolicy/>
      <PaymentDetails/>
    </div>
   )
};
export default ShippingAndPayments;
