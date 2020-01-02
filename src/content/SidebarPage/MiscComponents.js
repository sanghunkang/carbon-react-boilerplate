import React, { useState } from 'react';
import {
  Button,
  DataTable,
  FileUploaderDropContainer,
  FileUploader,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,

  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
} from 'carbon-components-react';
import Search20 from '@carbon/icons-react/lib/application/20';
import Notification20 from '@carbon/icons-react/lib/application/20';
import AppSwitcher20 from '@carbon/icons-react/lib/application/20';


export default function MiscComponents() {
  const rows = [
    {
      id: 'a',
      foo: 'Foo a',
      bar: 'Bar a',
      baz: 'Baz a',
    },
    {
      id: 'b',
      foo: 'Foo b',
      bar: 'Bar b',
      baz: 'Baz b',
    },
    {
      id: 'c',
      foo: 'Foo c',
      bar: 'Bar c',
      baz: 'Baz c',
    },
  ];
  
  // We would have a headers array like the following
  const headers = [
    {
      // `key` is the name of the field on the row object itself for the header
      key: 'foo',
      // `header` will be the name you want rendered in the Table Header
      header: 'Foo',
    },
    {
      key: 'bar',
      header: 'Bar',
    },
    {
      key: 'baz',
      header: 'Baz',
    },
  ];

  const getRowDescription = rowId => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : '';
  };

  const action = (text) => {
    console.log(text);
  }

  return(
    <div id="main-content">
      <div className="bx--grid">

          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Search"
              onClick={action('search click')}>
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Notifications"
              onClick={action('notification click')}>
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              isActive
              onClick={action('app-switcher click')}>
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
          <HeaderPanel aria-label="Header Panel" expanded>
            <Switcher role="menu" aria-label="Switcher Container">
              <SwitcherItem isSelected aria-label="Link 1" href="#">
                Link 1
              </SwitcherItem>
              <SwitcherDivider />
              <SwitcherItem href="#" aria-label="Link 2">
                Link 2
              </SwitcherItem>
              <SwitcherItem href="#" aria-label="Link 3">
                Link 3
              </SwitcherItem>
              <SwitcherItem href="#" aria-label="Link 4">
                Link 4
              </SwitcherItem>
              <SwitcherItem href="#" aria-label="Link 5">
                Link 5
              </SwitcherItem>
              <SwitcherDivider />
              <SwitcherItem href="#" aria-label="Link 6">
                Link 6
              </SwitcherItem>
            </Switcher>
          </HeaderPanel>
        <div className="bx--row">
          <section className="bx--offset-lg-3 bx--col-lg-13">
            <h2
              style={{
                fontWeight: "800",
                margin: "30px 0",
                fontSize: "20px"
              }}
            >
              Data Table
            </h2>
            
            <DataTable
              rows={rows}
              headers={headers}
              render={({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getTableProps,
              }) => (
                <TableContainer
                  title="Carbon Repositories"
                  description="A collection of public Carbon repositories.">
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        <TableExpandHeader />
                        {headers.map(header => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <React.Fragment key={row.id}>
                          <TableExpandRow {...getRowProps({ row })}>
                            {row.cells.map(cell => (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                          </TableExpandRow>
                          <TableExpandedRow colSpan={headers.length + 1}>
                            <p>{getRowDescription(row.id)}</p>
                          </TableExpandedRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            />
            <div className="bx--file__container">
              <FileUploader
                ref={function noRefCheck(){}}
                accept={[
                  '.jpg',
                  '.png'
                ]}
                buttonKind="primary"
                buttonLabel="Add files"
                filenameStatus="edit"
                iconDescription="Clear file"
                labelDescription="only .jpg files at 500mb or less"
                labelTitle="Upload"
                multiple
                name=""
                onClick={function noRefCheck(){}}
              />
              <Button
                disabled={false}
                kind="secondary"
                onClick={function noRefCheck(){}}
                size="small"
                style={{
                  marginTop: '1rem'
                }}
                tabIndex={0}
                type="button"
              >
                Clear File
              </Button>
              <FileUploaderDropContainer
                accept={[
                  'image/jpeg',
                  'image/png'
                ]}
                labelText="Drag and drop files here or click to upload"
                multiple
                name=""
                onAddFiles={function noRefCheck(){}}
                onChange={function noRefCheck(){}}
                role=""
                tabIndex={0}
              />
            </div>
            
            <p style={{ lineHeight: "20px" }}>
              The shell is perhaps the most crucial piece of any UI built with
              Carbon. It contains the shared navigation framework for the entire
              design system and ties the products in IBM’s portfolio together in a
              cohesive and elegant way. The shell is the home of the topmost
              navigation, where users can quickly and dependably gain their
              bearings and move between pages.
              <br />
              <br />
            </p>
          </section>
        </div>

      </div>
    </div>
  )
}
