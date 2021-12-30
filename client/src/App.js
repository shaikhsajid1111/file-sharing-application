import './App.css';
import ResponsiveAppBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadInputFile from './components/uploadInput';
import FetchFileDetails from './components/fetchFiles';
import { useState } from 'react';


function App() {
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => {
    setSize(window.innerWidth);
  }
  window.addEventListener("resize", updateSize);
  return (
    <>
  <ResponsiveAppBar/>
      <div className="container-fluid">
        <div className='row vh-100 d-flex justify-content-center align-items-center'>
          <div className="col right">      <UploadInputFile /></div>
          {size <= 481 ? (<hr className='border-line'/>) : ""}
          <div className="col left ">      <FetchFileDetails /></div>

        </div>

      </div>
    </>
      );
}

export default App;
