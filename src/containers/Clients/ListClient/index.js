import React from "react";
import Table from "./components/table";

export default function ListClient({ clients }) {
  return <Table data={clients} />;
}
