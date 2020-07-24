import {
  Card,
  CardBody,
  Button,
  Row,
  FormGroup,
  Label,
  FormText,
} from "reactstrap";
import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import * as moment from "moment";

// https://www.npmjs.com/package/react-table-6

// Utils folder
const filterCaseInsensitive = (filter, row) => {
  const id = filter.pivotId || filter.id;
  return row[id] !== undefined
    ? String(row[id])
        .toLocaleLowerCase()
        .startsWith(String(filter.value).toLocaleLowerCase())
    : true;
};

const Table = ({ data }) => {
  const columns = [
    {
      Header: "name",
      accessor: "name",
      filterable: true,
    },
    {
      Header: "email",
      accessor: "email",
      filterable: true,
    },
    {
      Header: "age",
      accessor: "age",
      filterable: true,
    },
    {
      Header: "birthdate",
      accessor: "birthdate",
      filterable: true,
      Cell: (props) => {
        return moment(props.birthdate).format("DD/MM/YYYY");
      },
    },
  ];

  return (
    <>
      <Card>
        <CardBody>
          <ReactTable
            defaultFilterMethod={filterCaseInsensitive}
            className="-striped -highlight"
            columns={columns}
            data={data}
            defaultPageSize={5}
            showPageJump
            showPageSizeOptions
            // manual // informs React Table that you'll be handling sorting and pagination server-side
            // onFetchData={onFetchData}
            // pages={pages}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default Table;
