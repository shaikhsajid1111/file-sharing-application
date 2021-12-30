import { Form, Button, Container, ProgressBar, Alert, Table } from "react-bootstrap";
import './styles/uploadInput.css';
import { useState } from "react";
import axios from 'axios';

const UploadInputFile = (props) => {
  const [file, setFile] = useState(null); //state variable to hold the uploaded file
  const [secretKey, setSecretKey] = useState(""); //state variable to hold secret key
  const [progress, setProgress] = useState(0); //state variable to hold progress of file upload
  const [uploadStatus, setUploadedStatus] = useState(false); //state variable to hold upload status whether upload was success or failure
  const [response, setResponse] = useState(''); //state variable to hold response after upload that have been fetched after making POST request
  const [show, setShow] = useState(false); //state variable to hold the condition whether to show error modal?

  const handleFile = (e) => {
    //function to hold the file which is being uploaded
    const file = e.target.files[0];
    setFile(file); //set the file
  }
  const uploadFile = (e) => {
    /**function to hold file upload */
    if (file !== null & secretKey !== "") {
      const data = new FormData();
      data.append("file", file);
      data.append("secretKey", secretKey);
      axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/uploadfile`, data, {
        onUploadProgress: (ProgressEvent) => {
          let progress = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100);
          setProgress(progress);
        }
      }).then((response) => {
        setProgress(0);
        setUploadedStatus(true);
        setResponse(response.data);
        console.log(response);
      }).catch(error => {
        setResponse(error.response);
        setShow(true);
      })
    }

  }

  const handleSecretKey = (e) => {
    let secretKey = e.target.value;
    setSecretKey(secretKey);
  }
  return (
    <>
      <Container className="file-upload-container d-flex justify-content-md-center align-items-center flex-column">

        {show === true ? (<Alert variant="danger" className='w-50' onClose={() => setShow(false)} dismissible>
          <p className='text-center'>
            Error Occured!
          </p>
        </Alert>
        ) : ""}
        <br />

        <Form.Group controlId="formFileSm" className="text-center">
          <Form.Label>Upload File</Form.Label>
          <input type="file" onChange={handleFile} name="file" className="file-upload text-center" size="sm" />
        </Form.Group>
        <br />
        <Form.Group controlId="formPasswordSm">
          <Form.Control type="password" name="secretKey" onChange={handleSecretKey} placeholder="Secret Key" className="text-center custom-input" required />
        </Form.Group>
        <br />
        <Button variant="dark" onClick={uploadFile} className="btn-md custom-button">Upload</Button>

        <br />
        {progress > 0 ? (<ProgressBar variant="warning" animated now={progress} className="w-50" label={`${progress}%`} />) : ""}
        <br />
      </Container>

      <br />
      {uploadStatus === true ? (
        <div><Table striped bordered >
          <thead>
            <tr>
              <th>Unique ID</th>
              <th>{response.uniqueId}</th>
            </tr>
          </thead>

        </Table>
          <div className="text-center">

            <Button onClick={navigator.clipboard.writeText(response.uniqueId)}>Copy ID</Button></div> </div>)


        : ""}
      <br />
    </>
  )
}

export default UploadInputFile;