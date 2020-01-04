import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  DataTable,
  FileUploaderDropContainer,
  FileUploader,
  Form,
  FormGroup,
  NumberInput,
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
  Toggle,
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  
  HeaderPanel,
  RadioButton,
  RadioButtonGroup,
  Search,
  Select,
  SelectItem,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
  TextInput,
  TextArea,
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
            <Form
              className="some-class"
              onSubmit={function noRefCheck(){}}
            >
              <FormGroup
                className="some-class"
                invalid={false}
                legendText="Checkbox heading"
                message={false}
                messageText=""
              >
                <Checkbox
                  className="some-class"
                  defaultChecked
                  id="checkbox-0"
                  indeterminate={false}
                  labelText="Checkbox label"
                  onChange={function noRefCheck(){}}
                />
                <Checkbox
                  className="some-class"
                  id="checkbox-1"
                  indeterminate={false}
                  labelText="Checkbox label"
                  onChange={function noRefCheck(){}}
                />
                <Checkbox
                  className="some-class"
                  disabled
                  id="checkbox-2"
                  indeterminate={false}
                  labelText="Checkbox label"
                  onChange={function noRefCheck(){}}
                />
              </FormGroup>
              <NumberInput
                className="some-class"
                id="number-input-1"
                label="Number Input"
                max={100}
                min={0}
                step={10}
                value={50}
              />
              <FormGroup
                className="some-class"
                invalid={false}
                legendText="Toggle heading"
                message={false}
                messageText=""
              >
                <Toggle
                  aria-label="Toggle"
                  className="some-class"
                  defaultToggled={false}
                  id="toggle-1"
                  labelA="Off"
                  labelB="On"
                  onToggle={function noRefCheck(){}}
                />
                <Toggle
                  aria-label="Toggle"
                  className="some-class"
                  defaultToggled={false}
                  disabled
                  id="toggle-2"
                  labelA="Off"
                  labelB="On"
                  onToggle={function noRefCheck(){}}
                />
              </FormGroup>
              <FormGroup
                className="some-class"
                invalid={false}
                legendText="File Uploader"
                message={false}
                messageText=""
              >
                <FileUploader
                  accept={[]}
                  buttonKind="primary"
                  buttonLabel="Add files"
                  className="some-class"
                  filenameStatus="uploading"
                  iconDescription="Provide icon description"
                  id="file-1"
                  labelDescription="Choose Files..."
                  multiple={false}
                  onClick={function noRefCheck(){}}
                />
              </FormGroup>
              <FormGroup
                className="some-class"
                invalid={false}
                legendText="Radio Button heading"
                message={false}
                messageText=""
              >
                <RadioButtonGroup
                  defaultSelected="default-selected"
                  labelPosition="right"
                  name="radio-button-group"
                  onChange={function noRefCheck(){}}
                  orientation="horizontal"
                >
                  <RadioButton
                    className="some-class"
                    id="radio-1"
                    labelText="Standard Radio Button"
                    value="standard"
                  />
                  <RadioButton
                    className="some-class"
                    id="radio-2"
                    labelText="Default Selected Radio Button"
                    value="default-selected"
                  />
                  <RadioButton
                    className="some-class"
                    id="radio-3"
                    labelText="Standard Radio Button"
                    value="blue"
                  />
                  <RadioButton
                    className="some-class"
                    disabled
                    id="radio-4"
                    labelText="Disabled Radio Button"
                    value="disabled"
                  />
                </RadioButtonGroup>
              </FormGroup>
              <FormGroup
                className="some-class"
                invalid={false}
                legendText="Search"
                message={false}
                messageText=""
              >
                <Search
                  className="some-class"
                  closeButtonLabelText="Clear search input"
                  id="search-1"
                  labelText="Search"
                  onChange={function noRefCheck(){}}
                  placeHolderText="Search"
                  type="text"
                />
              </FormGroup>
              <Select
                className="some-class"
                defaultValue="placeholder-item"
                disabled={false}
                helperText=""
                id="select-1"
                inline={false}
                invalid={false}
                invalidText=""
                labelText="Select"
                light={false}
              >
                <SelectItem
                  disabled
                  hidden
                  text="Choose an option"
                  value="placeholder-item"
                />
                <SelectItem
                  disabled={false}
                  hidden={false}
                  text="Option 1"
                  value="option-1"
                />
                <SelectItem
                  disabled={false}
                  hidden={false}
                  text="Option 2"
                  value="option-2"
                />
                <SelectItem
                  disabled={false}
                  hidden={false}
                  text="Option 3"
                  value="option-3"
                />
              </Select>
              <TextInput
                className="some-class"
                disabled={false}
                helperText=""
                id="test2"
                invalid={false}
                invalidText=""
                labelText="Text Input label"
                light={false}
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                placeholder="Placeholder text"
                type="text"
              />
              <TextInput
                className="some-class"
                disabled={false}
                helperText=""
                id="test3"
                invalid={false}
                invalidText=""
                labelText="Password"
                light={false}
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                required
                type="password"
              />
              <TextInput
                className="some-class"
                disabled={false}
                helperText=""
                id="test4"
                invalid
                invalidText="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."
                labelText="Password"
                light={false}
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                required
                type="password"
              />
              <TextArea
                className="some-class"
                cols={50}
                disabled={false}
                helperText=""
                id="test5"
                invalid={false}
                invalidText=""
                labelText="Text Area label"
                light={false}
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                placeholder="Placeholder text"
                rows={4}
              />
              <Button
                className="some-class"
                disabled={false}
                kind="primary"
                tabIndex={0}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </section>
        </div>

      </div>
    </div>
  )
}
