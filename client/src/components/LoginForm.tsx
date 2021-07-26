import React, {FC, useContext, useState} from 'react';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import {Form, Button} from 'react-bootstrap';

const LoginForm: FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const {store} = useContext(Context)

  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Enter email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password}
                      placeholder="Password"/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={() => store.login(email, password)}>
        Sign in
      </Button>
    </div>
  )
}

export default observer(LoginForm);
