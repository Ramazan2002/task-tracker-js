import React from 'react'
import Button from './Buttons'

const FileUploader = (props) => {
  const hiddenFileInput = React.useRef(null)
  const handleClick = () => {
    hiddenFileInput.current.click()
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    props.handleFile(fileUploaded)
  }

  return (
    <>
      <Button margin="0.3em" primary onClick={handleClick}>
        Upload avatar
      </Button>
      <input
        type="file"
        accept={props.accept}
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  )
}

export default FileUploader
