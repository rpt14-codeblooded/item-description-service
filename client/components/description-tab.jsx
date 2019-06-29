import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Row from './row.jsx';
import styled from 'styled-components';
import Detail from './detail.jsx';
import ShippingAndPayments from './shipping-payments.jsx';

const StyledLink = styled.span`
  float: right;
  color: #0654BA;
  font-size: 13 px;
  padding: 10px;
  cursor: default;
  `;
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
    padding: 0px 8px 0 10px;
    margin-top: 45px;
    margin-left: 15px;
  `;
  const StyledPara2 = styled.p`
    color: #333333;
    font-size: 13px;
    font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
    padding: 0px 8px 0px 10px;
    margin-top: 0px;
    margin-left: 15px;
  `;
  const StyledAnchor = styled.a`
    color: #0654BA;
    textDecoration: none;
    cursor: pointer;
  `;
  const StyledTable = styled.div`
    border: 1px solid #DDD;
    margin-left: 22px;
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
  const BorderedPanel = styled.div`
    border: 1px solid #ddd;
    border-top: none;
    background-color: white;
    padding-bottom: 50px;
  `;

// helper to convert properties of state object to required format

const changeFormat = (str) => {
  if (str !== undefined && str.toLowerCase() !== str ) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  return str;
}
const Description = (props) => {

  const styledTab = {
    color: '#0654BA',
    fontSize: '13px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
    fontWeight: 'bold',
    padding: '9px 20px',
    margin: '4px -1px 0px 0px',
    width: '70px',
    height: '23px',
    borderRadius: '3px',
    border: '1px solid #DDD',
    borderBottom: 'none',
    bottom: '-1px'
  }
  const styledTab2 = {
    color: '#0654BA',
    fontSize: '13px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
    fontWeight: 'bold',
    padding: '8px 20px',
    margin: '4px -1px 0px 0px',
    width: '150px',
    height: '23px',
    backgroundColor: '#F9F9F9',
    border: '1px solid #DDD',
    borderRadius: '3px',
    borderBottom: 'none',
    bottom: '-1px'

  }

  var itemSpecifics = {}
  for (var key in props.values) {
    itemSpecifics[changeFormat(key)] = props.values[key];
  }

  return (
      <Tabs defaultactivekey="Submit">
        <TabList >
          <Tab eventkey="Description" title="Description" style={styledTab}>Description</Tab>
          <Tab eventkey="Shipping and payments" title="Shipping and payments"style={styledTab2}>Shipping and payments</Tab>
          <StyledLink><a>Report item</a></StyledLink>
        </TabList>
        <TabPanel>
          <BorderedPanel>
            <StyledId>item number:  {itemSpecifics.id}</StyledId>
            <StyledPara1>Seller assumes all responsibility for this listing.</StyledPara1>
            <StyledPara2>Last updated on  <strong>{props.values.lastUpdatedOn}</strong> <StyledAnchor>  View all revisions</StyledAnchor></StyledPara2>
            <StyledTable>
              <StyledItemSpecifics>Item specifics</StyledItemSpecifics>
              <table>
                <Row values={itemSpecifics} changeFormat={changeFormat}/>
              </table>
            </StyledTable>
            <Detail values={props.values}/>
          </BorderedPanel>
        </TabPanel>
        <TabPanel>
          <BorderedPanel>
            <ShippingAndPayments/>
          </BorderedPanel>
        </TabPanel>
      </Tabs>
  )
}
export default Description;
