import React from 'react';
import ReadMoreReact from 'read-more-react';
const Row = ({values, changeFormat})=> {
  const row = {
     width: '5%',
     color: '#333333',
     fontSize: '13px',
     paddingLeft:'10px',
     fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
  }
  const row2 = {
    width: '25%',
    color: '#333333',
    fontSize: '13px',
    fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
 }
 const readMore = {
  width: '25%',
  color: '#333333',
  fontSize: '13px',
  paddingTop: '30px',
  fontFamily: 'Helvetica nueue, Helvetica, Verdana, Sans-serif',
 }
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
        <td style={row}> {toCapital(newKey1)}:</td>
        <td>
          <ReadMoreReact style={readMore}
          text={values[requiredKeys[i]]}
          min={80}
          ideal={150}
          max={250}
          readMoreText={<a style={{color: '#0654BA', cursor: 'default'}}>...Read more</a>}
          />
        </td>
        <td style={row}> {toCapital(newKey2)}:</td><td style={row2}>{values[requiredKeys[i + 1]]}</td>
      </tr>
      )
    } else if (newKey2) {
      items.push(
      <tr>
        <td style={row}> {toCapital(newKey1)}:</td><td style={row2}>{values[requiredKeys[i]]}</td>
        <td style={row}> {toCapital(newKey2)}:</td><td style={row2}>{values[requiredKeys[i + 1]]}</td>
      </tr>
      );
    } else {
      items.push(
        <tr>
          <td style={row}> {toCapital(newKey1)}:</td><td style={row2}>{values[requiredKeys[i]]}</td>
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