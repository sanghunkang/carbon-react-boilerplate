import React, { useState } from 'react';
import { DataTable } from 'carbon-components';
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;

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

  return(
    <div id="main-content">
      <div className="bx--grid">
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
              filterRows={function noRefCheck(){}}
              headers={[
                {
                  header: 'Name',
                  key: 'name'
                },
                {
                  header: 'Protocol',
                  key: 'protocol'
                },
                {
                  header: 'Port',
                  key: 'port'
                },
                {
                  header: 'Rule',
                  key: 'rule'
                },
                {
                  header: 'Attached Groups',
                  key: 'attached_groups'
                },
                {
                  header: 'Status',
                  key: 'status'
                }
              ]}
              locale="en"
              render={function noRefCheck(){}}
              rows={[
                {
                  attached_groups: 'Kevins VM Groups',
                  id: 'a',
                  name: 'Load Balancer 3',
                  port: 3000,
                  protocol: 'HTTP',
                  rule: 'Round robin',
                  status: 'Disabled'
                },
                {
                  attached_groups: 'Maureens VM Groups',
                  id: 'b',
                  name: 'Load Balancer 1',
                  port: 443,
                  protocol: 'HTTP',
                  rule: 'Round robin',
                  status: 'Starting'
                },
                {
                  attached_groups: 'Andrews VM Groups',
                  id: 'c',
                  name: 'Load Balancer 2',
                  port: 80,
                  protocol: 'HTTP',
                  rule: 'DNS delegation',
                  status: 'Active'
                },
                {
                  attached_groups: 'Marcs VM Groups',
                  id: 'd',
                  name: 'Load Balancer 6',
                  port: 3000,
                  protocol: 'HTTP',
                  rule: 'Round robin',
                  status: 'Disabled'
                },
                {
                  attached_groups: 'Mels VM Groups',
                  id: 'e',
                  name: 'Load Balancer 4',
                  port: 443,
                  protocol: 'HTTP',
                  rule: 'Round robin',
                  status: 'Starting'
                },
                {
                  attached_groups: 'Ronjas VM Groups',
                  id: 'f',
                  name: 'Load Balancer 5',
                  port: 80,
                  protocol: 'HTTP',
                  rule: 'DNS delegation',
                  status: 'Active'
                }
              ]}
              size={null}
              sortRow={function noRefCheck(){}}
              translateWithId={function noRefCheck(){}}
            />
            {/* <DataTable
              rows={rows}
              headers={headers}
              render={({ rows, headers, getHeaderProps }) => (
                <TableContainer title="DataTable">
                  <Table>
                    <TableHead>
                      <TableRow>
                        {headers.map(header => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow key={row.id}>
                          {row.cells.map(cell => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            /> */}
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
