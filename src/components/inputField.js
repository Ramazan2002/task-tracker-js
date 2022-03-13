import React from 'react'
import styled from "styled-components";
import Button from "./buttons";

const InputField = ({ value, type, label, placeholder, onChange, onBlur }) => (
    <label>
      {label}
      <input value={value} type={type} placeholder={placeholder}
             onChange={onChange} onBlur={onBlur}/>
    </label>
);

const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: ${props => props.Margin};
  color: palevioletred;
  outline: none !important;
  border-color: palevioletred;
  border-radius: 7px;
  :focus {
    border-color: green;
    color: green;
    ::placeholder {
      color: green;
    }
  }
  ::placeholder {
    color: palevioletred;
  }
`;

const FileUploader = props => {

  const hiddenFileInput = React.useRef(null);
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <>
      <Button primary onClick={handleClick}>
        Upload avatar
      </Button>
      <input type="file" accept={props.accept} ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}} />
    </>
  );
};


export default StyledInput;
export {FileUploader};