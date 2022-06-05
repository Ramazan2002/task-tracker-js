// import React from 'react'
import styled from 'styled-components'

// const InputField = ({value, type, label, placeholder, onChange, onBlur}) => (
//   <label>
//     {label}
//     <input
//       value={value}
//       type={type}
//       placeholder={placeholder}
//       onChange={onChange}
//       onBlur={onBlur}
//     />
//   </label>
// )

const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: ${(props) => props.Margin};
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
`

export default StyledInput
