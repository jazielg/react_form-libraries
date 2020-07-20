import React from "react";
import { Table } from "reactstrap";

export default function ListClient({ clients }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Birth</th>
          <th>Gender</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.age}</td>
            <td>{client.birthdate}</td>
            <td>{client.gender}</td>
            <td>{client.country}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
