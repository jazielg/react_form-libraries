import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Alert,
  UncontrolledAlert,
  Button,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  CustomInput,
  FormFeedback,
} from "reactstrap";
import * as Yup from "yup";
import * as moment from "moment";
import Select from "react-select";

// Data for Select
const optionsTechs = [
  { value: "1", label: "React" },
  { value: "2", label: "Angular" },
  { value: "3", label: "Vue" },
];

const signup = ({ onSubmit, getRecord, initialValues }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(64, "Must be 64 characters or less")
      .required("Required"),
    email: Yup.string().email().required(),
    age: Yup.number().required().min(1).max(150).positive().integer(),
    birthdate: Yup.mixed().test("isDate", "Birth date is required", (value) => {
      return moment(value, "YYYY-MM-DD", true).isValid();
    }),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms & Conditions is required"
    ),
    gender: Yup.string().oneOf(["male", "female"], "The gender is required"),
    country: Yup.string().required(),
    techs: Yup.string().required(),
  });

  return (
    <>
      <h3 className="m-4 p-4">
        Basic React Form with Formik, Yup validation, Reactstrap, React-Table-6
        and React-Select
      </h3>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input tag={Field} id="name" type="text" name="name" />
                  <ErrorMessage
                    className="d-block"
                    component={FormFeedback}
                    name="name"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input tag={Field} id="email" type="email" name="email" />
                  <ErrorMessage
                    className="d-block"
                    component={FormFeedback}
                    name="email"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label htmlFor="age">Age</Label>
                  <Input tag={Field} id="age" type="number" name="age" />
                  <ErrorMessage
                    className="d-block"
                    component={FormFeedback}
                    name="age"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label htmlFor="birthdate">Birth date</Label>
                  <Input
                    tag={Field}
                    id="birthdate"
                    type="date"
                    name="birthdate"
                  />
                  <ErrorMessage
                    className="d-block"
                    component={FormFeedback}
                    name="birthdate"
                  />
                </FormGroup>
              </Col>

              <Col md={3}>
                <FormGroup>
                  <Label for="acceptTerms">Checkboxes</Label>
                  <div>
                    <CustomInput
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      label="Accept Terms & Conditions"
                      onChange={() => {
                        setFieldValue("acceptTerms", !values.acceptTerms);
                      }}
                    />
                    <ErrorMessage
                      className="d-block"
                      component={FormFeedback}
                      name="acceptTerms"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="gender">Gender</Label>
                  <div>
                    <CustomInput
                      type="radio"
                      id="female"
                      name="gender"
                      label="Female"
                      onChange={() => {
                        setFieldValue("gender", "female");
                      }}
                    />
                    <CustomInput
                      type="radio"
                      id="male"
                      name="gender"
                      label="Male"
                      onChange={() => {
                        setFieldValue("gender", "male");
                      }}
                    />
                    <ErrorMessage
                      className="d-block"
                      component={FormFeedback}
                      name="gender"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <CustomInput
                    type="select"
                    id="country"
                    name="country"
                    onChange={(event) =>
                      setFieldValue("country", event.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="1">Brazil</option>
                    <option value="2">Usa</option>
                    <option value="3">Japan</option>
                  </CustomInput>
                  <ErrorMessage
                    className="d-block"
                    component={FormFeedback}
                    name="country"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="techs">Techs</Label>
                  <Select
                    isMulti
                    name="techs"
                    id="techs"
                    options={optionsTechs}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    noOptionsMessage={() => "Sem opções"}
                    onChange={(values) => setFieldValue("techs", values)}
                  />
                </FormGroup>
                <ErrorMessage
                  className="d-block"
                  component={FormFeedback}
                  name="techs"
                />
              </Col>
              <Button color="secondary" type="button" onClick={getRecord}>
                Get record to fill form
              </Button>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default signup;
