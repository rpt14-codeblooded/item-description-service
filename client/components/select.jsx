import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  margin-left: 10px;
  border-color: grey;
  outline: none;
  height: 20px;
`;

const Select = ({handleChange}) => {
  const countries = 'United States, Canada, United Kingdom,China, Germany, Japan, Brazil, France, Australia, Denmark, Romania, Slovakia, Bulgaria, Czech Republic, Finland, Hungary, Latvia, Lithuania, Malta, Estonia, Greece, Portugal, Cyprus, Slovenia, Sweden, Korea, South, Indonesia, Taiwan, South Africa, Thailand, Belgium, Hong Kong, Ireland, Netherlands, Poland, Spain, Italy, Austria, Bahamas, Israel, New Zealand, Philippines, Singapore, Switzerland, Norway, Saudi Arabia, Ukraine, United Arab Emirates, Qatar, Kuwait, Bahrain, Croatia, Republic of, Malaysia, Chile, Colombia, Costa Rica, Panama, Trinidad and Tobago, Guatemala, Honduras, Jamaica, Antigua and Barbuda, Aruba, Belize, Dominica, Grenada, Saint Kitts-Nevis, Saint Lucia, Montserrat, Turks and Caicos Islands, Barbados, Bangladesh, Bermuda, Brunei Darussalam, Bolivia, Ecuador, Egypt, French Guiana, Guernsey, Gibraltar, Guadeloupe, Iceland, Jersey, Jordan, Cambodia, Cayman Islands, Liechtenstein, Sri Lanka, Luxembourg, Monaco, Macau, Martinique, Maldives, Nicaragua, Oman, Peru, Pakistan, Paraguay, Reunion, Vietnam, Uruguay';
  const options = countries.split(",").sort();
  return (
    <StyledSelect name="country" onChange={handleChange}>
      {options.map((option, i) => <option selected="United States" value={option}>{option}</option>)}
    </StyledSelect>
  );
}
export default Select;