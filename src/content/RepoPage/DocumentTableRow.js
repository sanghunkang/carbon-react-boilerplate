import React, {useEffect, useRef, useState} from 'react';
import {
  Modal,
  TableExpandRow,
  TableCell,
  Button,
} from 'carbon-components-react';
// import UpdateModal from '../../components/UpdateModal';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// function StatusTableCell(props) {
//   const [rawDocumentSyncStatus, setRawDocumentSyncStatus] = useState(props.cell.value === 'processing'? 'processing': '...');
//   const [postprocessedSyncStatus, setPostprocessedSyncStatus] = useState('...');

//   useEffect(() => {
//     fetch(`/documents/synccheck?filename=${props.filename}&collection_name=raw_document`)
//       .then(res => res.json())
//       .then(data => setRawDocumentSyncStatus(data.raw_document_sync_status))
//       .catch(err => console.log(err));

//     fetch(`/documents/synccheck?filename=${props.filename}&collection_name=postprocess`)
//       .then(res => res.json())
//       .then(data => setPostprocessedSyncStatus(data.postprocessed_sync_status))
//       .catch(err => console.log(err));
//   }, []);

//   useInterval(() => {
//     // Does nothing, because there's nothing to do anymore
//     if (rawDocumentSyncStatus === 'ready' && postprocessedSyncStatus === 'ready') {
//       console.log('perfectly ready');

//     // Check if postprocessing is finished
//     } else if (rawDocumentSyncStatus === 'ready' && postprocessedSyncStatus === 'processing') {
//       fetch(`/documents/synccheck?filename=${props.filename}&collection_name=postprocess`)
//         .then(res => res.json())
//         .then(data => {
//           console.log(props.filename, data);
//           setPostprocessedSyncStatus(data.postprocessed_sync_status);
//         })
//         .catch(err => console.log(err));

//     // Trigger postprocessing
//     } else if (rawDocumentSyncStatus === 'ready' && postprocessedSyncStatus === 'standby') {
//       setPostprocessedSyncStatus('processing');
//       fetch(`/documents/postprocess?filename=${props.filename}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
    
//     // Check if raw_document processing is finished
//     } else if (rawDocumentSyncStatus === 'processing') {
//       console.log(props.filename, 'processing');
//       fetch(`/documents/synccheck?filename=${props.filename}&collection_name=raw_document`)
//         .then(res => res.json())
//         .then(data => setRawDocumentSyncStatus(data.raw_document_sync_status))
//         .catch(err => console.log(err)); 
//     }
//   }, 5000);


//   return (
//     <TableCell className="sync-status" key={props.cell.id}>
//       원문: {rawDocumentSyncStatus},
//       <br/>
//       고급처리: {postprocessedSyncStatus}
//     </TableCell>
//   );
// }

const initialSyncStatuses = {
  "rawDocument": undefined,
  "tableCell": undefined,
};

function shrinkString(string, maxLength) {
  if (maxLength < string.length){
    return string.slice(0, maxLength) + '...';
  } else {
    return string;
  }
}

