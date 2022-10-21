import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom"
 
const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Container className="d-flex">
        <Card.Body className={`${styles.loginCards} m-auto`}>
          <Card.Title tag="h2" className="fw-bold mb-1">
            Welcome !
          </Card.Title>
          <Card.Text className="mb-2 mt-3">
            Please sign-in to your account and start the adventure
          </Card.Text>
          <Form>
            <Form.Group>
              <Form.Label className="m-0 fw-semibold">User ID</Form.Label>
              <Form.Control type="text" name="userid" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label className="m-0 fw-semibold">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="......"
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button type="submit" className={`${styles.loginBtn}`} onClick={() => navigate("/home")}>
              Sign in
            </Button>
          </Form>
        </Card.Body>
      </Container>
    </div>
  );
};

export default Login;
