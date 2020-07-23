import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import AddClient from "./AddClient";
import ListClient from "./ListClient";

export default function Clients() {
  const [user, setUser] = useState([
    {
      acceptTerms: true,
      age: 11,
      birthdate: "2020-07-08",
      country: "2",
      email: "teste1@email.com",
      gender: "female",
      name: "Teste 1",
      techs: [],
    },
    {
      acceptTerms: true,
      age: 15,
      birthdate: "2020-07-09",
      country: "1",
      email: "teste2@email.com",
      gender: "male",
      name: "Teste 2",
      techs: [],
    },
  ]);

  function handleSubmit(value) {
    setUser([...user, value]);
    console.log(value);
  }

  return (
    <>
      <Row>
        <Col md="12" className="mb-3">
          <AddClient onSubmit={handleSubmit} />
        </Col>
        <Col md="12">
          <ListClient clients={user} />
        </Col>
      </Row>
    </>
  );
}
