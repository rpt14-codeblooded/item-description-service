import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Row from './row.jsx';
const Description = (props) => {
  const linkStyle = {
    float: 'right',
    color: '#0654BA',
    fontSize:'13 px',
    padding: '10px',
    cursor: 'default'
  }
  const tabStyle = {
    color: '#0654BA',
    fontSize: '14px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
    fontWeight: 'bold',
    padding: '8px 20px',
    margin: '4px -1px 0px 0px'
  }
  const idStyle = {
    color: '#767676',
    fontSize: '13px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
    padding: '0px 25px 0px 0px',
    fontWeight: 'bold',
    float: 'right',
    marginTop: '0px',
    marginRight: '50px'
  }
  const paraStyle = {
    color: '#333333',
    fontSize: '13px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
    padding: '0px 8px 3px 10px',
    marginTop: '45px',
    marginLeft: '15px',
  }
  const para2Style = {
    color: '#333333',
    fontSize: '13px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
    padding: '0px 8px 3px 10px',
    marginTop: '1px',
    marginLeft: '15px',
  }
  const tableStyle = {
    border: '1px solid #767676',
    marginLeft: '18px',
    width: '95%',
    cellSpacing: '0',
    cellPadding: '0',
  }
  const itemSpecificsStyle = {
    color: '#333333',
    fontSize: '16px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
    fontWeight: 'bold',
    margin: '10px 15px'
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
  console.log('itemSpecifics ', itemSpecifics);

  return (
      <Tabs defaultactivekey="Submit">
        <TabList >
          <Tab eventkey="Description" title="Description" style={tabStyle}>Description</Tab>
          <Tab eventkey="Shipping and payments" title="Shipping and payments"style={tabStyle}>Shipping and payments</Tab>
          <span style={linkStyle}><a>Report item</a></span>
        </TabList>
        <TabPanel>
          <div style={idStyle}>item number:  {itemSpecifics.id}</div>
          <p style={paraStyle}>Seller assumes all responsibility for this listing.</p>
          <p style={para2Style}>Last updated on  <strong>{props.values.lastUpdatedOn}</strong> <a href="" style={{color:'#0654BA',textDecoration: 'none'}}>  View all revisions</a></p>
          <div style= {tableStyle}>
            <div style={itemSpecificsStyle}>Item specifics</div>
            <table>
              <Row values={itemSpecifics} changeFormat={changeFormat}/>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
  )
}
export default Description;
