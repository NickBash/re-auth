import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import {Container, Tabs, Tab} from 'react-bootstrap';
import RegForm from './RegForm';
import LoginForm from './LoginForm';

const TabMenu: FC = () => {

  return (
    <Container>
      <Tabs id="uncontrolled-tab-example" className="mb-3 mt-5">
        <Tab eventKey="login" title="Sign in">
          <LoginForm />
        </Tab>
        <Tab eventKey="reg" title="Registration">
          <RegForm />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default observer(TabMenu);
