import React from "react";
import { Form, Button } from "tabler-react";

function LoginForm({ user, handleLoginButton, onChangeField, error }) {
  return (
    <Form col="4">
      <Form.FieldSet>
        <Form.Input
          label="Username"
          placeholder="Username"
          value={user.username}
          name="username"
          error={error.username}
          onChange={(event) => onChangeField(event.target)}
        ></Form.Input>
        <Form.Input
          label="Password"
          placeholder="Password"
          value={user.password}
          name="password"
          type="password"
          error={error.password}
          onChange={(event) => onChangeField(event.target)}
        ></Form.Input>
      </Form.FieldSet>

      <Form.Footer>
        <Button type="button" onClick={handleLoginButton}>
          Submit
        </Button>
      </Form.Footer>
    </Form>
  );
}

export default LoginForm;
