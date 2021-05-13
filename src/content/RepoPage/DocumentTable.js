import React, { useEffect, useState } from 'react';
import {
  DataTable,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableToolbar,
  TableToolbarSearch,
  TableToolbarContent,
} from 'carbon-components-react';
import DocumentTableHeader from './DocumentTableHeader';
import DocumentTableRow from './DocumentTableRow';


const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'updatedAt',
    header: 'Updated At',
  },
  {
    key: 'status',
    header: 'Status',
  },
  {
    key: 'actions',
    header: 'Actions',
  },
];

export default function DocumentTable(props) {
  const [rows, setRows] = useState([]);
  

  useEffect(() => {
    fetchDocumentInitialize();
  }, []);

  const fetchDocumentInitialize = () => {
    fetch('/documents/initialize')
      .then(res => res.json())
      .then(data => setRows(data))
      .catch(err => console.log(err));
  }

  // TODO: I don't understand this code yet
  // useEffect(() => {
  //   // initialRows.map((row) => {
  //   //   "cos_key": 
  //   // });
  //   console.log(initialRows)
  //   setRows(initialRows);
  // }, [initialRows]);
  

  return (  
    <DataTable
      rows={rows}
      headers={headers}
      // render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
      render={() => (
        
        
        <TableContainer
          title="Documents"
          description="A list of registered documents.">
          <TableToolbar>
          <Grid fullWidth>
          </Grid>
            <TableToolbarContent>
            <TableToolbarSearch />
            
            </TableToolbarContent>
          </TableToolbar>
          <Table>{/*   {...getTableProps()}> */}
            <DocumentTableHeader headers={headers}/>
            <TableBody>
              {rows.map((row, i) => {
                return(
                  <DocumentTableRow row={row} headers={headers}/>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};


