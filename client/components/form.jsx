import React from 'react';
import styled from 'styled-components';
import Select from './select.jsx';

const StyledLabel = styled.label`
  margin-left: 25px;
  color: #333333
`;
const StyledQuantity = styled.input`
  width: 45px;
  height: 22px;
  margin-left: 10px;
`;
const StyledButton = styled.button`
  margin-left: 150px;
  color: #0654ba;
  font-weight: bold;
  padding: 0px;
  height: 30px;
  width: 80px;
  font-size: 13px;
  background-color: white;
  border: 1px solid #aaa ;
  border-radius: 2px;
`;
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null,
      country: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('event' ,event);
    this.setState({
      [event.target.name]: event.target.value
    },()=>{});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state);
    event.preventDefault();
  }
  render() {
    return (
      <form method="POST" onSubmit={this.handleSubmit}>
        <StyledLabel>
          Quantity:
          <StyledQuantity type="text" name="quantity" onChange={this.handleChange} />
        </StyledLabel>
        <StyledLabel>
          Change country:
          <Select handleChange={this.handleChange} name="country"/>
        </StyledLabel>
        <StyledButton >Get Rates</StyledButton>
      </form>

    );
  }
}
export default Form;