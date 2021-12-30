import { Button, Form, Container,Alert,Table } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

const FetchFileDetails = (props) => {
  const [uniqueId, setUniqueId] = useState(""); //state variable to hold the uniqueID
  const [secretKey, setSecretKey] = useState(""); //state variable to hold secret key
  const [response, setResponse] = useState(''); //state variable to hold response data after fetch is complete
  const [show, setShow] = useState(false); //show error modal?
  const [codeStatus, setCodeStatus] = useState(0); //sets the code status in case failure, which will show error modal

  const handleUniqueId = (e) => {
    //function to handle the uniqueId which is being entered by the user
    const id = e.target.value;
    setUniqueId(id);
  }

  const handleSecretKey = (e) => {
    //function to handle the secretKey which is being entered by the user
    const key = e.target.value;
    setSecretKey(key);
  }
  const fetchFile = (e) => {
    //function to fetch file details
    if (uniqueId !== "" & secretKey !== "") {
      //if only the uniqueID and SecretKey is not empty
      const url = `${process.env.REACT_APP_API_BASE_URL}/api/file` //URL to where the POST request will be sent
      var data = new URLSearchParams();
      //set the payload
      data.append("secretKey", secretKey);
      data.append("uuid", uniqueId);
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      }
      const options = {
        method: "post",
        url: url,
        data: data,
        headers: headers
      }
      //make the POST request
      axios(options).then(response => {
        setResponse(response.data); //set the data
        setCodeStatus(response.status); //set the code status
        console.log(response.data.uuid); //set the UniqueID
      }).catch((error) => {
        /**if request fails */
        setResponse(error.response); //set the response to the state variable
        setShow(true); //set show to true so it'll alert the user
        setCodeStatus(error.response.status) //set the code status

      })
    }
  }
  return (
    <>

      <Container className="file-fetch-container d-flex justify-content-md-center align-items-center flex-column">

        {show === true ? (<Alert variant="danger" className='w-50' onClose={() => setShow(false)} dismissible>
          <p className='text-center'>
            Invalid Credentials!
          </p>
        </Alert>
        ) : ""}
        <br/>

        <Form.Group controlId="formFileFetchSm">
          <Form.Control type="text" onChange={handleUniqueId} name="uniqueId" className="file-upload custom-input text-center" placeholder="Unique ID" />
        </Form.Group>
        <br/>
        <Form.Group controlId="formPasswordFetchSm">
          <Form.Control type="password" onChange={handleSecretKey} name="secretKey" placeholder="Secret Key" className="text-center custom-input" required />
        </Form.Group>
        <br />
        <Button variant="dark" onClick={fetchFile} className="btn-md custom-button">Show</Button>

      </Container>
      {/*if the file fetch was successful */}
      <br />
      {codeStatus === 200 ?
        (<Table className="result-table" striped bordered hover>
        <thead>
          { console.log(response) }
          <tr>
            <td>Unique ID</td>
            <td>{ response.uuid }</td>
          </tr>
          <tr>
            <td>Filename</td>
            <td>{ response.fileName }</td>
          </tr>
          <tr>
            <td>Filesize</td>
              <td>{  response.fileSize }</td>
          </tr>
          <tr>
            <td>Download</td>
            <td><a className='btn btn-md bg-dark text-white custom-button' href={response.downloadLink}>Download</a></td>
          </tr>
          <tr>
            <td>Time Left</td>
              <td>{ response.timeLeft }</td>
          </tr>
        </thead>

      </Table>) : ""}


    </>
  );
}
export default FetchFileDetails;