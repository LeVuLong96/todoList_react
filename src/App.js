import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import NavbarTop from "./components/navbar";
import TodoList from "./components/todoList";

export default function App() {
  return (
      <Container>
        <Row>
          <Col><NavbarTop/></Col>
        </Row>
        <Row>
          <Col><TodoList/></Col>
        </Row>
      </Container>
  );
}

