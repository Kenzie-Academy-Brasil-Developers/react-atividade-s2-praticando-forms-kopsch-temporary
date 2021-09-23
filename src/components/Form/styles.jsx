import styled from "styled-components";

export const StyledForm = styled.form`
  width: 500px;
  min-width: 300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  label {
    font-size: 10pt;
    margin-bottom: 10px;
  }

  a {
    font-size: 10pt;
    color: white;
  }

  @media(max-width: 800px) {
    width: 300px;

    a{
        font-size: 12pt;
    }

    label {
    font-size: 12pt;
  }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  border-radius: 5px;
  outline: none;
  font-size: 12pt;
  padding-left: 5px;
  border: ${props => props.borderWidth || '1px'} solid ${props => props.borderColor || 'black'};

  @media(max-width: 800px) {
    margin-bottom: 15px;
    font-size: 10pt;
  }
`;

export const StyledInputPassword = styled.input`
  width: 47.5%;
  height: 50px;
  border-radius: 5px;
  outline: none;
  font-size: 12pt;
  padding-left: 5px;
  border: ${props => props.borderWidth || '1px'} solid ${props => props.borderColor || 'black'};

  @media(max-width: 800px) {
    width: 45.8%;
    font-size: 10pt;
  }
`;

export const StyledButton = styled.button`
  width: 500px;
  height: 45px;
  border: 1px solid #2428a0;
  color: #2428a0;
  background-color: rgba(155,222,255,0.3);
  border-radius: 5px;
  cursor: pointer;

  @media(max-width: 800px) {
    width: 300px;
  }
`;
