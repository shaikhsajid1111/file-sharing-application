import { Nav, Container, Navbar, Offcanvas, Modal,Button } from 'react-bootstrap';
import { useState } from 'react';

const AboutModal = (props) => {
  /**modal that shows about the website */
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-about-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-about-modal">
          About
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>What is Filereal?</h4>
        <p>
          Filereal is an application that lets you share up to 10 files per 30 minutes anonymously.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const ManualModal = (props) => {
  /**modal that shows manual of the website */

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-manual-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-manual-modal">
          Manual
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>How to Use?</h4>
        <p>
          Uploading: <ol>
            <li>If wants to upload file, click on upload and set the secret key and click on "Upload" button.</li>
            <li>Copy the unique ID to share.</li>
          </ol>
        </p>
        <p>
          Downloading:
          <ol>
            <li>If wants to download the file, enter the Unique ID, secret key and click on "Show" button .</li>
            <li>When the Download button shows up in the table, click on "Download" and download shall start automatically.</li>
          </ol>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ResponsiveAppBar = () => {
  const [showAbout, setShowAbout] = useState(false); //show About modal?
  const [showManual, setShowManual] = useState(false); //show Manual modal?
  return (
    <>
      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Filereal</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/**onClick set the showAbout to true */}
                <Nav.Link onClick={() => setShowAbout(true)}>About</Nav.Link>
                {/**onClick set the showAbout to false */}
                <AboutModal show={ showAbout } onHide={() => setShowAbout(false)} />

                {/**onClick set the showManual to true */}
                <Nav.Link onClick={() => setShowManual(true)}>How to use?</Nav.Link>
                {/**onClick set the showAbout to false */}
                <ManualModal show={showManual} onHide={() => setShowManual(false)} />

              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default ResponsiveAppBar;