export default function DocumentTableRow (props) {
  // Initialised(?) by props
  const [currentSyncKey, setCurrentSyncKey] = useState(props.row.key);
  const [documentName, setDocumentName] = useState(props.row.name);
  const [updatedAt, setUpdatedAt] = useState(props.row.updatedAt);
  
  // Initialised by fetch
  const [syncStatusRawDocument, setSyncStatusRawDocument] = useState({
    'bucket': '...',
    'collection': '...',
  });
  const [syncStatusTableCell, setSyncStatusTableCell] = useState({
    'bucket': '...',
    'collection': '...',
  });

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchSyncStatusRawDocument();
    fetchSyncStatusTableCell();
  }, []);

  useEffect(() => {
    let formData = new FormData();
    formData.append('document_name', documentName);
    formData.append('current_sync_key', currentSyncKey);
    // formData.append('previous_sync_key', previousSyncKey);
    fetchSyncPropageteRawDocument();
    fetchSyncPropageteTableCell();
  })
  // useInterval(() => {
  //   fetchSyncStatusRawDocument();
  //   fetchSyncStatusTableCell();
  // }, 50000000);
  
  

  const openDeleteModal = (e) => setIsDeleteModalOpen(true);
  const closeDeleteModal = (e) => setIsDeleteModalOpen(false);
  const openUpdateModal = (e) => setIsUpdateModalOpen(true);
  const closeUpdateModal = (e) => setIsUpdateModalOpen(false);

  const fetchSyncStatusRawDocument = () => {
    let query_params = encodeURIComponent();

    fetch(`/sync/check?filename=${documentName}&collection_name=raw-documents&previous_sync_key=&current_sync_key=${currentSyncKey}`)
      .then(res => res.json())
      .then(data => setSyncStatusRawDocument({'bucket': data.bucket, 'collection': data.collection}))
      .catch(err => console.log(err));
  }

  const fetchSyncStatusTableCell = () => {
    let query_params = encodeURIComponent();

    fetch(`/sync/check?filename=${documentName}&collection_name=table-cells&previous_sync_key=&current_sync_key=${currentSyncKey}`)
      .then(res => res.json())
      .then(data => setSyncStatusTableCell({'bucket': data.bucket, 'collection': data.collection}))
      .catch(err => console.log(err));
  }

  const fetchDocumentDelete = (formData) => {
    fetch('/documents/delete', {'method': 'POST', 'body': formData })
      .then(res => res.json())
      .then(data => console.log(data, 'trigger destruction at parent'))
      .catch(err => console.log(err));
  }

  const fetchSyncPropageteRawDocument = (formData) => {
    fetch('/sync/propagate', {'method': 'POST', 'body': formData})
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  const fetchSyncPropageteTableCell = (formData) => {
    fetch('/sync/propagate', {'method': 'POST', 'body': formData})
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };


  const handleClickModalDelete = (e) => {
    let formData = new FormData({});
    formData.append('current_sync_key', currentSyncKey);
    fetchDocumentDelete(formData);

    closeDeleteModal();
    // TODO: Register to subsciprtion queue
    setSyncStatusRawDocument('deleting');
  }



  return (
    <TableExpandRow>
      <TableCell>{documentName}</TableCell>
      <TableCell>{updatedAt}</TableCell>
      <TableCell className="sync-status">
        <p><b>Latest Sync:</b> {currentSyncKey}</p>
        <p>
          <b>Raw Document:</b><br/>
          bucket: {syncStatusRawDocument.bucket}<br/>
          collection: {syncStatusRawDocument.collection}
        </p>
        <p>
          <b>Post indexed:</b><br/>
          bucket: {syncStatusTableCell.bucket}<br/>
          collection: {syncStatusTableCell.collection}
        </p>
      </TableCell>
      <TableCell>
        <div>
          <Button
            size="small"
            kind="primary"
            onClick={openUpdateModal}
          >
            Update
          </Button>
          <UpdateModal
            closeDeleteModal={closeDeleteModal}
            handleClickModalDelete={handleClickModalDelete}
            isDeleteModalOpen={isDeleteModalOpen}
          />
          
          {/* <Modal
            iconDescription="Close the modal"
            modalAriaLabel="A label to be read by screen readers on the modal root node"
            modalHeading="Update Document"
            modalLabel="Update Document"
            onBlur={function noRefCheck(){}}
            onClick={function noRefCheck(){}}
            onFocus={function noRefCheck(){}}
            onKeyDown={function noRefCheck(){}}
            onRequestClose={closeUpdateModal}
            // onRequestSubmit={handleClickModalDelete}
            onSecondarySubmit={closeUpdateModal}
            open={isUpdateModalOpen}
            passiveModal={false}
            primaryButtonText="Update"
            secondaryButtonText="Cancel"
            selectorPrimaryFocus="[data-modal-primary-focus]"
          >
            <p className="bx--modal-content__text">
              Please see ModalWrapper for more examples and demo of the functionality.
            </p>
          </Modal> */}
          <Button
            size="small"
            kind="secondary"
            onClick={openDeleteModal}
          >
            Revert
          </Button>
          <Button
            size="small"
            kind="danger"
            onClick={openDeleteModal}
          >
            Delete
          </Button>
          <Modal
            iconDescription="Close the modal"
            modalAriaLabel="A label to be read by screen readers on the modal root node"
            modalHeading="Delete Document"
            modalLabel="Delete Document"
            onBlur={function noRefCheck(){}}
            onClick={function noRefCheck(){}}
            onFocus={function noRefCheck(){}}
            onKeyDown={function noRefCheck(){}}
            onRequestClose={closeDeleteModal}
            onRequestSubmit={handleClickModalDelete}
            onSecondarySubmit={closeDeleteModal}
            open={isDeleteModalOpen}
            danger={true}
            passiveModal={false}
            primaryButtonText="Delete"
            secondaryButtonText="Cancel"
            selectorPrimaryFocus="[data-modal-primary-focus]"
          >
            <p className="bx--modal-content__text">
              Please see ModalWrapper for more examples and demo of the functionality.
            </p>
          </Modal>
        </div>
      </TableCell>
    </TableExpandRow>
  )

}

function UpdateModal(props) {
  return (
    <Modal
      iconDescription="Close the modal"
      modalAriaLabel="A label to be read by screen readers on the modal root node"
      modalHeading="Delete Document"
      modalLabel="Delete Document"
      onBlur={function noRefCheck(){}}
      onClick={function noRefCheck(){}}
      onFocus={function noRefCheck(){}}
      onKeyDown={function noRefCheck(){}}
      onRequestClose={props.closeDeleteModal}
      onRequestSubmit={props.handleClickModalDelete}
      onSecondarySubmit={props.closeDeleteModal}
      open={props.isDeleteModalOpen}
      danger={true}
      passiveModal={false}
      primaryButtonText="Delete"
      secondaryButtonText="Cancel"
      selectorPrimaryFocus="[data-modal-primary-focus]"
    >
      <p className="bx--modal-content__text">
        Please see ModalWrapper for more examples and demo of the functionality.
      </p>
    </Modal>
  )
}

