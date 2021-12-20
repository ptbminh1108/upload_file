
import axios from 'axios';
import React, { useState } from 'react';
import FileData from '../components/fileData';
import ListFile from '../components/listfile';

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);


  const [files, setfiles] = useState(null);
  getListFile();

  function onFileChange(event) {

    // Update the state
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);


  };
  async function onFileUpload() {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "file",
      selectedFile,
      selectedFile.name
    );

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object

    
    await axios.post("https://file-server-du.herokuapp.com/upload_file", formData).then((response) =>{console.log(response)});

    getListFile();
    
  };

  async function getListFile(){
    const list_files = await axios.get("https://file-server-du.herokuapp.com/list_files").then((response) =>{ return response.data});

    setfiles(list_files);
  }
  
  return (
    <div>
      <h1>
        GeeksforGeeks
      </h1>
      <h3>
        File Upload using React!
      </h3>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>
          Upload!
        </button>
      </div>
      <FileData selectedFile = {selectedFile}/>
      <ListFile files = {files}/>
    </div>
  );
}