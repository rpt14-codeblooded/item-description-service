import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Row from './row.jsx';
import styled from 'styled-components';

const StyledLink = styled.span`
  float: right;
  color: #0654BA;
  font-size: 13 px;
  padding: 10px;
  cursor: default;
  `;
// const StyledTab = styled.span`
//     color: #0654BA;
//     font-size: 14px;
//     font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
//     font-weight: bold;
//     padding: 8px 20px;
//     margin: 4px -1px 0px 0px;
//   `;
const StyledId = styled.div`
  color: #767676;
  font-size: 13px;
  font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
  padding: 0px 25px 0px 0px;
  font-weight: bold;
  float: right;
  margin-top: 0px;
  margin-right: 50px;
  `;
  const StyledPara1 = styled.p`
    color: #333333;
    font-size: 13px;
    font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
    padding: 0px 8px 3px 10px;
    margin-top: 45px;
    margin-left: 15px;
  `;
  const StyledPara2 = styled.p`
    color: #333333;
    font-size: 13px;
    font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
    padding: 0px 8px 3px 10px;
    margin-top: 1px;
    margin-left: 15px;
  `;
  const StyledAnchor = styled.a`
    color: #0654BA;
    textDecoration: none;
    cursor: pointer;
  `;
  const StyledTable = styled.div`
    border: 1px solid #767676;
    margin-left: 18px;
    width: 95%;
    cell-spacing: 0;
    cell-padding: 0;
  `;
  const StyledItemSpecifics = styled.div`
    color: #333333;
    font-size: 16px;
    font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
    font-weight: bold;
    margin: 10px 15px;
  `;
const Description = (props) => {

  const styledTab = {
    color: '#0654BA',
    fontSize: '14px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
    fontWeight: 'bold',
    padding: '8px 20px',
    margin: '4px -1px 0px 0px'
  }

  // helper to convert properties of state object to required format
  const changeFormat = (str) => {
    if (str !== undefined && str.toLowerCase() !== str ) {
      str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
      console.log('str', str);
    }
    return str;
  }

  var itemSpecifics = {}
  for (var key in props.values) {
    itemSpecifics[changeFormat(key)] = props.values[key];
  }

  return (
      <Tabs defaultactivekey="Submit">
        <TabList >
          <Tab eventkey="Description" title="Description" style={styledTab}>Description</Tab>
          <Tab eventkey="Shipping and payments" title="Shipping and payments"style={styledTab}>Shipping and payments</Tab>
          <StyledLink><a>Report item</a></StyledLink>
        </TabList>
        <TabPanel>
          <StyledId>item number:  {itemSpecifics.id}</StyledId>
          <StyledPara1>Seller assumes all responsibility for this listing.</StyledPara1>
          <StyledPara2>Last updated on  <strong>{props.values.lastUpdatedOn}</strong> <StyledAnchor>  View all revisions</StyledAnchor></StyledPara2>
          <StyledTable>
            <StyledItemSpecifics>Item specifics</StyledItemSpecifics>
            <table>
              <Row values={itemSpecifics} changeFormat={changeFormat}/>
            </table>
          </StyledTable>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
  )
}
export default Description;
