import React from 'react';
import ReadMoreReact from 'read-more-react';
import styled from 'styled-components';

const StyledRow = styled.td`
    width: 5%;
    color: #333333;
    font-size: 13px;
    padding-left:10px;
    fontFamily: Helvetica nueue, Helvetica, Verdana, Sans-serif;
    `;
const StyledRow2 = styled.td`
      width: 25%;
      color: #333333;
      font-size: 13px;
      font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
    `;
const ReadMore = styled.div`
      color: #333333;
      font-size: 13px;
      padding-top: 30px;
      font-family: Helvetica nueue, Helvetica, Verdana, Sans-serif;
      `;

const Row = ({values, changeFormat})=> {

  const toCapital = (str)=> {
    if (str === 'mpn') {
      return 'MPN';
    } else {
      let first = str[0].toUpperCase();
      return first + str.slice(1);
    }
  }
  let items = []
  const keys = Object.keys(values);
  const requiredKeys = keys.filter((key)=> {
    return key !=='last Updated On' && key !== '_id' && key !== '__v' && key !== 'id';
  });
  for (var i = 0; i < requiredKeys.length; i+=2) {
    var newKey1 = changeFormat(requiredKeys[i]);
    var newKey2 = changeFormat(requiredKeys[i + 1]);
    if (requiredKeys[i] === 'condition') {
      items.push(
      <tr>
        <StyledRow>{toCapital(newKey1)}:</StyledRow>
        {/* <td style={row}> {toCapital(newKey1)}:</td> */}
        <td>
          <ReadMore>
          <ReadMoreReact
          text={values[requiredKeys[i]]}
          min={80}
          ideal={150}
          max={250}
          readMoreText={<a style={{color: '#0654BA', cursor: 'default'}}>...Read more</a>}
          />
          </ReadMore>
        </td>
        <StyledRow>{toCapital(newKey2)}:</StyledRow>
        <StyledRow2>{values[requiredKeys[i + 1]]}</StyledRow2>
      </tr>
      )
    } else if (newKey2) {
      items.push(
      <tr>
        <StyledRow>{toCapital(newKey1)}:</StyledRow><StyledRow2>{values[requiredKeys[i]]}</StyledRow2>
        <StyledRow> {toCapital(newKey2)}:</StyledRow><StyledRow2>{values[requiredKeys[i + 1]]}</StyledRow2>
      </tr>
      );
    } else {
      items.push(
        <tr>
          <StyledRow> {toCapital(newKey1)}:</StyledRow><StyledRow2>{values[requiredKeys[i]]}</StyledRow2>
        </tr>
      );
    }
  }
  return (

    <tbody>
      {items}
    </tbody>


  )
}
export default Row;