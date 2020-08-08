import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import AddClient from "./AddClient";
import ListClient from "./ListClient";

export default function Clients() {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    age: "",
    birthdate: "",
    acceptTerms: false,
    gender: false,
    country: "",
    techs: [],
  });

  const [users, setUsers] = useState([
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

  const handleSubmit = (value) => {
    setUsers([...users, value]);
    console.log(value);
  };

  const getRecord = () => {
    console.log("teste3");
    setInitialValues({
      name: "Teste 3",
      email: "teste3@email.com",
      age: "18",
      birthdate: "2000-10-10",
      acceptTerms: true,
      gender: "male",
      country: "2",
      techs: [
        { value: "1", label: "React" },
        { value: "3", label: "Vue" },
      ],
    });
  };

  return (
    <>
      <Row>
        <Col md="12" className="mb-3">
          <AddClient
            onSubmit={handleSubmit}
            initialValues={initialValues}
            getRecord={getRecord}
          />
        </Col>
        <Col md="12">
          <ListClient clients={users} />
        </Col>
      </Row>
    </>
  );
}
