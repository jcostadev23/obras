import SiteMenu from '@/components/menu';
import { Button, Tabs, TabItem, PhoneNumberField, Menu, MenuItem, CheckboxField, SearchField, Expander, ExpanderItem, Autocomplete, Card, Heading, Icon, Alert, Loader, SwitchField, TextField, PasswordField, Grid, Flex, Divider } from '@aws-amplify/ui-react';
import { useState } from 'react';
import React from "react";
import Calendar from "../components/Calendar/Calendar";
import { DiJsBadge } from 'react-icons/di';
export default function Home() {
  const [mostrar, setMostrar] = useState(false)
  return (
    <div>
      <SiteMenu />

      <Menu
        menuAlign="start"
      >
        <MenuItem onClick={() => setMostrar(true)}>
          Enviar msg
        </MenuItem>

        <MenuItem onClick={() => setMostrar(false)}>
          Exit Menu
        </MenuItem>

      </Menu>
      {mostrar && <div>mostrar apos enviar msg</div>}
      <Flex direction="column">

      </Flex>
      <PasswordField
        autoComplete="new-password"
        descriptiveText="Please enter password"
        label="Password"
        name="password"
        size="small"
      />

      ola eu sou costa e este e o meu site
      <div style={{ background: "blue", color: "pink" }}>para ti minha princesa </div>
      <Button variation="primary">costa</Button>
      <div><input></input></div>
      <div>
        <textarea></textarea>
      </div>
      <hr></hr>
      <TextField
        descriptiveText="Enter a valid last name"
        placeholder="Baggins"
        label="Last name"
        errorMessage="There is an error"
      />
      <Tabs
        justifyContent="flex-start">
        <TabItem title="obra manuel">
          <Alert>This Alert is not dismissible by default</Alert>
          <Alert isDismissible={true}>Click the X to dismiss this Alert</Alert>
          <Button variation="primary">mais um button</Button>

          Tab content #1
        </TabItem>
        <TabItem title="obra maria">
          <PhoneNumberField
            defaultDialCode="+1"
            label="Numero Telf:"
            descriptiveText="Please enter your phone number"
            placeholder="234-567-8910"
          />
          Tab content #2
        </TabItem>
        <TabItem title="Disabled" isDisabled={true}>
          Cannot click
        </TabItem>
      </Tabs>
      <CheckboxField
        label="Muros"
        name="muros"
        value="yes"
      />
      <CheckboxField
        label="Janelas"
        name="janelas"
        value="yes"
      />
      <CheckboxField
        label="Jardim"
        name="jardim"
        value="yes"
      />


      <div>

      </div>
      <Loader
      />

      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="1fr 1fr 1fr"
        templateRows="1fr 3fr 1fr"
      >
        <Card
          columnStart="1"
          columnEnd="-1"
        >


        </Card>
        <Card
          columnStart="1"
          columnEnd="2"
        >
          <Autocomplete
            label="Autocomplete"
            options={[{ "id": "apple", "label": "apple" }, { "id": "banana", "label": "banana" }, { "id": "cherry", "label": "cherry" }, { "id": "grape", "label": "grape" }, { "id": "kiwis", "label": "kiwis" }, { "id": "lemon", "label": "lemon" }, { "id": "mango", "label": "mango" }, { "id": "orange", "label": "orange" }, { "id": "strawberry", "label": "strawberry" }]}
            placeholder="Search here..."
          />

          {mostrar && <Expander>
            <ExpanderItem title="What is an ExpanderItem?" value="expander-item">
              An ExpanderItem contains all the parts of a collapsible section.
            </ExpanderItem>
            <ExpanderItem title="This is the item's title" value="unique-value">
              The `children` of the ExpanderItem are displayed here.
            </ExpanderItem>
          </Expander>}
        </Card>
        <Card
          columnStart="2"
          columnEnd="-1"
        >
          <div style={{ padding: "100px", background: "grey" }}>
            <Card>
              <Heading

                level={4}
              >
                Heading text
              </Heading>
              <div><Icon
                ariaLabel="Thumbs up"
                pathData="M9 21h9c.83 0 1.54-.5
1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17
1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"
              /> Gosto disto</div>
              <div><Icon ariaLabel="Javascript" as={DiJsBadge} /> Eu gosto Javascrip</div>

            </Card>
          </div>
        </Card>
        <Card
          columnStart="2"
          columnEnd="-1"
        >
          Footer
        </Card>
      </Grid>

    </div>
  )
  function App() {
    return <Calendar />;
  }
}

