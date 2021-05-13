import React, { useEffect } from 'react';
import {
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
} from 'carbon-components-react';

export default function DocumentTableHeader(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return(
    <TableHead>
      <TableRow>
        <TableExpandHeader />
        {
          props.headers.map(header => {
            return (
              // <TableHeader key={header.header} {...props.getHeaderProps({ header })}>
              <TableHeader key={header.header}>
                {header.header}
              </TableHeader>
            );
          })
        }
      </TableRow>
    </TableHead>
  );
}