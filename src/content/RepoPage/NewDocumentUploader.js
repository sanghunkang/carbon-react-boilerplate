import React, { useEffect, useState } from 'react';
import {
  Button,
  Column,
  Grid,
  FileUploader,
  Row,
  TextInput,
  Tile,

} from 'carbon-components-react';

export default function NewDocumentUploader() {
  const [addedFile, setAddedFile] = useState(null);
  const [documentName, setDocumentName] = useState('ACompliantDocumentName');

  // Logging purpose on dev
  useEffect(() => console.log(addedFile), [addedFile]);

  const handleChangeTextInput = (e) => {
    setDocumentName(e.target.value);
  }

  const handleAddFile = (e) => {
    setAddedFile(e.target.files[0]);    
  }

  const handleClickUploadNewDocuemt = (e) => {
    const formData = new FormData();
    formData.append('b_file', new Blob([addedFile]));
    formData.append('filename', documentName);
    
    fetch('/documents/upload', { method: 'POST', body: formData })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        setAddedFile(null);
        setDocumentName('');
      })
      .catch(err => console.log(err));
  }

  return(
    <Tile light={false}>
      <Grid>
        <Row>
          <Column lg={8} md={4}>
            <TextInput
              className="some-class"
              defaultValue={documentName}
              disabled={false}
              // helperText="Optional helper text."
              id="test2"
              invalid={false}
              invalidText="A valid value is required"
              labelText="Enter document name"
              light={false}
              onChange={handleChangeTextInput}
              onClick={function noRefCheck(){}}
              placeholder="Placeholder text"
              size={undefined}
              type="text"
            />
          </Column>
          <Column lg={4} md={2}>
            <FileUploader
              accept={['.pdf']}
              buttonKind="primary"
              buttonLabel="Add files"
              filenameStatus="edit"
              iconDescription="Clear file"
              // labelDescription="only .pdf"
              labelTitle="Upload"
              multiple
              name=""
              onChange={handleAddFile}
              onClick={function noRefCheck(){}}
            />
          </Column>
          <Column lg={4} md={2}>
            <Button
              size="small"
              onClick={handleClickUploadNewDocuemt}
              kind="primary">
              Upload new doucment
            </Button>
          </Column>
        </Row>
      </Grid>
    </Tile>
  )
}